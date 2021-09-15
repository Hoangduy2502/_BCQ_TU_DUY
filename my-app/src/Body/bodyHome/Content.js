import React from 'react';
import './bodyContent.css';
import bcLogo from './img/ct-banhcuon_logo.png';
import quyenLogo from './img/ct-quyenlogo.png';
import slLogo from './img/ct-logo.png';
import ctbrboss0 from './img/ct-brboss0.png';
import Ellipse4 from './img/Ellipse4.png';
import boss from './img/boss.png';
import ctlistimg01 from './img/ct-listimg01.png';
import ctlistimg02 from './img/ct-listimg02.png';
import ctlistimg03 from './img/ct-listimg03.png';
import ctlistimg04 from './img/ct-listimg04.png';
import ctlistimg05 from './img/ct-listimg05.png';
import ctend00 from './img/anh/ct-end00.png';
import ctend01 from './img/anh/ct-end01.png';
import ctend02 from './img/anh/ct-end02.png';
import ctend03 from './img/anh/ct-end03.png';
import ctend04 from './img/anh/ct-end04.png';
import ctend05 from './img/anh/ct-end05.png';
const Content = () => {
    return (
        <div className="Content">
            <div style={{ maxWidth: "1600px", position: 'relative', margin: 'auto' }}>
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
                <div className="wrap-boss">

                    <div className="ct-boss row">
                        <div className="w" style={{ width: '441px', border: '1px solid red', marginTop: '200px' }}>
                            <span className="textboss1">
                                Có thể coi Bánh cuốn Quyên là một trong những cửa hàng bánh cuốn lâu đời nhất tại Hải Phòng. Cũng như nhiều món ẩm thực đường phố ngon lành khác nơi đất Cảng, những gánh hàng bánh cuốn thường chỉ chiếm một khoảng diện tích khiêm tốn trên vỉa hè.
                            </span>
                            <span className="textboss2">
                                Gánh bánh cuốn nhỏ ngày nào nay trở thành tiệm ăn, có thể coi đó như cuộc “cách mạng” về trải nghiệm ẩm thực của khách hàng Bánh cuốn Quyên nói riêng, và của những vị thực khách đam mê ẩm thực tại Hải Phòng nói chung. Một phần bởi con phố Cát Dài nay đã đổi tên thành Hai Bà Trưng, mặt khác anh muốn chuyên nghiệp hoá, mở rộng quy mô để phục vụ khách hàng: Cát Dài có bao nhiêu hàng bánh cuốn nhưng bánh cuốn nhà mình làm từ lâu đời rồi, khách tới ăn cũng đã quen với hình ảnh bố tôi ngồi đón khách tại quán, vậy nên tôi lấy luôn tên bố làm tên thương hiệu. Vừa là để khách dễ nhận diện, vừa để nhớ rằng cơ nghiệp ngày nay các con có được là nhờ một tay bố mẹ với ông bà dựng nên.
                            </span>
                        </div>
                        <div className="imgboss" style={{ paddingLeft: '58px', width: '929px', height: '1065px', border: '1px solid red' }}>
                            <img className="bossbr01" src={ctbrboss0}></img>
                            <img className="bossbr02" src={Ellipse4}></img>
                            <img className="bossshape" src={boss}></img>
                            <div className="boss1946">1946</div>
                            <div className="textboss">
                                <span className="nameboss">Anh Vũ Sơn Hải</span>
                                <span className="titleboss">truyền nhân đời thứ 3</span>
                            </div>
                        </div>
                        <div style={{ width: "405px", height: "436px", position: "absolute", top: "180px", left: "264px" }}>
                            <div className="textboxboss">
                                "Ban đầu chỉ là một gánh bánh cuốn nhỏ của ông bà, dần dà được truyền tới đời bố tôi rồi đến đời tôi...Từ gánh hàng nhỏ xíu ấy, ông và bố tôi đã dần phát triển nên cơ đồ khang trang như bây giờ."
                            </div>
                            <div className="borderboxtop"></div>
                            <div className="borderboxbottom" style={{ position: 'absolute', bottom: '0', right: '0', width: '57px', height: '46px', borderBottom: '5px solid #840C16', borderRight: '5px solid #840C16', borderBottomRightRadius: '5px 5px' }}></div>
                        </div>
                    </div>
                </div>
                <div className="ct-multiRow">
                    <div className="fisrtimgs">
                        <img src={ctlistimg01} href="" />
                        <img src={ctlistimg02} href="" />
                        <img src={ctlistimg03} href="" />
                    </div>
                    <div className="secondimgs">
                        <img src={ctlistimg04} href="" />
                        <img src={ctlistimg05} href="" />
                    </div>
                </div>
                <div className="ct-intro-head">
                    <span style={{ display: 'block', width: "1143px", height: "145px" }}>
                        Hơn <span className="upper">70 năm</span> tồn tại và phát triển, Bánh cuốn Quyên tự hào đi cùng lịch sử thành phố Hải Phòng xuyên suốt 3 thế hệ. Gánh bánh cuốn nhỏ mưu sinh ngày ấy nay đã trở thành tiệm ăn khang trang tiếp nối cơ nghiệp của gia đình, và đĩa bánh cuốn ngon miệng ngày nào nay cũng thấm đẫm những câu chuyện về văn hoá, lịch sử. Để rồi người dân Hải Phòng không ai là không biết, hay cả những người yêu ẩm thực từ những vùng miền khác khi đến với Hải Phòng đều ít nhiều từng nghe tới <span className="upper">Bánh cuốn Quyên.</span>
                    </span>
                    <div style={{ position: "relative" }}>
                        <img src={ctend00} href="" />
                        <span className="huongvidicung">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Hương vị đi cùng<br></br> dư âm năm tháng"</span>
                    </div>
                </div>
                <div className="ct-intro-body">
                    {/* <div>
                        <div>
                            <img></img>
                            <div>carousel</div>
                        </div>
                        <img></img>
                        <div>
                            <span>headtext</span>
                            <span>bodytext</span>
                            <span>foottext</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>headtext</span>
                            <span>bodytext</span>
                            <span>foottext</span>
                        </div>
                        <img></img>
                        <div>
                            <span>headtext</span>
                            <span>bodytext</span>
                        </div>
                        <img></img>
                    </div> */}
                </div>
                <div className="ct-intro-footer row">
                        {/* <img>logo</img>
                        <span>delam</span>
                        <span>thomdiu</span> */}
                </div>
            </div>
        </div>
    );
}

export default Content;
