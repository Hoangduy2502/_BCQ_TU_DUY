import { useState } from 'react';
import React from 'react';
import nen from "./img/caousel.png"
import "./Header.css"
import Carousel from './Carousel';
import Logo2 from "./img/Logo2.png"
const Header = () => {
    // tu meo
    const [navbar, setnavbar] = useState(false);
    const change = () => {
        if(window.scrollY >=39 ) setnavbar(true)
        else setnavbar(false)
    }
    window.addEventListener('scroll',change)
    //tu meo
    return (
        <div className="nen" >
            <div className="color">
            </div>
            <div className="row d-flex container-fuild p-5 Header">
                    <div className="col-4 pl-5 ml-5">
                        <img src={Logo2} />
                    </div>
                    <div className="col-7 d-flex justify-content-end ">
                        <ul className={`nav ${navbar ? "Nav-Home slidedow" : "Nav-Home"}`}>

                            <li className="nav-item">
                                <a style={{ color: "white" }} className="nav-link " href="/">Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "white" }} className="nav-link" href="/GioiThieu">Giới thiệu</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "white" }} className="nav-link" href="/SanPham">Sản phẩm</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "white" }} className="nav-link " href="/LetEat">Ăn gì hôm nay!</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "white" }} className="nav-link " href="/TinTuc">Tin tức</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "white" }} className="nav-link " href="/LienHe">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            <div className="row Carousel">
                    <Carousel />
            </div>
        </div>
    );
}

export default Header;
