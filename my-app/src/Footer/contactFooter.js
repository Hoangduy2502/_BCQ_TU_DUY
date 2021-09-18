import React from 'react';
import './footer.css';
import logocontact from './img/logocontact.png'
import facebookfooter from './img/facebookfooter.png'
const ContactFooter = () => (
    <div className="contactFooter">
        <div className="infor-contact">
            <img className="logo-footer" src={logocontact} alt="nice" />
            <div className="contact-address">
                <div className="contact-header" style={{ font: 'normal normal normal 30px/38px UTMAlterGothic' }}>Thông tin liên hệ</div>
                <div className="contact-body">
                    <span><span className="strong-text">ĐC</span>: Số 1 Hai Bà Trưng, quận Lê Chân thành phố Hải Phòng</span>
                    <span style={{ margin: '10px 0' }}><span className="strong-text">ĐT</span>: 0225.123.456</span>
                    <span><span className="strong-text">Email</span>: banhcuonquyen@gmail.com</span>
                </div>
            </div>
            <div className="shop2">
                <div className="contact-header" style={{ lineHeight: '37px' }}>Cửa hàng số 2</div>
                <div className="contact-body">
                    <span><span className="strong-text">ĐC</span>: Số 345 Đà Nặng, quận Ngô Quyền thành phố Hải Phòng</span>
                    <span style={{ margin: '10px 0' }}><span className="strong-text">ĐT</span>: 0225.987.654</span>
                    <span><span className="strong-text">Email</span>: banhcuonquyen2@gmail.com</span>
                </div>
            </div>
            <div className="like-facebook">
                <div class="fb-page" data-href="https://www.facebook.com/banhcuonquyenhaiphong/" data-tabs="timeline" data-width="300" data-height="166" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/banhcuonquyenhaiphong/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/banhcuonquyenhaiphong/">BÁNH CUỐN QUYÊN</a></blockquote></div>
            </div>
            <div className="shadow-contact"></div>
        </div>

        <div className="copyright">
            --Copyright 2021 The Up Team. All rights reserved--<br/>
            Bản quyền 2021 banhcuonquyen.vn - Công ty CP Ẩm thực VSH<br/>
            Mã số thuế / Mã số doanh nghiệp: 0202104065. Ngày cấp 15/05/2021, Sở KHĐTHP
        </div>
    </div>
)

export default ContactFooter;