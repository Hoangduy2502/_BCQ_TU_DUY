import React from 'react';
import data from "../../contant/index"
import "./new.css"
import iconFB from "./img/IconFB.png"
const News = () => {
    const dataTTNews=Object.values(data.Data)
    const DataDetail=data.DataDetail
    const listNews = dataTTNews.map((list)=>
    {
        return(
            <div className="justify-content-center container" >
                <div className="d-flex NewHot justify-content-center container " >
                    <img className="pt-3 mb-4 " src={list.img2}  />
                    <span className="col-6 pt-4">
                        <label className="NameNews" >{list.name}</label>
                        <label className="DateNew" >{list.date}</label>
                    </span>
                </div>
                <hr width="80%" color="black" align="center" size="2px"></hr>
            </div>
           
        )
        
    })
    const onClickLink=()=>
    {
        window.open("https://www.facebook.com/banhcuonquyenhaiphong")
    }
    return (
        <div style={{ marginBottom: '471px' }}>
            <div className="container-fluid p-0 breackcum-introbody">
                <div className="container p-0">
                    <ul>
                        <li><a>Trang chủ</a></li>
                        <li>/</li>
                        <li><a>Tin Tức</a></li>
                    </ul>
                </div>
            </div>
            <div className="container d-flex bodyNews"> 
               <div className="col-9">
                   <div className="row">
                        <div className="col-6 p-0">
                            <label>{DataDetail.date} - Admin</label>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <img src={iconFB} onClick={onClickLink}/>
                        </div>
                   </div>
                   <div className="row">
                       <label className="TitileNews">{DataDetail.Title}</label>
                   </div>
                   <div className="row container p-5 reviews" >
                       <label className="Review" >{DataDetail.Reviews}</label>
                   </div>
                   <div className="row container-fuild " >
                       <img src={DataDetail.img1} />
                   </div>
                   <div className="row container-fuild  pt-4" >
                       <label className="Text">{DataDetail.Text1}</label>
                   </div>
                   <div className="row  pr-3 pt-4" >
                       <div className="col-6 p-0">
                           <img src={DataDetail.img2}/>
                       </div>
                       <div className="col-6 p-0">
                            <label className="Text">{DataDetail.Text2}</label>
                       </div>
                   </div>
                   <div className="row">
                    <label className="Commnet">{DataDetail.Comment}</label>
                   </div>

               </div>
               <div className="col-4 New ml-5 p-0">
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
