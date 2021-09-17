import React, { useState } from 'react';
import './footer.css'
import prebtn from './img/preicon.png'
import nextbtn from './img/nexticon.png'
const BreakingNews = (props) => {
    const { DataTT } = props
    var list = []
    list = Object.values(DataTT).slice(0, 3)
    var list2 = Object.values(DataTT).slice(3, 6)
    const listItems = list.map((book) => {
        return (
            <div className="d-flex">
                <img className="img-carousel" src={book.img} alt="First slide" />
                <span className="text-news ">
                    <div className="text-news-header">{book.name}</div>
                    <div className="text-news-body">{book.content}</div>
                    <div className="text-news-date">{book.date}</div>
                </span>
            </div>
        )
    })
    const listItems2 = list2.map((book) => {
        return (
            <div className="d-flex">
                <img className="img-carousel" src={book.img} alt="First slide" />
                <span className="text-news ">
                    <div className="text-news-header">{book.name}</div>
                    <div className="text-news-body">{book.content}</div>
                    <div className="text-news-date">{book.date}</div>
                </span>

            </div>
        )
    })
    console.log("TEST", listItems)
    return (

        <div className="d-flex justify-content-center" style={{flexDirection: 'column', marginBottom: '20px'}}>
            <span className="tintucmoinhat">Tin tức mới nhất</span>
            <div id="tintucmoinhat" className="carousel slide breaking-news" data-ride="carousel" data-interval="false">
                <div className="carousel-inner container-fluid">
                    <div className="carousel-item my-inner active">
                        <div className="d-flex ml-3">
                            {listItems}
                        </div>
                    </div>
                    <div className="carousel-item my-inner ml-3">
                        <div className="d-flex ">
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

    )
}

export default BreakingNews;