import React from 'react';
import Path26 from "../img/Path26.png"
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
const Menu = () => {
    return (
        <div >
            <div className="Menu ">
                <div className="ElipS">
                    <img className="Elipse" src={Ellip} style={{position:"relative", top:-100+"px", left:550+"px"}}></img>
                    <img className="icon79" src={Icon79} style={{position:"relative", top:-100+"px", left:450+"px"}} />
                </div>
                <img className="Icon70" src={Icon70} style={{position:"relative", top:-300+"px", left:250+"px"}}/>
                <img className="Logo" src={Logo}/>
                <img className="Trayproduct" src={Trayproduct}/>
                <img className="Banhcuon" src={Button}/>
                <img className="Cha" src={Button}/>
                <img className="Nuocham" src={Button}/>
                <img className="Hanh" src={Button}/>
                <img className="Rau" src={Button}/>
                <img className="Hoa" src={Hoa}/>
                <img className="Icon" src={Icon}/>
                
            </div>
        </div>
    );
}

export default Menu;
