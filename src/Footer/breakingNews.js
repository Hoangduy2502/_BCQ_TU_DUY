import React from 'react';
import carousel01 from './img/carousel01.png'
import './footer.css'
const BreakingNews = () => (
    <div className="d-flex justify-content-center">
        <div id="carouselExampleControls" className="carousel slide breaking-news" data-ride="carousel" data-interval="false">
            <div className="carousel-inner container-fluid">
                <div className="carousel-item my-inner active">
                    <div className="d-flex align-items-center">
                        <img className="img-carousel" src={carousel01} alt="First slide" />
                        <span className="text-news">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                        <img className="img-carousel" src={carousel01} alt="First slide" />
                        <span className="text-news">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                        <img className="img-carousel" src={carousel01} alt="First slide" />
                        <span className="text-news mr-0">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                    </div>
                </div>
                <div className="carousel-item my-inner">
                    <div className="d-flex align-items-center">
                        <img className="img-carousel" src={carousel01} alt="First slide" />
                        <span className="text-news">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                        <img className="img-carousel" src={carousel01} alt="First slide" />
                        <span className="text-news">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                        <img className="img-carousel" src={carousel01} alt="First slide" />
                        <span className="text-news mr-0">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                    </div>
                </div>
                <div className="carousel-item my-inner">
                    <div className="d-flex align-items-center">
                        <img className="img-carousel" src={carousel01} alt="First slide" />
                        <span className="text-news">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                        <img className="img-carousel" src={carousel01} alt="First slide" />
                        <span className="text-news">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                        <img className="img-carousel" src={carousel01} alt="First slide" />
                        <span className="text-news mr-0">
                            <div className="text-news-header">Bánh cuốn Quyên mở thêm cơ sở số 3</div>
                            <div className="text-news-body">Odit aut fugit, sed quia con se quuntur ma gni dol ores eos qui ratione volup</div>
                            <div className="text-news-date">Ngày 20/10/2022</div>
                        </span>
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev mybtn-pre" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next mybtn-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>


);

export default BreakingNews;