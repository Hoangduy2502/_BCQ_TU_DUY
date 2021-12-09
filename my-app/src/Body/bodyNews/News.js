import React, { useRef } from 'react';
import "./new.css"
import iconFB from "./img/IconFB.png"
import ContanstGraphSql from '../../ContanstGraphSql';
import LoadingScreen from 'react-loading-screen';
import EmbedContainer from 'react-oembed-container';
const News = (props) => {
    const { isnewsData } = props

    const [isDetailNews, setIsDetailNews] = React.useState({
        content: "<script> </script>"
    })
    const [isLoading, setIsLoading] = React.useState(false)
    const [newmobile, setNewmobile] = React.useState(null)
    const isFirst = React.useRef(true)
    var url_string = window.location.href;
    var url = new URL(url_string);
    var client_id = React.useRef(url.searchParams.get("id") ? url.searchParams.get("id") : null);
    React.useEffect(() => {
        const onClickgetDetail = async () => {
            const detail = await ContanstGraphSql.getDetailBlogs(parseInt(client_id.current))

            setIsDetailNews(detail.getBlog.content[0])
        }
        if (isFirst.current) {
            isFirst.current = false;// có nhiều cách,vs lại code này còn phải sửa nhiều lắm
            onClickgetDetail() //?vl bạn tôi gọiietstate trong useEffect có cách nào ngon hơn k chỉ với
        }


    }, [client_id.current])


    const listNews = isnewsData != null && isnewsData.getBlog.content.map((list) => {
        return (
            <a href={`/News?id=${list.id}#challenge`}>
                <div className="justify-content-center container" >
                    <div className="d-flex NewHot justify-content-center container " >
                        <div className='col-6'>
                            {

                                list.thumbnail != null &&
                                < img className="pt-3 mb-4 w-100" src={process.env.REACT_APP_API_IMG + list.thumbnail.formats.thumbnail.url} />
                            }
                        </div>
                        <span className="col-6 pt-2 ">
                            <label className="NameNews" >{list.small_title}</label><br />
                            <label className="DateNew" >{list.created_at}</label>
                        </span>
                    </div>
                    <hr width="80%" color="black" align="center" size="2px"></hr>
                </div>
            </a>
        )
    })
    const onClickLink = () => {
        window.open("https://www.facebook.com/banhcuonquyenhaiphong")
    }
    function createMarkup(htmlString) {
        return { __html: htmlString }
    }
    React.useEffect(() => {
        async function getAllmobile() {
            await ContanstGraphSql.getBlogs(1, 1, 6).then((val) =>
                setNewmobile(val)
            )

        }
        getAllmobile()
    }, [])

    const listItemsMobile = newmobile != null && newmobile.getBlog.content.map((book, index) => {
        return (
            <li key={index}>
                {
                    book.thumbnail != null &&
                    <img className="img-carousel p-0" src={process.env.REACT_APP_API_IMG + book.thumbnail.formats.thumbnail.url} alt="First slide" />
                }

                <span className="text-news">
                    <a className="text-news-header" href={`/News?id=${book.id}`}>{book.title}</a>
                    <div className="text-news-body">{book.description}</div>
                    <div className="text-news-date">{book.created_at}</div>
                </span>
            </li>
        )
    })
    return (
        <div id="challenge" className="wrap-News">
            <div className="container-fluid p-0 breackcum-introbody">
                <div className="container p-1">
                    <ul>
                        <li><a>Trang chủ</a></li>
                        <li>/</li>
                        <li><a>Tin Tức</a></li>
                        <li>/{isDetailNews.title}</li>
                    </ul>
                </div>
            </div>
            <div className="container d-flex bodyNews p-1">
                <div className="col-sm-9 col-12">
                    <div className="row">
                        <div className="col-6 p-0">
                            <label>{isDetailNews.created_at} - Admin</label>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <img src={iconFB} onClick={onClickLink} />
                        </div>
                    </div>
                    <div className="row">
                        <label className="TitileNews"> {isDetailNews.title}</label>
                    </div>
                    <div className="row container p-5 reviews" >
                        <label className="Review" >{isDetailNews.description}</label>
                    </div>
                    <div className="row pt-4  container-fuild" >
                        
                            <div
                                style={{ width: "100%", whiteSpace: "pre-line" }}
                                className="Commnet"
                                dangerouslySetInnerHTML={createMarkup(isDetailNews.content)}
                            ></div>
                        
                    </div>

                </div>
                <div className="col-sm-3 col-0 New ml-5 p-0 ">
                    <div className="row d-flex Titile justify-content-center ">
                        <label className="row mt-4">TIN TỨC HOT</label>
                    </div>
                    <LoadingScreen
                        loading={isLoading}
                        bgColor='#f1f1f1'
                        spinnerColor='#ffbe00'
                        textColor='#676767'
                        // logoSrc={logoLoad}
                        text='Bạn đợi chút!!!'
                        style={{ margin: "0 auto" }}
                    >
                        <div className='slideNewsDetail'>
                            {listNews}
                        </div>
                    </LoadingScreen>


                    <div className="row d-flex allNew justify-content-center " style={{ cursor: "pointer" }} >
                        <a className="row mt-4" href="/News?#challenge">Xem tất cả các tin</a>
                    </div>
                </div>
            </div>
            <div className='slide-mobie-footer'>
                <ul>
                    {listItemsMobile}
                </ul>

            </div>
        </div>
    );
}

export default News;
