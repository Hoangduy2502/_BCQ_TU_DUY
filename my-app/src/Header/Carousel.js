import React from 'react';
import "./Header.css"
const Carousel = () => {
    return (
        <>
        <div id="demo" className="carousel slide " data-ride="carousel" >
            <div className="carousel-inner">
                <div class="carousel-item active">
                    <label className="history">Chặng đường hơn 70 năm tồn tại và <br/>phát triển của Bánh Cuốn Quyên</label>
                    <label className="text">Bánh cuốn Quyên là một trong những cửa hàng bánh cuốn lâu đời<br/> nhất tại Hải Phòng.</label>
                </div>
                <div class="carousel-item">
                <label className="history">Chặng đường hơn 70 năm tồn tại và <br/> phát triển của Bánh Cuốn Quyên</label>
                    <label className="text">Bánh cuốn Quyên là một trong những cửa hàng bánh cuốn lâu đời<br/> nhất tại Hải Phòng.</label>
                </div>
                <div class="carousel-item">
                <label className="history">Chặng đường hơn 70 năm tồn tại và phát triển của Bánh Cuốn Quyên</label>
                    <label className="text">Bánh cuốn Quyên là một trong những cửa hàng bánh cuốn lâu đời<br/> nhất tại Hải Phòng.</label>
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
