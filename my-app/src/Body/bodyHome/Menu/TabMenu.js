import React from 'react';
import "../body.css"
import product from "./Product/index"
const TabMenu = () => {
    return (
        <div className="Tab " style={{paddingLeft:"110px",paddingTop:"50px",paddingBottom:"50px"}}>
            <div className="Nav_Tab">
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a data-toggle="tab" className="nav-link active" href="#Banhcuon">Bánh Cuốn</a></li>
                    <li className="nav-item"><a data-toggle="tab" className="nav-link" href="#Cha">Chả Thịt</a></li>
                    <li className="nav-item"><a data-toggle="tab" className="nav-link" href="#Mam">Nước mắm chấm</a></li>
                    <li className="nav-item"><a data-toggle="tab" className="nav-link" href="#Hanh">Hành phi</a></li>
                </ul>
                <div className="tab-content ">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval={false} >
                    <div className="carousel-inner">
                        <div className="carousel-item active ">
                            <div className="tab-pane active d-flex" id="Banhcuon">
                                <img className="d-block mt-4 mb-4 pr-2" src={product.product['Banh Cuon'].BC1} style={{width:"215px", height:"316px"}} alt="First slide"/>
                                <img className="d-block mt-4 mb-4 pr-2" src={product.product['Banh Cuon'].BC1} style={{width:"215px", height:"316px"}} alt="First slide"/>
                                <img className="d-block mt-4 mb-4 pr-2" src={product.product['Banh Cuon'].BC1} style={{width:"215px", height:"316px"}} alt="First slide"/>
                                <img className="d-block mt-4 mb-4 pr-2" src={product.product['Banh Cuon'].BC1} style={{width:"215px", height:"316px"}} alt="First slide"/>
                                <img className="d-block mt-4 mb-4 pr-2" src={product.product['Banh Cuon'].BC1} style={{width:"215px", height:"316px"}} alt="First slide"/>
                            </div>
                        </div>
                        
                        <div className="carousel-item ">
                            <div className="tab-pane d-flex" id="Cha">
                                <img className="d-block mt-4 mb-4 pr-2" src={product.product['Banh Cuon'].BC1} style={{width:"215px", height:"316px"}} alt="Second slide"/>
                                <img className="d-block mt-4 mb-4 pr-2" src={product.product['Banh Cuon'].BC1} style={{width:"215px", height:"316px"}} alt="Second slide"/>
                                <img className="d-block mt-4 mb-4 pr-2" src={product.product['Banh Cuon'].BC1} style={{width:"215px", height:"316px"}} alt="Second slide"/>
                                <img className="d-block mt-4 mb-4 pr-2" src={product.product['Banh Cuon'].BC1} style={{width:"215px", height:"316px"}} alt="Second slide"/>
                                <img className="d-block mt-4 mb-4 pr-2" src={product.product['Banh Cuon'].BC1} style={{width:"215px", height:"316px"}} alt="Second slide"/>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default TabMenu;
