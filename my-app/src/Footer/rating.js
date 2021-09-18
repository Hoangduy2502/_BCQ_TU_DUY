import React from 'react';
import './footer.css';
import rating01 from './img/rating01.png'
import prebtn from './img/preicon.png'
import nextbtn from './img/nexticon.png'
const data = [
    {
        img: './img/rating01.png',
        rating: 'Với tôi, Bánh quốn Quyên không chỉ là món ăn tuổi thơ mà còn là nơi mà tôi luôn muốn tới cùng gia đình bạn bè...',
        name: 'Chị Bùi Thu Thủy',
        address: 'Tiểu thường tại chợ Đổ'
    },
    {
        img: './img/rating01.png',
        rating: 'Với tôi, Bánh quốn Quyên không chỉ là món ăn tuổi thơ mà còn là nơi mà tôi luôn muốn tới cùng gia đình bạn bè...',
        name: 'Chị Bùi Thu Thủy',
        address: 'Tiểu thường tại chợ Đổ'
    }

]
const Rating = () => {
    // const list = data.map((book, i) => {
    //     return (
    //         <div className="carousel-item">
    //             <img src={rating01} alt="Los Angeles" width="1100" height="500" />
    //         </div>
    //     )
    // })
    return (

        <div id="demo99" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner rating-card ">
                <div className="carousel-item active">
                    <img src={rating01} alt="Los Angeles" width="1100" height="500" />
                </div>
                <div className="carousel-item">
                    <img src={rating01} alt="Los Angeles" width="1100" height="500" />
                </div>
                <div className="carousel-item">
                    <img src={rating01} alt="Los Angeles" width="1100" height="500" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#demo99" style={{ zIndex: '3' }} data-slide="prev">
                <img src={prebtn}></img>
            </a>
            <a className="carousel-control-next" href="#demo99" style={{ zIndex: '3' }} data-slide="next">
                <img src={nextbtn}></img>
            </a>
        </div>

    );
}

export default Rating;
