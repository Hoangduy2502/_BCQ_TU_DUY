import React from 'react';
import nen from "./img/caousel.png"
import "./Header.css"
import Carousel from './Carousel';
import Logo2 from "./img/Logo2.png"
const Header = () => {
    return (
        <div className="nen" >
            <div className="color">
            </div>
            <div className="row Header d-flex container-fuild p-5 ">
                    <div className="col-4 pl-5 ml-5">
                        <img src={Logo2} />
                    </div>
                    <div className="col-7 d-flex justify-content-end ">
                        <ul className="nav Nav-Home">
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
            </div>y
        </div>
    );
}

export default Header;
