import React from 'react';
import './footer.css';
import logocontact from './img/logocontact.png'
import facebookfooter from './img/facebookfooter.png'
const ContactFooter = () => (
    <div className="contactFooter">
        <div className="infor-contact">
            <img className="logo-footer" src={logocontact} alt="nice"/>
            <div className="contact-address">
                <div className="contact-header" style={{font: 'normal normal normal 30px/38px UTMAlterGothic'}}>Thông tin liên hệ</div>
                <div className="contact-body">
                    <span className="contact-rowtext"><span className="strong-text">ĐC</span>: Số 1 Hai Bà Trưng, quận Lê Chân thành phố Hải Phòng</span>
                    <span className="contact-rowtext" style={{ margin: '10px 0' }}><span className="strong-text">ĐT</span>: 0225.123.456</span>
                    <span className="contact-rowtext"><span className="strong-text">Email</span>: banhcuonquyen@gmail.com</span>
                </div>
            </div>
            <div className="shop2">
                <div className="contact-header" style={{lineHeight: '37px'}}>Cửa hàng số 2</div>
                <div className="contact-body">
                    <span className="contact-rowtext"><span className="strong-text">ĐC</span>: Số 345 Đà Nặng, quận Ngô Quyền thành phố Hải Phòng</span>
                    <span className="contact-rowtext" style={{ margin: '10px 0' }}><span className="strong-text">ĐT</span>: 0225.987.654</span>
                    <span className="contact-rowtext"><span className="strong-text">Email</span>: banhcuonquyen2@gmail.com</span>
                </div>
            </div>
            <div className="like-facebook">
                    <img src={facebookfooter} alt="loi anh"></img>
            </div>
            <div className="shadow-contact"></div>
        </div>

        <div className="copyright">Copy right by Bánh Cuốn Quyên 2021</div>
    </div>
);

export default ContactFooter;