import React, { useState, useEffect } from 'react';
import Path26 from "../img/Group158.png"
import "../body.css"
import Trayproduct from "../img/Layer1.png"
import Logo from "../img/Logo.png"
import Path207 from "../img/Path207.png"
import Button from "../img/Button.png"
import Hoa from "../img/Hoa.png"
import Icon from "../img/icon78.png"
import Icon70 from "../img/Icon70.png"
import Ellip from "../img/Ellipse.png"
import Icon79 from "../img/Icon79.png"
import TabMenu from './TabMenu';
import Text from './Text';
import Aos from 'aos';
import "aos/dist/aos.css";
import data from "./Product/index.js";

const Menu = (props) => {
    const { Product, activeTab1s, activeTab2s, activeTab3s, activeTab4s, activeTab5s } = props
    const [link1, setLink1] = useState("nav-link active")
    const [link2, setLink2] = useState("nav-link")
    const [link3, setLink3] = useState("nav-link")
    const [link4, setLink4] = useState("nav-link")
    const [link5, setLink5] = useState("nav-link")
    const TextData = Object.values(data.Textdata)
    const onClick = async (number) => {
        console.log("TEST")
        switch (number) {
            case 1:
                await activeTab1s.setActiveTab1("tab-pane fade active show")
                await activeTab2s.setActiveTab2("tab-pane fade")
                await activeTab3s.setActiveTab3("tab-pane fade")
                await activeTab4s.setActiveTab4("tab-pane fade")
                setLink1("nav-link active")
                setLink2("nav-link")
                setLink3("nav-link")
                setLink4("nav-link")
                setLink5("nav-link")

                break;
            case 2:
                await activeTab1s.setActiveTab1("tab-pane fade")
                await activeTab2s.setActiveTab2("tab-pane fade active show")
                await activeTab3s.setActiveTab3("tab-pane fade")
                await activeTab4s.setActiveTab4("tab-pane fade")
                activeTab5s.setActiveTab5("tab-pane fade")
                setLink1("nav-link")
                setLink2("nav-link active")
                setLink3("nav-link")
                setLink4("nav-link")
                setLink5("nav-link")
                break;
            case 3:
                activeTab1s.setActiveTab1("tab-pane fade")
                activeTab2s.setActiveTab2("tab-pane fade")
                activeTab3s.setActiveTab3("tab-pane fade  active show")
                activeTab4s.setActiveTab4("tab-pane fade")
                activeTab5s.setActiveTab5("tab-pane fade")
                setLink1("nav-link")
                setLink2("nav-link")
                setLink3("nav-link active")
                setLink4("nav-link")
                setLink5("nav-link")
                break;
            case 4:
                activeTab1s.setActiveTab1("tab-pane fade")
                activeTab2s.setActiveTab2("tab-pane fade")
                activeTab3s.setActiveTab3("tab-pane fade")
                activeTab4s.setActiveTab4("tab-pane fade  active show")
                activeTab5s.setActiveTab5("tab-pane fade")
                setLink1("nav-link")
                setLink2("nav-link")
                setLink3("nav-link")
                setLink4("nav-link active")
                setLink5("nav-link")
                break;
            case 5:
                activeTab1s.setActiveTab1("tab-pane fade")
                activeTab2s.setActiveTab2("tab-pane fade")
                activeTab3s.setActiveTab3("tab-pane fade")
                activeTab4s.setActiveTab4("tab-pane fade ")
                activeTab5s.setActiveTab5("tab-pane fade  active show")
                setLink1("nav-link")
                setLink2("nav-link")
                setLink3("nav-link")
                setLink4("nav-link")
                setLink5("nav-link active")
                break;
            default:

        }

    }
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="Tong "  >
            <div className="Menu container p-0 " data-aos="fade-zoom-in">
                <img style={{ position: "absolute", width: "100%" }} src={Path26} />
                <div className='Banhcuon' onClick={() => onClick(1)}>
                    <div className="TextBc row  ">
                        <Text TextData={TextData[0][0]} text={TextData[0][1]} />
                    </div>
                </div>
                <div className='Cha' onClick={() => onClick(2)}>
                    <div className="TextCha">

                        <Text TextData={TextData[1][0]} text={TextData[1][1]} />
                    </div>
                </div>
                <div className='Nuocham' onClick={() => onClick(3)}>
                    <div className="TextMam">
                        <Text TextData={TextData[2][0]} text={TextData[2][1]} />
                    </div>
                </div>
                <div className='Hanh' onClick={() => onClick(4)}>
                    <div className="TextHanh">
                        <Text TextData={TextData[3][0]} text={TextData[3][1]} />
                    </div>
                </div>
                <div className='Rau' onClick={() => onClick(5)}>
                    <div className="TextRau" >
                        <Text TextData={TextData[4][0]} text={TextData[4][1]} />
                    </div>
                </div>
            </div>
            <TabMenu Product={Product} activeTab1s={activeTab1s}
                activeTab2s={activeTab2s}
                activeTab3s={activeTab3s}
                activeTab4s={activeTab4s}
                activeTab5s={activeTab5s}
                link1={link1} link2={link2} link3={link3} link4={link4} link5={link5} onClick={onClick} 
                TextData={TextData} />
        </div>
    );
}

export default Menu;
