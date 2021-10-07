import logo from './logo.svg';
import Header from './Header/Header';
import Index from './Body/bodyHome/index';
import Footer from './Footer';
import DatHang from "./Header/img/Dathang.png"
import "./index.css"
import GioiThieu from "./Body/bodyIntroduce/index"
import SanPham from "./Body/bodyProduct/index"
import Rating from './Footer/rating';
import Leteats from './Body/bodyLetsEat/index';
import TinTuc from './Body/bodyNews/index'
import "./App.css"
import BreakingNews from './Footer/breakingNews';
import Data1 from './contant/index';
import Dathangphone from "./Header/img/Dathangphone.png"
import './Footer/footer.css'
import UpPost from './AD';
import iconBack from "../src/Header/img/iconBack.png"
import Hotline from './Hotline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import react, { useState, useEffect } from 'react';
import Lesteats from './Body/bodyLetsEat/index';
function App() {
  const data = Data1.Data

  const [check, setcheck] = useState(false)
  const [show, setshow] = useState(true);
  const [show1, setShow1] = useState(true);

  const Menu = async () => {
    if (check == false) {
      setcheck(true)
      setshow(false)

    }

    else {
      setcheck(false)
      setshow(true)
    }
    // window.open("https://menu.banhcuonquyen.vn/");
    
  }
  if(!show && document.documentElement.clientWidth<=755)
  {
  
    document.body.style.overflow = 'hidden'
   
  }
  else
    document.body.style.overflow = 'unset'

  console.log("TEST", document.documentElement.clientWidth)
  const nullFooter = () => {
    return (
      <div style={{ height: '429px' }}>

      </div>
    )
  }
  
  const Items = () => {
     
    return check == true ?
      <div className="modal-menu" style={{width:"100%"}}>
        <div className="modaliframe">
          <iframe className="MenuiFrame" src="https://menu.banhcuonquyen.vn/" frameborder="0" type="text/html"></iframe>
          <img className="iconBack" onClick={Menu} src={iconBack} />
        </div>
        
      </div>
      : <>
        <img className="DathangPC" src={DatHang} onClick={Menu} data-aos="fade-up" />
        <img className="Dathangphone " src={Dathangphone} style={{ width: "100%" }} onClick={Menu} data-aos="fade-up" />



      </>

  }


  return (
    <>
      <Router>
        <Header shows={{show1,setShow1}}/>
        <div className="Dathang">
          <Items />
        </div>
        <Hotline/>

        <Switch>
          <Route exact path="/">
            <Index />
            <UpPost shows={{show1,setShow1}}/>
            <Rating />
            <Footer cus={<BreakingNews DataTT={data} />} />
          </Route>
          <Route path="/Introduction">
            <GioiThieu />
          </Route>
          <Route path="/SanPham">
            <SanPham />
            <Footer cus={nullFooter()}/>
          </Route>
          <Route path="/LetEat">
            <Lesteats />
            <Footer cus={nullFooter()} />
          </Route>
          <Route path="/News">
            <TinTuc />
            <Footer cus={nullFooter()} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}


export default App;
