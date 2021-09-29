import { useState } from 'react';
import React from 'react';
import nen from "./img/nen.png"
import "./Header.css"
import Carousel from './Carousel';
import Logo2 from "./img/Logo2.png"
import logoshow from "./img/logoshow.png"
import iconNav from "./img/iconNav.png"
import iconShow from "./img/iconShow.png"
const Header = () => {

    // tu meo
    const [navbar, setnavbar] = useState(false);
    const change = () => {
        if (window.scrollY >= 300) setnavbar(true)
        else setnavbar(false)
    }
    window.addEventListener('scroll', change)
    //tu meo
    return (
        <div className="nen">
            <div className="color-no-touch"></div>
            <div className={`row d-flex pt-2 pb-2 mt-0 container-fuild ${navbar ? "Header slidedow" : "Header"}`}>

                <div className="col-4 d-flex justify-content-start pl-5" style={{ alignSelf: "start" }} >
                    <img className="logoHeader"  src={navbar ? logoshow : Logo2} />
                </div>
                <div className="col-8 d-flex justify-content-end align-items-center">

                    <ul className="nav Nav-Home " id="navbarToggleExternalContent">
                        <li className="nav-items">
                            <a className={`${navbar ? "nav-link show" : "nav-link"}`} href="/">Trang chủ</a>
                        </li>
                        <li className="nav-items">
                            <a className={`${navbar ? "nav-link show" : "nav-link"}`} href="/Introduction">Giới thiệu</a>
                        </li>
                        <li className="nav-items">
                            <a className={`${navbar ? "nav-link show" : "nav-link"}`} href="/#Product">Sản phẩm</a>
                        </li>
                        <li className="nav-items">
                            <a className={`${navbar ? "nav-link show" : "nav-link"}`} href="/LetEat">Ăn gì hôm nay!</a>
                        </li>
                        <li className="nav-items">
                            <a className={`${navbar ? "nav-link show" : "nav-link"}`} href="/News">Tin tức</a>
                        </li>
                        <li className="nav-items">
                            <a className={`${navbar ? "nav-link show" : "nav-link"}`} href="#Contact">Liên hệ</a>
                        </li>
                    </ul>
                    <div className="Nav-Phone ">
                        <nav class="navbar navbar-dark  icon ">
                            <button class="navbar-toggler" style={{ marginLeft: "auto" }} type="button" data-toggle="collapse" data-target="#NavPhone" aria-controls="NavPhone" aria-expanded="false" aria-label="Toggle navigation">
                                {/* <span class="navbar-toggler-icon"></span> */}
                                <img src={navbar ? iconShow : iconNav}/>
                            </button>
                        </nav>
                        <ul className="nav collapse justify-content-end " id="NavPhone">
                            <li className="nav-items ">
                                <a className={`${navbar ? "nav-link show" : "nav-link"}`} href="/">Trang chủ</a>
                            </li>
                            <li className="nav-items">
                                <a className={`${navbar ? "nav-link show" : "nav-link"}`} href="/GioiThieu">Giới thiệu</a>
                            </li>
                            <li className="nav-items ">
                                <a className={`${navbar ? "nav-link show" : "nav-link"}`} href="#google">Sản phẩm</a>
                            </li>
                            <li className="nav-items ">
                                <a className={`${navbar ? "nav-link show" : "nav-link"}`} href="/TinTuc">Tin tức</a>
                            </li>

                            <li className="nav-items ">
                                <a className={`${navbar ? "nav-link show" : "nav-link"}`} href="#contact">Liên hệ</a>
                            </li>
                            <li className="nav-items ">
                                <a className={`${navbar ? "nav-link show" : "nav-link"}`} href="/LetEat">Ăn gì hôm nay!</a>
                            </li>

                        </ul>
                    </div>


                </div>
               
            </div>
            {/* <div style={{ position: "absolute", top: "50vh", left: "10%" }}>
                <label className="history">Bánh Cuốn Quyên thương hiệu 70 năm</label><br />
                <label className="text">Một trong những cửa hàng bánh cuốn lâu đời nhất Hải Phòng.</label>
            </div> */}
            <Carousel />

        </div>
    );
}

export default Header;
