import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./style.css";
import imgSection1 from "./img/section1-01.png"
import Banhcuon from "./img/Banhcuon.png"
import Icons from "./img/Icons.png"
import QUYEN from "./img/QUYEN.png"
import section2P02 from "./img/section2P02.png"
import logo40px from "./img/logo40px.png"
import logoabsolute from "./img/logoabsolute.png"
import headingSection3 from "./img/headingSection3.png"
import groupLogo from "./img/groupLogo.png"
import bodysection3 from "./img/bodysection3.png"
import wrapimgboss2 from "./img/wrapimgboss2.png"
import wrapimgboss1 from "./img/wrapimgboss1.png"
import wrapimgboss3 from "./img/wrapimgboss3.png"
import csimg01 from "./img/csimg/csimg01.png"
import csimg02 from "./img/csimg/csimg02.png"
import csimg03 from "./img/csimg/csimg03.png"
import csimg04 from "./img/csimg/csimg04.png"
import csimg05 from "./img/csimg/csimg05.png"
import csimg06 from "./img/csimg/csimg06.png"
import csimg07 from "./img/csimg/csimg07.png"
import csimg08 from "./img/csimg/csimg08.png"
import csimg09 from "./img/csimg/csimg09.png"
import preIcon from "./img/pre.png"
import nexIcon from "./img/nex.png"
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src={nexIcon}
        className={className}
        style={{ ...style, display: "block", width: '13px',position: 'absolute',
        right: '8%',top: '110%', zIndex: 100000}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
         src={preIcon}
        className={className}
        style={{ ...style, display: "block", width: '13px',position: 'absolute',
        left: '8%',top: '110%',zIndex: 100000}}
        onClick={onClick}
      />
    );
  } 
const BodyIntroduce = () => {
    const settings = {
        className: "slider variable-width",
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
        <div style={{ marginBottom: '471px' }}>
            <div className="container-fluid p-0 breackcum-introbody">
                <div className="container p-0">
                    <ul>
                        <li>Trang chủ</li>
                        <li>/</li>
                        <li>Giới thiệu</li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid p-0 section1-bg">
                <div className="container" style={{ padding: '130px 0 0 0', position: 'relative' }}>
                    <div className="img-section1">
                        <img src={imgSection1} alt=""></img>
                    </div>
                    <span>"70 năm ra đời và gìn giữ những giá trị cổ truyền"</span>
                    <div className="groupimg">
                        <img src={Banhcuon} alt=""></img>
                        <img src={Icons} alt="" style={{ marginLeft: '124px' }}></img>
                        <img src={QUYEN} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0 section2-intro">
                <div className="container p-0" style={{ position: 'relative' }}>
                    <div className="row mr-0 ml-0 d-flex justify-content-center">
                        <div className="col-10">
                            <span className="firstP-section2">Nhắc đến <span className="upperBoldText">Bánh cuốn Quyên</span>, có thể người ta sẽ nghĩ tới một “bà Quyên” nào đó làm chủ gánh bánh cuốn mang tên mình. Nhưng với người dân đất Cảng hay những vị thực khách quen thuộc, nhắc đến Bánh cuốn Quyên là nhắc tới một thương hiệu bánh cuốn gia truyền cùng câu chuyện nơi đất Cảng Hải Phòng</span>
                        </div>
                    </div>
                    <div className="row mr-0 ml-0 d-flex justify-content-center">
                        <div className="col-2 col-section2">
                            <div className="imgcircle"></div>
                            <span className="AnhHai">Anh Vũ Sơn Hải</span>
                            <span className="AnhHai-title">truyền nhân đời thứ 3</span>
                        </div>
                        <div className="col-2 col-section2">
                            <div className="imgcircle"></div>
                            <span className="AnhHai">Anh Vũ Sơn Hải</span>
                            <span className="AnhHai-title">truyền nhân đời thứ 3</span>
                        </div>
                        <div className="col-2 col-section2">
                            <div className="imgcircle"></div>
                            <span className="AnhHai">Anh Vũ Sơn Hải</span>
                            <span className="AnhHai-title">truyền nhân đời thứ 3</span>
                        </div>
                    </div>
                    <div className="row mr-0 ml-0 d-flex" style={{ marginTop: '68px' }}>
                        <div className="col-4 p-0">
                            <img src={section2P02} style={{ width: '100%' }}></img>
                        </div>
                        <div className="col-8">
                            <span className="secondP-section2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet</span>
                        </div>
                    </div>
                    <div className="row mr-0 ml-0 d-flex" style={{ marginTop: '68px' }}>
                        <div className="secondP">
                            <div className="secondP-row1">
                                <img src={logo40px}></img>
                                <div style={{ marginLeft: '28px' }}>
                                    <span className="heading">Tầm nhìn</span>
                                    <span className="bodying">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="upperBoldText">Ut enim ad minim veniam</span>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>

                                </div>
                            </div>
                            <div className="secondP-row2">
                                <img src={logo40px}></img>
                                <div style={{ marginLeft: '28px' }}>
                                    <span className="heading">Sứ mệnh</span>
                                    <span className="bodying">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="upperBoldText">Ut enim ad minim veniam</span>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>

                                </div>
                            </div>
                            <div className="secondP-row3">
                                <img src={logo40px}></img>
                                <div style={{ marginLeft: '28px' }}>
                                    <span className="heading">Giá trị cốt lõi</span>
                                    <span className="bodying">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="upperBoldText">Ut enim ad minim veniam</span>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <img src={logoabsolute} className="img-ab-section2"></img>
                </div>
            </div>
            <div className="container-fluid p-0 section3-intro">
                <img src={headingSection3} className="headingSection3"></img>

                <div className="container p-0">
                    <div className="firstP-section3">
                        <img src={groupLogo}></img>
                        <span className="normal-text">"Để làm nên một món bánh cuốn ngon, không chỉ cần nguyên liệu tốt mà còn cần cả <span className="color-text">tâm của người làm bánh</span>"</span>

                    </div>
                    <span className="secondP-section3 Montserrat-Regular1830">
                        Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                        Temporibus autem quibusdam et aut officiis de bitis aut rerum nec essity atibus saepe even ietdu cimus qui blanditiis pra esenti um voluptatum deleniti atque Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dol ore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vol upta tem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non nu mqu am eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat vol uptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corp oris sus.
                    </span>
                    <img src={bodysection3} style={{ marginTop: '37px', width: '100%' }}></img>
                    <span className="thirdP-section3 Montserrat-Regular1830">
                        Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                        Temporibus autem quibusdam et aut officiis de bitis aut rerum nec essity atibus saepe even ietdu cimus qui blanditiis pra esenti um voluptatum deleniti atque Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dol ore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vol upta tem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non nu mqu am eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat vol uptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corp oris sus.
                    </span>
                    <span className="row fourthP-section3">
                        <div className="col-4">
                            <div className="wrapimg-sm-boss">
                                <img src={wrapimgboss1} alt="" style={{ zIndex: '1' }}></img>
                                <img src={wrapimgboss2} alt="" style={{ zIndex: '0' }}></img>
                                <img src={wrapimgboss3} alt="" style={{ top: '-9px', zIndex: '2' }}></img>
                                <div className="wrap-nameboss">
                                    <div className="name">Anh Vũ Sơn Hải</div>
                                    <div className="title">Truyền Nhân đời thứ 3</div>
                                </div>
                            </div>
                        </div>
                        <span className="col-8">Hơn 70 năm tồn tại và phát triển, Bánh cuốn Quyên tự hào đi cùng lịch sử thành phố Hải Phòng xuyên suốt 3 thế hệ. Gánh bánh cuốn nhỏ mưu sinh ngày ấy nay đã trở thành tiệm ăn khang trang tiếp nối cơ nghiệp của gia đình, và đĩa bánh cuốn ngon miệng ngày nào nay cũng thấm đẫm những câu chuyện về văn hoá, lịch sử. Để rồi người dân Hải Phòng không ai là không biết, hay cả những người yêu ẩm thực từ những vùng miền khác khi đến với Hải Phòng đều ít nhiều từng nghe tới Bánh cuốn Quyên.</span>
                    </span>
                </div>

                {/* ----------------------------- */}
                <div>
                    <div style={{ width: '100%'}}>
                        <Slider {...settings} style={{height: '526px',display: 'flex', position: 'relative'}} className="row">
                            <div className="col-2 align-self-center" style={{ width: 300 }}>
                                <img src={csimg02} alt=""></img>
                                <img src={csimg06} alt=""></img>
                            </div>
                            <div className="col-2 align-self-end" style={{ width: 252}}>
                                <img src={csimg03} alt=""  style={{height: 354 }}></img>
                            </div>
                            <div className="col-2 align-self-center" style={{ width: 300 }}>
                                <img src={csimg08} alt=""></img>
                                <img src={csimg04} alt=""></img>
                            </div>
                            <div className="col-2 align-self-start" style={{ width: 252}}>
                                <img src={csimg07} alt=""  style={{height: 354 }}></img>
                            </div>  
                            <div className="col-2 align-self-center" style={{ width: 300 }}>
                                <img src={csimg09} alt=""></img>
                                <img src={csimg05} alt=""></img>
                            </div>
                            <div className="col-2 align-self-end" style={{ width: 252 }}>
                                <img src={csimg01} alt=""></img>
                            </div>
                        </Slider>
                    </div>
                </div>
                {/* ------------------------------------ */}
            </div>
        </div>

    );
};

export default BodyIntroduce;