import React from 'react';
import nen from "./img/caousel.png"
import "./Header.css"
import Carousel from './Carousel';
import Logo from "./img/Logo.png"
const Header = () => {
    return (
        <div className="nen">
            <div className="row Header d-flex container-fuild p-5 ">
                <div className="col-4 pl-5 ml-5">
                    <img src={Logo}/>
                </div>
                <div/>
                <div className="col-7 d-flex justify-content-end ">
                    <ul className="nav ">
                        <li className="nav-item">
                            <a style={{color:"white"}} className="nav-link active" href="#">Trang chủ</a>
                        </li>
                        <li className="nav-item">
                            <a style={{color:"white"}} className="nav-link" href="#">Giới thiệu</a>
                        </li>
                        <li className="nav-item">
                            <a style={{color:"white"}} className="nav-link" href="#">Sản phẩm</a>
                        </li>
                        <li className="nav-item">
                            <a  style={{color:"white"}} className="nav-link " href="#">ăn gì hôm nay!</a>
                        </li>
                        <li className="nav-item">
                            <a  style={{color:"white"}} className="nav-link " href="#">Tin tức</a>
                        </li>
                        <li className="nav-item">
                            <a style={{color:"white"}} className="nav-link " href="#">liên Hệ</a>
                        </li>
                    </ul>
                </div>
               
                
            </div>
            <div className="row Carousel">
                <Carousel/>
            </div>
            
            
        </div>
    );
}

export default Header;
