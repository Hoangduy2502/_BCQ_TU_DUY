import React from 'react';
import data from "../../contant/index"
import "./new.css"
import iconFB from "./img/IconFB.png"
import test from "./img/2.png"
import ContanstGraphSql from '../../ContanstGraphSql';
const News = (props) => {
    
    const DataDetail = data.DataDetail
    const {isnewsData} = props
    const [isDetailNews,setIsDetailNews]=React.useState({})
    const onClickgetDetail=async(id)=>
    {
        const detail= await ContanstGraphSql.getDetailBlogs(id)
        setIsDetailNews(detail.getBlogs[0])
    }
    console.log("TEST",isDetailNews)
    const listNews = isnewsData != null && isnewsData.getBlogs.map((list) => {
        return (
            <div className="justify-content-center container" onClick={()=>{onClickgetDetail(parseInt(list.id))}}>
                <div className="d-flex NewHot justify-content-center container " >
                    <img className="pt-3 mb-4 " src={test}/>
                    <span className="col-6 pt-4 ">
                        <label className="NameNews" >{list.description}</label><br/>
                        <label className="DateNew" >{list.created_at}</label>
                    </span>
                </div>
                <hr width="80%" color="black" align="center" size="2px"></hr>
            </div>
        )
    })
    console.log("TEST",listNews)
    const onClickLink = () => {
        window.open("https://www.facebook.com/banhcuonquyenhaiphong")
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
                            <label>{DataDetail.date} - Admin</label>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <img src={iconFB} onClick={onClickLink} />
                        </div>
                    </div>
                    <div className="row">
                        <label className="TitileNews"> {isDetailNews.title}</label>
                    </div>
                    <div className="row container p-5 reviews" >
                        <label className="Review" >{DataDetail.Reviews}</label>
                    </div>
                    <div className="row container-fuild " >
                        <img className="img1" src={DataDetail.img1} style={{ width: "100%" }} />
                    </div>
                    <div className="row pt-4  container-fuild" >
                        <label className="Text" style={{ width: "100%", whiteSpace: "pre-line" }}>{DataDetail.Text2}</label>
                        <label className="Text" style={{ width: "100%", whiteSpace: "pre-line" }}>{DataDetail.Text1}</label>
                        <label className="Text" style={{ width: "100%", whiteSpace: "pre-line" }}>{DataDetail.Text3}</label>
                    </div>
                    <div className="row container-fluid" style={{ paddingLeft: '0px', paddingTop: '36px' }}>
                        <label style={{ width: "100%", whiteSpace: "pre-line" }} className="Commnet">{DataDetail.Comment}</label>
                        <a href="tel:0977586799" className="call"><span>Số điện thoại: 0977586799</span></a>
                    </div>

                </div>
                <div className="col-sm-3 col-0 New ml-5 p-0 ">
                    <div className="row d-flex Titile justify-content-center ">
                        <label className="row mt-4">TIN TỨC HOT</label>
                    </div>
                    {listNews}
                    <div className="row d-flex allNew justify-content-center ">
                        <label className="row mt-4">Xem tất cả các tin</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
