import React from 'react';
import './footer.css';
import rating01 from './img/cThuy.webp'
import prebtn from './img/preicon.webp'
import nextbtn from './img/nexticon.webp'
const data = [
    {
        img: './img/rating01.webp',
        rating: 'Với tôi, Bánh quốn Quyên không chỉ là món ăn tuổi thơ mà còn là nơi mà tôi luôn muốn tới cùng gia đình bạn bè...',
        name: 'Chị Bùi Thu Thủy',
        address: 'Tiểu thường tại chợ Đổ'
    },
    {
        img: './img/rating01.webp',
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
                <div className="carousel-item active" style={{position:"relative"}}>
                    <img src={rating01} alt="Los Angeles" width="1100" height="500" />
                    <div data-aos="fade-left" className="CommentCarousel" >
                        <div>Với tôi, Bánh Cuốn Quyên không chỉ là món ăn tuổi thơ mà còn là nới tôi muốn tới cùng gia đình bạn bè...</div>
                       
                    </div>
                   
                </div>
                {/* <div className="carousel-item">
                    <img src={rating01} alt="Los Angeles" width="1100" height="500" />
                    <div className="CommentCarousel " >
                        <div>Với tôi, Bánh Cuốn Quyên không chỉ là món ăn tuổi thơ mà còn là nới tôi muốn tới cùng gia đình bạn bè...</div>
                        
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={rating01} alt="Los Angeles" width="1100" height="500" />
                    <div className="CommentCarousel " >
                        <div>Với tôi, Bánh Cuốn Quyên không chỉ là món ăn tuổi thơ mà còn là nới tôi muốn tới cùng gia đình bạn bè...</div>
                        
                    </div>
                </div> */}
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
