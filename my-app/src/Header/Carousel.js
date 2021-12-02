import React from 'react';
import "./Header.css"
const Carousel = () => {
    return (
        <div>

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="imgZoom nen"></div>
                        {/* <img src={nen} className="imgZoom" /> */}
                        <div className="myText-carousel">
                            <label className="history">Bánh Cuốn Quyên thương hiệu 70 năm</label><br />
                            <label className="text">Một trong những cửa hàng bánh cuốn lâu đời nhất Hải Phòng.</label>
                        </div>
                        <div className="color"></div>
                        
                    </div>
                    <div className="carousel-item">
                    <div className="imgZoom nen01"></div>
                        {/* <img src={nen01} className="imgZoom" /> */}
                        <div className="myText-carousel">
                            <label className="history">Bánh Cuốn Quyên thương hiệu 70 năm</label><br />
                            <label className="text">Một trong những cửa hàng bánh cuốn lâu đời nhất Hải Phòng.</label>
                        </div>
                        <div className="color"></div>
                    </div>
                </div>
                {/* <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a> */}
            </div>


        </div>
    );
}

export default Carousel;
