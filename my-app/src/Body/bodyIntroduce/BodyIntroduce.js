import React from 'react';
import DataGioiThieu from '../../contant/DataGioiThieu';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from '../../Footer';
import "./style.css";
import imgSection1 from "./img/section1-01.png"
import Banhcuon from "./img/Banhcuon.png"
import Icons from "./img/Icons.png"
import QUYEN from "./img/QUYEN.png"
import section2P02 from "./img/section2P02.png"
import logo40px from "./img/logo40px.png"
import logoabsolute from "./img/logoabsolute.png"
import groupLogo from "./img/groupLogo.png"
import wrapimgboss1 from "./img/wrapimgboss1.png"
import wrapimgboss3 from "./img/boss-nobg.png"
import preIcon from "./img/pre.png"
import nexIcon from "./img/nex.png"
import footerimg2 from "./img/footerimg2.png"
import anhCty from "../bodyHome/img/anh/anhCty.png"
import family from "./img/family.png"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={nexIcon}
            className={className}
            style={{
                ...style, display: "block", width: '13px', position: 'absolute',
                right: '8%', top: '110%', zIndex: 100000
            }}
            alt="error img"
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
            style={{
                ...style, display: "block", width: '13px', position: 'absolute',
                left: '8%', top: '110%', zIndex: 100000
            }}
            alt="error img"
            onClick={onClick}
        />
    );
}
const introduceFooter = () => {
    return (
        <div className="container footer-custom" style={{ marginTop: '661px' }}>
            <div className="row d-flex justify-content-between" style={{ marginBottom: '61px' }}>
                <span className="title-head">Báo chí và Bánh Cuốn Quyên</span>
                <span className="title-more">Xem tất cả các tin</span>
            </div>
            <div className="row">
                <div className="col-md-4 col1-Footer p-0 " style={{ overflow: 'hidden' }}>
                    <iframe className="iframefooter" src='https://www.youtube.com/embed/x4NpBzIlOM8'
                        width="100%"
                        height="572"
                        frameborder='0'
                        allowfullscreen
                        title='video'
                        style={{ width: '100%' }}

                    />
                    {/* <div>
                        <span>Banh cuon net am thuc an tuong noi con pho hai ba trung</span>
                        <span>Banh cuon net am thuc an</span>
                    </div> */}
                </div>
                <div className="col-md-4 Footerimg">
                    <div className="col2-Footer">

                        <img className="footerimg2" src={footerimg2} alt="error img"></img>
                        <span className="head">Không gian ẩm thực truyền thống thu hút khách sành ăn</span>
                        <span className="title">Ut enim ad minima veniam, quis nostrum ex ercita tionem ullam corporis suscipit lab </span>
                        <span className="time">Báo Hải Phòng Số 123 - Ngày 20/10/2022</span>
                    </div>
                </div>
                <div className="col-md-4 col3-Footer p-0">
                    <div className="row1">
                        <span className="head">Đến Hải Phòng ăn gì? Đến ngay Bánh Cuốn Quyên để ăn bánh cuốn Hải Phòng</span>
                        <span className="title">Ut enim ad minima veniam, quis nostrum ex ercita tionem ullam corporis suscipit lab. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores…<span className="doctiep">Đọc tiếp</span></span>
                        <span className="time">Báo Hải Phòng Số 123 - Ngày 20/10/2022</span>
                    </div>
                    <div className="row2">
                        <span className="head">Đến Hải Phòng ăn gì? Đến ngay Bánh Cuốn Quyên để ăn bánh cuốn Hải Phòng</span>
                        <span className="title">Ut enim ad minima veniam, quis nostrum ex ercita tionem ullam corporis suscipit lab. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores…<span className="doctiep">Đọc tiếp</span></span>
                        <span className="time">Báo Hải Phòng Số 123 - Ngày 20/10/2022</span>
                    </div>
                    <div className="row3">
                        <span className="head">Đến Hải Phòng ăn gì? Đến ngay Bánh Cuốn Quyên để ăn bánh cuốn Hải Phòng</span>
                        <span className="title">Ut enim ad minima veniam, quis nostrum ex ercita tionem ullam corporis suscipit lab. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores…<span className="doctiep">Đọc tiếp</span></span>
                        <span className="time">Báo Hải Phòng Số 123 - Ngày 20/10/2022</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
const BodyIntroduce = () => {
    const settings = {
        className: "slider variable-width",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
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
                        <img className="section1-img-family-desktop" src={imgSection1} alt=""></img>
                        <img className="section1-img-family-phone" src={family} alt=""></img>
                    </div>
                    <span>{DataGioiThieu.slogan}</span>
                    <div className="groupimg">
                        <img className='groupimg-banhcuon' src={Banhcuon} alt=""></img>
                        <img className='groupimg-icon' src={Icons} alt="" ></img>
                        <img className='groupimg-logo' src={QUYEN} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0 section2-intro">
                <div className="container p-0" style={{ position: 'relative' }}>
                    <div className="row mr-0 ml-0 d-flex justify-content-center">
                        <div className="col col-md-10">
                            <span className="firstP-section2">{DataGioiThieu.firstP.lowT1}<span className="upperBoldText">{DataGioiThieu.firstP.upT}</span>{DataGioiThieu.firstP.lowT2}</span>
                        </div>
                    </div>
                    <div className="row mr-0 ml-0 d-flex justify-content-center">
                        <div className="col-4 col-md-2 col-section2">
                            <div className="imgcircle">
                                <img src={DataGioiThieu.firstP.img01} alt="error img"></img>
                            </div>
                            <span className="AnhHai">Anh Vũ Sơn Hải</span>
                            <span className="AnhHai-title">truyền nhân đời thứ 3</span>
                        </div>
                        <div className="col-4 col-md-2 col-section2">
                            <div className="imgcircle">
                                <img src={DataGioiThieu.firstP.img02} alt="error img"></img>
                            </div>
                            <span className="AnhHai">Anh Vũ Sơn Hải</span>
                            <span className="AnhHai-title">truyền nhân đời thứ 3</span>
                        </div>
                        <div className="col-4 col-md-2 col-section2">
                            <div className="imgcircle">
                                <img src={DataGioiThieu.firstP.img03} alt="error img"></img>
                            </div>
                            <span className="AnhHai">Anh Vũ Sơn Hải</span>
                            <span className="AnhHai-title">truyền nhân đời thứ 3</span>
                        </div>
                    </div>
                    <div className="row mr-0 ml-0 d-flex" style={{ marginTop: '68px' }}>
                        <div className="col-md-4 p-0">
                            <img src={section2P02} style={{ width: '100%' }} alt="error img"></img>
                        </div>
                        <div className="col-md-8">
                            <span className="secondP-section2">{DataGioiThieu.secondP}</span>
                        </div>
                    </div>
                    <div className="row mr-0 ml-0 d-flex" style={{ marginTop: '68px' }}>
                        <div className="secondP container p-0 m-1">
                            <div className="secondP-row1">
                                <img src={logo40px} alt="error img"></img>
                                <div style={{ marginLeft: '28px' }}>
                                    <span className="heading">{DataGioiThieu.thirdP.first.headT}</span>
                                    <span className="bodying">{DataGioiThieu.thirdP.first.lowT1}<span className="upperBoldText">{DataGioiThieu.thirdP.first.upT}</span>{DataGioiThieu.thirdP.first.lowT2}</span>
                                </div>
                            </div>
                            <div className="secondP-row2">
                                <img src={logo40px} alt="error img"></img>
                                <div style={{ marginLeft: '28px' }}>
                                    <span className="heading">{DataGioiThieu.thirdP.second.headT}</span>
                                    <span className="bodying">{DataGioiThieu.thirdP.second.lowT1}<span className="upperBoldText">{DataGioiThieu.thirdP.second.upT}</span>{DataGioiThieu.thirdP.second.lowT2}</span>

                                </div>
                            </div>
                            <div className="secondP-row3">
                                <img src={logo40px} alt="error img"></img>
                                <div style={{ marginLeft: '28px' }}>
                                    <span className="heading">{DataGioiThieu.thirdP.third.headT}</span>
                                    <span className="bodying">{DataGioiThieu.thirdP.third.lowT1}<span className="upperBoldText">{DataGioiThieu.thirdP.third.upT}</span>{DataGioiThieu.thirdP.third.lowT2}</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <img src={logoabsolute} className="img-ab-section2" alt="error img"></img>
                </div>
            </div>
            <div className="container-fluid p-0 section3-intro" >
                <img src={anhCty} className="headingSection3" alt="error img"></img>

                <div className="container ">
                    <div className="firstP-section3">
                        <img src={groupLogo} alt="error img"></img>
                        <span className="normal-text">{DataGioiThieu.fourthP.slogan.lowT1}<span className="color-text">{DataGioiThieu.fourthP.slogan.upT}</span>{DataGioiThieu.fourthP.slogan.lowT2}</span>

                    </div>
                    <span className="secondP-section3 Montserrat-Regular1830">
                        {DataGioiThieu.fourthP.bodyT1}
                    </span>
                    <img src={DataGioiThieu.fourthP.bodyimg} style={{ marginTop: '37px', width: '100%' }} alt="error img"></img>
                    <span className="thirdP-section3 Montserrat-Regular1830">
                        {DataGioiThieu.fourthP.bodyT2}
                    </span>
                    <div className="row fourthP-section3">
                        <div className="col col-md-4 " style={{height: '158px', marginBottom: '40px'}}>
                            <div className="wrapimg-sm-boss">
                                <img src={wrapimgboss1} alt="" style={{ zIndex: '1' }}></img>
                                <div style={{ background: '#ffbe00', height: '100%' }}></div>
                                <img src={wrapimgboss3} alt="" style={{ top: '-9px', zIndex: '2', width: '156px', height: '165px' }}></img>

                            </div>
                            <div className="wrap-nameboss">
                                <div className="name">Anh Vũ Sơn Hải</div>
                                <div className="title">Truyền Nhân đời thứ 3</div>
                            </div>
                        </div>
                        <span style={{ textAlign: "center" }} className="col-md-8">{DataGioiThieu.fourthP.footT}</span>
                    </div>
                </div>

                {/* ----------------------------- */}
                <div  >
                    <div style={{ width: '100%' }}>
                        <Slider {...settings} style={{ height: '526px', display: 'flex', position: 'relative', zIndex: 10000 }} className="row">
                            {
                                DataGioiThieu.carousel.map((img, index) => {
                                    if (Object.values(img).length === 2)
                                        return (
                                            <div className="align-self-center" style={{ width: 300 }}>
                                                <img src={img.img1} alt="" style={{width: '100%'}}></img>
                                                <img src={img.img2} alt="" style={{width: '100%'}}></img>
                                            </div>
                                        )
                                    else
                                        return (
                                            <div className="align-self-end" style={{ width: 252 }}>
                                                <img src={img.img} alt="" style={{ height: 354, width: '100%' }}></img>
                                            </div>
                                        )
                                })
                            }
                            {/* <div className="col-2 align-self-center" style={{ width: 300 }}>
                                <img src={csimg02} alt=""></img>
                                <img src={csimg06} alt=""></img>
                            </div>
                            <div className="col-2 align-self-end" style={{ width: 252 }}>
                                <img src={csimg03} alt="" style={{ height: 354 }}></img>
                            </div>
                            <div className="col-2 align-self-center" style={{ width: 300 }}>
                                <img src={csimg08} alt=""></img>
                                <img src={csimg04} alt=""></img>
                            </div>
                            <div className="col-2 align-self-start" style={{ width: 252 }}>
                                <img src={csimg07} alt="" style={{ height: 354 }}></img>
                            </div>
                            <div className="col-2 align-self-center" style={{ width: 300 }}>
                                <img src={csimg09} alt=""></img>
                                <img src={csimg05} alt=""></img>
                            </div>
                            <div className="col-2 align-self-end" style={{ width: 252 }}>
                                <img src={csimg01} alt=""></img>
                            </div> */}
                        </Slider>
                    </div>
                </div>
                {/* ------------------------------------ */}
            </div>
            <Footer cus={introduceFooter()} />
        </div>

    );
};

export default BodyIntroduce;