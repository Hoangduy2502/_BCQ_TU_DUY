import React from 'react';
import './bodyContent.css';
import bcLogo from './img/ct-banhcuon_logo.png';
import quyenLogo from './img/ct-quyenlogo.png';
import slLogo from './img/ct-logo.png';
import ctbrboss0 from './img/ct-brboss0.webp';
import Ellipse4 from './img/Ellipse4.png';
import boss from './img/boss.webp';
import ctlistimg01 from './img/anh/anhCty.webp';
import ctlistimg02 from './img/ct-listimg02.webp';
import ctlistimg03 from './img/ct-listimg03.webp';
import ctlistimg04 from './img/ct-listimg04.webp';
import ctlistimg05 from './img/ct-listimg05.webp';
import ctend00 from './img/anh/ct-end00.png';
import ctend02 from './img/ct-end02.webp';
import ctend03 from './img/ct-end03.webp';
import ctend04 from './img/anh/ct-end04.png';
import ctend05 from './img/anh/ct-end05.png';
import dataText from './dataText';

const Content = () => {
    return (
        <div className="Content">
           
            <div className="wrap-container">
                <div className="ct-logo">
                    <div>
                        <img className="" src={bcLogo} alt="error img"></img>
                        <img className="logo" src={slLogo} alt="error img"></img>
                    </div>
                    <div>
                        <img className="logo-quyen" src={quyenLogo} alt="error img"></img>
                    </div>
                    <div>
                        <div className="logo-huongvi">
                            <div className="contenthv">
                                <span>Hương vị gia truyền</span>
                            </div>
                            <div className="box1hv" ></div>
                            <div className="box2hv" ></div>

                        </div>
                        <span className="text-title">{dataText.firstP.lowfirstT}<span>{dataText.firstP.upfirstT}</span>{dataText.firstP.lowsecondT}</span>
                    </div>
                    <span className="firstP-foot">{dataText.firstP.upperT}</span>

                </div>
                <div className="wrap-boss">

                    <div className="ct-boss row ml-0">
                        <div className="w" style={{ width: '441px', marginTop: '200px' }}>
                            <span className="textboss1">{dataText.secondP.lowfirstT}</span>
                            <span className="textboss2">
                                {dataText.secondP.lowsecondT}
                            </span>
                        </div>
                        <div className="imgboss" style={{}}>
                            <img className="bossbr01" src={ctbrboss0} alt="error img"></img>
                            <img className="bossbr02" src={Ellipse4} alt="error img"></img>
                            <img className="bossshape" src={boss} alt="error img"></img>
                            <div className="boss1946" data-aos="fade-up">1946</div>
                            <div className="textboss" data-aos="fade-left">
                                <span className="nameboss">Anh Vũ Sơn Hải</span>
                                <span className="titleboss">truyền nhân đời thứ 3</span>
                            </div>
                        </div>
                        <div className="wraptextBoss">
                            <div className="textboxboss">
                                <span>{dataText.secondP.upperT}</span>
                            </div>
                            <div className="borderboxtop"></div>
                            <div className="borderboxbottom"></div>
                        </div>
                    </div>
                </div>
                <div className="ct-multiRow">
                    <div className="fisrtimgs row">
                        <img className="col-xl-5 col-7" src={ctlistimg01} alt="" />
                        <img className="col-xl-4 col-5" src={ctlistimg02} alt="" />
                        <img className="col-xl-3 col-5" src={ctlistimg03} alt="" />
                        <img className="col-xl-3 col-7" src={ctlistimg04} alt="" />
                        <img className="col-xl-9 col-12" src={ctlistimg05} alt="" />
                    </div>
                    {/* <div className="secondimgs row">
                        <img className="col-3 pr-2" src={ctlistimg04} href="" />
                        <img className="col-9 " src={ctlistimg05} href="" />
                    </div> */}
                </div>
                <div className="ct-intro-head">
                    <span>
                        {dataText.thirdP.lowfirstT}<span className="upper">{dataText.thirdP.upfirstT}</span>{dataText.thirdP.lowsecondT}<span className="upper">{dataText.thirdP.upsecondT}</span>
                    </span>
                    <div style={{ position: "relative" }}>
                        <img src={ctend00} alt="error img" />
                        <span className="huongvidicung">"Hương vị được gìn giữ theo năm tháng"</span>
                    </div>
                </div>
                <div className="ct-intro-body">
                    <div className="body-row1 row">
                        <div className="col-xl-7 col-12 p-0 m-0" style={{ position: 'relative', top: '6px', overflow: 'hidden' }}>
                            <iframe src='https://www.youtube.com/embed/x4NpBzIlOM8'
                                width="80%"
                                height="535px"
                                frameBorder='0'
                                allowFullScreen
                                title='video'
                                style={{ width: '100%' }}

                            />
                            {/* <img src={ctend01} style={{ width: '100%' }} href=""></img> */}
                            {/* <div className="mycarouselimg">
                                <div id="carouselimg" className="carousel slide" data-ride="carousel">

                                    <div style={{ position: 'absolute', background: '#191200 0% 0% no-repeat padding-box', width: '100%', height: '100%', opacity: '0.61', borderRadius: '5px' }}>

                                    </div>
                                    <div className="carousel-inner myinnerimg">
                                        <div className="carousel-item active">
                                            <div className="d-none d-lg-block">
                                                <div className="slide-box">
                                                    <img src={carimg01} alt="First slide" />
                                                    <img src={carimg02} alt="First slide" />
                                                    <img src={carimg03} alt="First slide" />
                                                    <img src={carimg04} alt="First slide" />
                                                    <img src={carimg05} alt="First slide" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="d-none d-lg-block">
                                                <div className="slide-box">
                                                    <img src={carimg01} alt="First slide" />
                                                    <img src={carimg02} alt="First slide" />
                                                    <img src={carimg03} alt="First slide" />
                                                    <img src={carimg04} alt="First slide" />
                                                    <img src={carimg05} alt="First slide" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev pre-btncarimg" href="#carouselimg" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <img src={precarimg} href=""></img>
                                    </a>
                                    <a className="carousel-control-next next-btncarimg" href="#carouselimg" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <img src={nextcarimg} href=""></img>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-xl-5 col-12 p-0 m-0">
                            <div className="row flex-nowrap col5-custom">

                                <div className="col-6 p-0 m-0">
                                    <img style={{ width: '100%' }} src={ctend02} alt="error img"></img>
                                </div>
                                <div className="textrow1 col-6 p-0 m-0" style={{ width: '100%' }}>
                                    <div className="wrap-textrow1">
                                        <span className="textrow1-head">{dataText.fourthP.lowfirstT}<span className="custom-text"></span></span>
                                        <span className="textrow1-body">{dataText.fourthP.upfirstT}</span>
                                        <span className="textrow1-foot">{dataText.fourthP.lowsecondT}</span>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-7 col-12 row col-nth3">
                            <div className="col-xl-7 col-12 col-nth3-1">
                                <div className="col-nth3-div">
                                    <span className="textrow1-head" style={{ textAlign: 'right' }}>{dataText.fifthP.lowfirstT}</span>
                                    <span className="textrow1-body" style={{ textAlign: 'right' }}>{dataText.fifthP.upfirstT}</span>
                                    <span className="textrow1-foot" style={{ textAlign: 'right' }}>{dataText.fifthP.lowsecondT}</span>
                                </div>
                            </div>
                            <div className="col-xl-5 col-12 p-0 m-0 myfiximg-01">
                                <img src={ctend03} alt="error img"></img>
                            </div>
                        </div>
                        <div className="col-xl-5 col-12 row">

                            <div className="col p-0 m-0 d-flex">
                                <div className="myfix-padding-mobile">
                                    <span className="textrow1-head">{dataText.sixtP.lowfirstT}</span>
                                    <span className="textrow1-body">{dataText.sixtP.upfirstT}</span>
                                    <span className="textrow1-foot">{dataText.sixtP.lowsecondT}</span>
                                </div>
                            </div>

                            <div className="col p-0 m-0">
                                <img src={ctend04} alt="error img" style={{ width: '100%' }}></img>
                            </div>


                        </div>


                    </div>
                </div>
                <div className="ct-intro-footer">
                    <img src={ctend05} alt="error img"></img>
                    <span className="footer-row1">{dataText.seventhP.lowfirstT}<span>{dataText.seventhP.upfirstT}</span></span>
                    <span className="footer-row2">{dataText.seventhP.lowsecondT}</span>
                </div>
            </div>
        </div>
    );
}

export default Content;
