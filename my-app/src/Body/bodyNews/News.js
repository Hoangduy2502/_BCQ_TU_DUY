import React, { useRef } from 'react';
import data from "../../contant/index"
import "./new.css"
import iconFB from "./img/IconFB.png"
import test from "./img/2.png"
import ContanstGraphSql from '../../ContanstGraphSql';
const News = (props) => {

    const DataDetail = data.DataDetail
    const { isnewsData, setIsnewsData } = props
    const [isDetailNews, setIsDetailNews] = React.useState({})
    var url_string = window.location.href;
    var url = new URL(url_string);
    var client_id = React.useRef(url.searchParams.get("id") ? url.searchParams.get("id") : null);
    React.useEffect(() => {

        const onClickgetDetail = async () => {
            const detail = await ContanstGraphSql.getDetailBlogs(parseInt(client_id.current))
            setIsDetailNews(detail.getBlogs[0])
        }
        onClickgetDetail()
    }, [client_id.current])
    const listNews = isnewsData != null && isnewsData.getBlogs.map((list) => {
        return (
            <a href={`/News?id=${list.id}#challenge`}>
                <div className="justify-content-center container" >
                    <div className="d-flex NewHot justify-content-center container " >
                        <img className="pt-3 mb-4 " src={test} />
                        <span className="col-6 pt-4 ">
                            <label className="NameNews" >{list.description}</label><br />
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
    var check = useRef(0)
    const Allnews = async () => {
        check.current = 1
        const news = await ContanstGraphSql.getBlogs()
        setIsnewsData(news)


    }
    const Reset = () => {
        window.location.reload()
    }

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
                    <div className="row container-fuild " >
                        <img className="img1" src={isDetailNews.img1} style={{ width: "100%" }} />
                    </div>
                    <div className="row pt-4  container-fuild" >
                        <label style={{ width: "100%", whiteSpace: "pre-line" }} className="Commnet">{isDetailNews.content}</label>

                    </div>

                </div>
                <div className="col-sm-3 col-0 New ml-5 p-0 ">
                    <div className="row d-flex Titile justify-content-center ">
                        <label className="row mt-4">TIN TỨC HOT</label>
                    </div>
                    <div className='slideNewsDetail'>
                        {listNews}
                    </div>
                    {
                        check.current != 1 ?
                            <div className="row d-flex allNew justify-content-center ">
                                <label className="row mt-4" onClick={Allnews}>Xem tất cả các tin</label>
                            </div>
                            :
                            <div className="row d-flex allNew justify-content-center ">
                                <label className="row mt-4" onClick={Reset}>Quay Lại</label>
                            </div>

                    }

                </div>
            </div>
        </div>
    );
}

export default News;
