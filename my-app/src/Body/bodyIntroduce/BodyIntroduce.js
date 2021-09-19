import React from 'react';
import "./style.css";
import imgSection1 from "./img/section1-01.png"
import Banhcuon from "./img/Banhcuon.png"
import Icons from "./img/Icons.png"
import QUYEN from "./img/QUYEN.png"
const BodyIntroduce = () => {
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
                        <img src={Icons} alt=""></img>
                        <img src={QUYEN} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyIntroduce;