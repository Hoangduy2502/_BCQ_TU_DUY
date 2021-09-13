import React from 'react';
import './footer.css';
import rating01 from './img/rating01.png'
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
    const list = data.map((book, i) => {
        return (
            <div class="carousel-item" key={i}>
                <img src={rating01} alt="anh cua toi" width="1100" height="950" />
            </div>
        )
    })
    console.log(list);
    return (
        <div>
            <div id="#demo" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={rating01} alt="Los Angeles" height="950" />
                    </div>
                    <div class="carousel-item">
                        <img src={rating01} alt="anh cua toi" width="1100" height="950" />
                    </div>
                </div>

                <a className="carousel-control-prev" style={{ zIndex: '3' }} href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" style={{ zIndex: '3' }} href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>

            </div>
        </div>

    );
}

export default Rating;
