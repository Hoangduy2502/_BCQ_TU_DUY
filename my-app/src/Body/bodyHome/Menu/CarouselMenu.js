import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CarouselMenu = (props) => {
    const { list } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      console.log('tumeo',list);
    return (

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active d-flex ">
                    {list}
                    
                </div>
                {/* <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..."/>
                                </div> */}
            </div>
            {/* <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a> */}
        </div>

    );
}

export default CarouselMenu;
