import React,{useState} from 'react';
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
import TabMenu from './TabMenu';
import Text from './Text';

const Menu =(props) => {
    const {Product,activeTab1s,activeTab2s,activeTab3s,activeTab4s,activeTab5s}=props
    const [link1, setLink1] = useState("nav-link active")
    const [link2, setLink2] = useState("nav-link")
    const [link3, setLink3] = useState("nav-link")
    const [link4, setLink4] = useState("nav-link")
    const [link5,setLink5] = useState("nav-link")
    const onClick=async(number)=>
    {
        console.log("TEST")
        switch(number) {
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

  
    return (
        <div className="Tong " >
                <div className="Menu " >
                    <div className="ElipS">
                        <img className="Elipse" src={Ellip} style={{position:"relative", top:-100+"px", left:550+"px"}}></img>
                        <img className="icon79" src={Icon79} style={{position:"relative", top:-100+"px", left:450+"px"}} />
                    </div>
                    
                    <img className="Icon70" src={Icon70} style={{position:"relative", top:-300+"px", left:250+"px"}}/>
                    <img className="Logo" src={Logo}/>
                    <img className="Trayproduct" src={Trayproduct} />
                    <div className='Banhcuon' onClick={()=>onClick(1)}>
                        <div className="TextBc row  ">
                        <Text/>   
                        </div>
                    </div>
                    <div className='Cha' onClick={()=>onClick(2)}>
                        <div className="TextCha">
                            
                            <Text/>  
                            
                        </div>
                    </div>
                    <div className='Nuocham' onClick={()=>onClick(3)}>
                        <div className="TextMam"> 
                            <Text/>  
                        </div>
                    </div>
                    <div className='Hanh' onClick={()=>onClick(4)}>
                        <div className="TextHanh">
                        <Text/>  
                        </div>
                    </div>
                    <div className='Rau' onClick={()=>onClick(5)}>
                        <div className="TextRau" >
                        <Text/> 
                        </div>
                    </div>
                    <img className="Hoa" src={Hoa}/>
                    <img className="Icon" src={Icon}/>
                </div>
                <TabMenu Product={Product} activeTab1s={activeTab1s} 
                activeTab2s={activeTab2s}
                activeTab3s={activeTab3s}
                activeTab4s={activeTab4s}
                activeTab5s={activeTab5s}
                link1={link1} link2={link2} link3={link3} link4={link4} link5={link5}onClick={onClick}/>
        </div>
    );
}

export default Menu;
