import React, { useRef } from 'react';
import data from "../../contant/index"
import "./new.css"
import iconFB from "./img/IconFB.png"
import test from "./img/2.png"
import ContanstGraphSql from '../../ContanstGraphSql';
import LoadingScreen from 'react-loading-screen';
import BreakingNews from '../../Footer/breakingNews';
const News = (props) => {
    const { marked } = require('marked');

    const DataDetail = data.DataDetail
    const { isnewsData, setIsnewsData } = props
  
    const [isDetailNews, setIsDetailNews] = React.useState({})
    const [isLoading, setIsLoading] = React.useState(false)
    const [newmobile,setNewmobile]= React.useState(null)
    
    var url_string = window.location.href;
    var url = new URL(url_string);
    var client_id = React.useRef(url.searchParams.get("id") ? url.searchParams.get("id") : null);
    // var checkLoad=React.useRef(0)
    React.useEffect(() => {
        const onClickgetDetail = async () => {
            if(client_id.current == null )
            {
                const data= await ContanstGraphSql.getBlogs()
                    setIsDetailNews(data.getBlogs[0])
                

            }
            else {
                const detail = await ContanstGraphSql.getDetailBlogs(parseInt(client_id.current))
                setIsDetailNews(detail.getBlogs[0])
            }
            

        }
        onClickgetDetail()
    }, [client_id.current])
  
    const listNews = isnewsData != null && isnewsData.getBlogs.map((list) => {
        return (
            <a href={`/News?id=${list.id}#challenge`}>
                <div className="justify-content-center container" >
                    <div className="d-flex NewHot justify-content-center container " >
                        <div className='col-6'>
                            {

                                list.thumbnail != null &&
                                < img className="pt-3 mb-4 w-100 h-100" src={process.env.REACT_APP_API_IMG + list.thumbnail.formats.thumbnail.url} />
                            }


                        </div>

                        <span className="col-6 pt-4 ">
                            <label className="NameNews" >{list.title}</label><br />
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
    var check = useRef(1)
    const Allnews = async () => {
        check.current = 0
        setIsLoading(true)
        await ContanstGraphSql.getBlogs().then((val) => {
            setIsnewsData(val);
            setIsLoading(false)

        }
        ).catch((err) => {
            console.log("LỖI", err)
            setIsLoading(false)
        })

        console.log("TEST", isnewsData)
    }
    const Reset = () => {
        window.location.reload()
    }
    function createMarkup(htmlString) {
        return { __html: htmlString }
    }
    React.useEffect(()=>{
        async function getAllmobile(){
            const data= await ContanstGraphSql.getBlogs().then((val)=>
            setNewmobile(val)
            )
            
        }
        getAllmobile()
    },[])
  
    const listItemsMobile = newmobile != null && newmobile.getBlogs.map((book, index) => {
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
                        <label className="Review" >{isDetailNews.small_title}</label>
                    </div>
                    {/* <div className="row container-fuild " >
                        <img className="img1" src={isDetailNews.image_link} style={{ width: "100%" }} />
                    </div> */}
                    <div className="row pt-4  container-fuild" >
                        <div style={{ width: "100%", whiteSpace: "pre-line" }} className="Commnet" dangerouslySetInnerHTML={createMarkup(isDetailNews.content)}></div>
                        {/* {console.log(isDetailNews.content.replaceAll('src="','src="https://up-dev.banhcuonquyen.vn'))} */}
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
                    {
                        check.current == 1 ?
                            <div className="row d-flex allNew justify-content-center " style={{ cursor: "pointer" }} onClick={Allnews}>
                                <a className="row mt-4" >Xem tất cả các tin</a>
                            </div>
                            :
                            <div className="row d-flex allNew justify-content-center " style={{ cursor: "pointer" }} onClick={Reset}>
                                <a className="row mt-4" >Quay Lại</a>
                            </div>

                    }

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
