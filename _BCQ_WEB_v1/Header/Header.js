import React from 'react';
import nen from "./img/caousel.png"
import "./Header.css"
import Carousel from './Carousel';
const Header = () => {
    return (
        <div className="nen">
            <div className="row Header">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Trang chủ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Giới thiệu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sản phẩm</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">ăn gì hôm nay!</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Tin tức</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">liên Hệ</a>
                    </li>
                </ul>
                
            </div>
            <div className="row Carousel">
                <Carousel/>
            </div>
            
            
        </div>
    );
}

export default Header;
