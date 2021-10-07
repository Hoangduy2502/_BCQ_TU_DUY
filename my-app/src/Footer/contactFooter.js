import React from 'react';
import './footer.css';
import logocontact from './img/logocontact.png'
import facebookfooter from './img/facebookfooter.png'
import imgsupport from './img/imgsupport.png'
import Zalo from './img/Zalo.gif'
import Youtube from "./img/Youtube.gif"
const ContactFooter = () => {
    const onClickZalo = () => {
        window.location.href = "https://zalo.me/4256600821482246309?gidzl=KbCW1pTAXLzHJ2G5D5U1K59990KgKOSBI4WX1dy6XGWR625TBmY40niKSLSk189O7Kvm0ZLMA91iDKc0Mm"
    }
    return (
        <div id="contact" className="contactFooter container">
            <div className="infor-contact container row">
                <img className="logo-footer col-5 col-xl-2" src={logocontact} alt="nice" />
                <div className="contact-address col-5 col-xl-5">
                    <div className="contact-header" style={{ font: 'normal normal normal 30px/38px UTMAlterGothic' }}>Thông tin liên hệ</div>
                    <div className="contact-body">
                        <span><span className="strong-text">ĐC</span>: Số 222 Hai Bà Trưng, Lê Chân, Hải Phòng</span>
                        <span style={{ margin: '10px 0' }}><span className="strong-text">ĐT</span>: 0934222788</span>
                        <span><span className="strong-text">Email</span>: banhcuonquyen1946@gmail.com</span>
                    </div>
                </div>
                {/* <div className="shop2">
                <div className="contact-header" style={{ lineHeight: '37px' }}>Cửa hàng số 2</div>
                <div className="contact-body">
                    <span><span className="strong-text">ĐC</span>: Số 345 Đà Nặng, quận Ngô Quyền thành phố Hải Phòng</span>
                    <span style={{ margin: '10px 0' }}><span className="strong-text">ĐT</span>: 0225.987.654</span>
                    <span><span className="strong-text">Email</span>: banhcuonquyen2@gmail.com</span>
                </div>
            </div> */}
                <div className="like-facebook col-2 col-xl-5">
                    <div class="fb-page" data-href="https://www.facebook.com/banhcuonquyenhaiphong/" data-tabs="" data-width="300px" data-height="100%" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/banhcuonquyenhaiphong/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/banhcuonquyenhaiphong/">BÁNH CUỐN QUYÊN</a></blockquote></div>
                    <div className="row d-flex icon-ytb-zalo">
                        <img className="m-2" style={{ width: "50px" }} src={Zalo} onClick={onClickZalo}/>
                        <img className="m-2" style={{ width: "60px", position: 'relative', top: '5px' }} src={Youtube} />
                    </div>

                </div>
                <div className="shadow-contact"></div>
            </div>

            <div className="copyright">
                Copyright 2021 The Up Team. All rights reserved<br />
                Bản quyền 2021 banhcuonquyen.vn - Công ty CP Ẩm thực VSH<br />
                Mã số thuế / Mã số doanh nghiệp: 0202104065. Ngày cấp 15/05/2021, Sở KHĐTHP
            </div>
        </div>
    )

}



export default ContactFooter;