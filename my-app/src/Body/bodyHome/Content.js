import React from 'react';
import './bodyContent.css';
import bcLogo from './img/ct-banhcuon_logo.png';
import quyenLogo from './img/ct-quyenlogo.png';
import slLogo from './img/ct-logo.png';
import huongvi from './img/huongvi.png';
import ctbrboss0 from './img/ct-brboss0.png'
import Ellipse4 from './img/Ellipse4.png'
import boss from './img/boss.png'
const Content = () => {
    return (
        <div className="Content container-fluid">
            <div className="ct-logo">
                <div>
                    <img className="" src={bcLogo}></img>
                    <img className="logo" src={slLogo}></img>
                </div>
                <div>
                    <img className="logo-quyen" src={quyenLogo}></img>
                </div>
                <div>
                    <div className="logo-huongvi">
                        <div className="contenthv">
                            <span>Hương vị cổ truyền</span>
                        </div>
                        <div className="box1hv" style={{ position: 'absolute', top: '0', left: '0', width: '41px', height: '33px', borderTop: '3px solid #FCDE9E', borderLeft: '3px solid #FCDE9E' }}></div>
                        <div className="box2hv" style={{ position: 'absolute', bottom: '0', right: '0', width: '41px', height: '33px', borderBottom: '3px solid #FCDE9E', borderRight: '3px solid #FCDE9E' }}></div>

                    </div>
                    <span className="text-title">Nhắc đến <span style={{ font: 'normal normal 600 18px/30px Montserrat Semibold', color: '#840C16' }}>Bánh cuốn Quyên</span>, có thể người ta sẽ nghĩ tới một “bà Quyên” nào đó làm chủ gánh bánh cuốn mang tên mình. Nhưng với người dân đất Cảng hay những vị thực khách quen thuộc, nhắc đến Bánh cuốn Quyên là nhắc tới một thương hiệu bánh cuốn gia truyền cùng câu chuyện</span>
                </div>
                <span className="badoibanhcuon">&nbsp;&nbsp;&nbsp;&nbsp;"Ba đời làm bánh cuốn<br /> đều là đàn ông"</span>

            </div>
            <div className="ct-boss row">
                <div className="w" style={{ width: '441px', border:'1px solid red', marginTop: '200px'}}>
                    <span className="textboss1">
                        Có thể coi Bánh cuốn Quyên là một trong những cửa hàng bánh cuốn lâu đời nhất tại Hải Phòng. Cũng như nhiều món ẩm thực đường phố ngon lành khác nơi đất Cảng, những gánh hàng bánh cuốn thường chỉ chiếm một khoảng diện tích khiêm tốn trên vỉa hè.
                    </span>
                    <span className="textboss2">
                        Gánh bánh cuốn nhỏ ngày nào nay trở thành tiệm ăn, có thể coi đó như cuộc “cách mạng” về trải nghiệm ẩm thực của khách hàng Bánh cuốn Quyên nói riêng, và của những vị thực khách đam mê ẩm thực tại Hải Phòng nói chung. Một phần bởi con phố Cát Dài nay đã đổi tên thành Hai Bà Trưng, mặt khác anh muốn chuyên nghiệp hoá, mở rộng quy mô để phục vụ khách hàng: Cát Dài có bao nhiêu hàng bánh cuốn nhưng bánh cuốn nhà mình làm từ lâu đời rồi, khách tới ăn cũng đã quen với hình ảnh bố tôi ngồi đón khách tại quán, vậy nên tôi lấy luôn tên bố làm tên thương hiệu. Vừa là để khách dễ nhận diện, vừa để nhớ rằng cơ nghiệp ngày nay các con có được là nhờ một tay bố mẹ với ông bà dựng nên.
                    </span>
                </div>
                <div className="imgboss" style={{paddingLeft: '58px',width: '929px',height:'1065px',border:'1px solid red'}}>
                    <img className="bossbr01" src={ctbrboss0}></img>
                    <img className="bossbr02" src={Ellipse4}></img>
                    <img className="bossshape" src={boss}></img>
                    <div className="boss1946">1946</div>
                    <div className="textboss">
                        <span className="nameboss">Anh Vũ Sơn Hải</span>
                        <span className="titleboss">truyền nhân đời thứ 3</span>
                    </div>
                </div>
            </div>
            <div className="ct-multiRow">

            </div>
            <div className="ct-intro-head row">

            </div>
            <div className="ct-intro-body row">

            </div>
            <div className="ct-intro-footer row">

            </div>
        </div>
    );
}

export default Content;
