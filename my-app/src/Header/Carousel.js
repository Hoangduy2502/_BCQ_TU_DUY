import React from 'react';
import "./Header.css"
import nen from "./img/nen.png"
import nen01 from "./img/nen01.png"
const Carousel = () => {
    return (
        <div>

            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={nen} className="imgZoom" />
                        <div className="myText-carousel">
                            <label className="history">Bánh Cuốn Quyên thương hiệu 70 năm</label><br />
                            <label className="text">Một trong những cửa hàng bánh cuốn lâu đời nhất Hải Phòng.</label>
                        </div>
                        <div className="color"></div>
                        
                    </div>
                    <div class="carousel-item">
                        <img src={nen01} className="imgZoom" />
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
