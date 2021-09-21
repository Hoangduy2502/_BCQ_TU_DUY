import React from 'react';
import "./Header.css"
const Carousel = () => {
    return (
        <>
        <div id="demo" className="carousel slide " data-ride="carousel" >
            <div className="carousel-inner">
                <div class="carousel-item active">
                    <label className="history">Bánh Cuốn Quyên thương hiệu 70 năm</label>
                    <label className="text">Một trong những cửa hàng bánh cuốn lâu đời nhất Hải Phòng.</label>
                </div>
                <div class="carousel-item">
                    <label className="history">Bánh Cuốn Quyên thương hiệu 70 năm</label>
                    <label className="text">Một trong những cửa hàng bánh cuốn lâu đời nhất Hải Phòng.</label>
                </div>
                <div class="carousel-item">
                    <label className="history">Bánh Cuốn Quyên thương hiệu 70 năm</label>
                    <label className="text">Một trong những cửa hàng bánh cuốn lâu đời nhất Hải Phòng.</label>
                </div>
            </div>
            {/* <ul className="carousel-indicators ">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul> */}
        </div>
       
        </>
    );
}

export default Carousel;
