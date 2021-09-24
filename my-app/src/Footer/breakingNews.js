import React, { useState } from 'react';
import './footer.css'
import prebtn from './img/preicon.png'
import nextbtn from './img/nexticon.png'
import imgmb1 from './img/1.png'
import imgsupport from './img/imgsupport.png'
const BreakingNews = (props) => {
    const { DataTT } = props
    var list = []
    
    list = Object.values(DataTT).slice(0, 3)
    var list2 = Object.values(DataTT).slice(3, 6)
    const listItems = list.map((book) => {
        return (
            <div className="row col-4 p-0 m-0 flex-nowrap">
                <img className="img-carousel col-5" src={book.img} alt="First slide" />
                <span className="text-news col-7">
                    <div className="text-news-header">{book.name}</div>
                    <div className="text-news-body">{book.content}</div>
                    <div className="text-news-date">{book.date}</div>
                </span>
            </div>
        )
    })
    const listItems2 = list2.map((book) => {
        return (
            <div className="row col-4 p-0 m-0 flex-nowrap">
                <img className="img-carousel col-5 " src={book.img} alt="First slide" />
                <span className="text-news col-7">
                    <div className="text-news-header">{book.name}</div>
                    <div className="text-news-body">{book.content}</div>
                    <div className="text-news-date">{book.date}</div>
                </span>

            </div>
        )
    })
    return (
        <div style={{width: '100%'}}>

            <div className="wrap-tintucmoinhat">
                <span className="tintucmoinhat container p-0">Tin tức mới nhất</span>
                <div id="tintucmoinhat" className="carousel slide breaking-news container p-0" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item my-inner active">
                            <div className="row ">

                                {listItems}
                            </div>
                        </div>
                        <div className="carousel-item my-inner ml-3">
                            <div className="d-flex p-0">
                                {listItems2}
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev mybtn-pre" href="#tintucmoinhat" role="button" data-slide="prev">
                        <img src={prebtn} href=""></img>
                    </a>
                    <a className="carousel-control-next mybtn-next" href="#tintucmoinhat" role="button" data-slide="next">
                        <img src={nextbtn} href=""></img>
                    </a>
                </div>
            </div>

            <div className="slide-mobie-footer">
                <img src={imgsupport} className="fix-imgFooter" alt=""></img>
            <span className="tintucmoinhat container">Tin tức mới nhất</span>
            
                <ul>
                    <li>
                        <img className="img-carousel p-0" src={imgmb1} alt="First slide" sty/>
                        <span className="text-news">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                    </li>
                    <li>
                        <img className="img-carousel col-5 p-0" src={imgmb1} alt="First slide" />
                        <span className="text-news col-7">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                    </li>
                    <li>
                        <img className="img-carousel col-5 p-0" src={imgmb1} alt="First slide" />
                        <span className="text-news col-7">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                    </li>
                    <li>
                        <img className="img-carousel col-5 p-0" src={imgmb1} alt="First slide" />
                        <span className="text-news col-7">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                    </li>
                    <li>
                        <img className="img-carousel col-5 p-0" src={imgmb1} alt="First slide" />
                        <span className="text-news col-7">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default BreakingNews;