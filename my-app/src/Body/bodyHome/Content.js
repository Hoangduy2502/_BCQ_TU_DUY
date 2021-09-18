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
import carimg01 from './img/anh/carimg01.png';
import carimg02 from './img/anh/carimg02.png';
import precarimg from './img/anh/precarimg.png';
import nextcarimg from './img/anh/nextcarimg.png';
import carimg03 from './img/anh/carimg03.png';
import carimg04 from './img/anh/carimg04.png';
import carimg05 from './img/anh/carimg05.png';
import dataText from './dataText';
const Content = () => {
    console.log(dataText);
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
                        <span className="text-title">{dataText.firstP.lowfirstT}<span style={{ font: 'normal normal 600 18px/30px Montserrat-Semibold', color: '#840C16' }}>{dataText.firstP.upfirstT}</span>{dataText.firstP.lowsecondT}</span>
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
                        <div className="imgboss" style={{  }}>
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
                                <span>{dataText.secondP.upperT}</span>
                            </div>
                            <div className="borderboxtop"></div>
                            <div className="borderboxbottom"></div>
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
                    <span style={{ width: "1143px", height: "145px" }}>
                    {dataText.thirdP.lowfirstT}<span className="upper">{dataText.thirdP.upfirstT}</span>{dataText.thirdP.lowsecondT}<span className="upper">{dataText.thirdP.upsecondT}</span>
                    </span>
                    <div style={{ position: "relative" }}>
                        <img src={ctend00} href="" />
                        <span className="huongvidicung">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Hương vị đi cùng<br/> dư âm năm tháng"</span>
                    </div>
                </div>
                <div className="ct-intro-body">
                    <div className="body-row1 row flex-nowrap">
                        <div className="col-7 p-0 m-0" style={{ position: 'relative', top: '6px',overflow:'hidden'}}>
                            <iframe src='https://www.youtube.com/embed/x4NpBzIlOM8'
                                width="100%"
                                height="535"
                                frameborder='0'
                                allowfullscreen
                                title='video'
                                
                            />
                            {/* <img src={ctend01} style={{ width: '100%' }} href=""></img> */}
                            <div className="mycarouselimg">
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
                            </div>
                        </div>
                        <div className="col-5 p-0 m-0">
                            <div className="row flex-nowrap align-items-end p-0 m-0">

                                <div className="col-6 p-0 m-0">
                                    <img style={{ width: '100%' }} src={ctend02}></img>
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

                    </div>
                    <div className="body-row2 row flex-nowrap">
                        <div className="col-7 row p-0 m-0 " style={{ textAlign: 'end', justifyContent: 'flex-end' }}>
                            <div className="col-7 p-0 m-0 d-flex align-items-center" style={{ position: 'relative', left: '18px' }}>
                                <div style={{ paddingTop: '14px'}}>
                                    <span className="textrow1-head" style={{ textAlign: 'right' }}>{dataText.fifthP.lowfirstT}</span>
                                    <span className="textrow1-body" style={{ textAlign: 'right' }}>{dataText.fifthP.upfirstT}</span>
                                    <span className="textrow1-foot" style={{ textAlign: 'right' }}>{dataText.fifthP.lowsecondT}</span>
                                </div>
                            </div>
                            <div className="col-5 p-0 m-0">
                                <img src={ctend03} href="" style={{ width: '85.5%' }}></img>
                            </div>
                        </div>
                        <div className="col-5 m-0 p-0 row" style={{}}>

                            <div className="col p-0 m-0 d-flex">
                                <div className="" style={{ margin: 'auto', padding: "25px" }}>
                                    <span className="textrow1-head">{dataText.sixtP.lowfirstT}</span>
                                    <span className="textrow1-body">{dataText.sixtP.upfirstT}</span>
                                    <span className="textrow1-foot">{dataText.sixtP.lowsecondT}</span>
                                </div>
                            </div>

                            <div className="col p-0 m-0">
                                <img src={ctend04} href="" style={{ width: '100%' }}></img>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="ct-intro-footer">
                    <img src={ctend05} style={{ marginBottom: '39px' }}></img>
                    <span className="footer-row1">{dataText.seventhP.lowfirstT}<span style={{ font: 'normal normal bold 40px/37px Montserrat-Bold', color: '#FFBE00' }}>{dataText.seventhP.upfirstT}</span></span>
                    <span className="footer-row2">{dataText.seventhP.lowsecondT}</span>
                </div>
            </div>
        </div>
    );
}

export default Content;
