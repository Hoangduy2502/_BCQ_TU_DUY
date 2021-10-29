import Header from './Header/Header';
import Index from './Body/bodyHome/index';
import Footer from './Footer';
import DatHang from "./Header/img/Dathang.png"
import "./index.css"
import GioiThieu from "./Body/bodyIntroduce/index"
import SanPham from "./Body/bodyProduct/index"
import Rating from './Footer/rating';
import TinTuc from './Body/bodyNews/index'
import "./App.css"
import BreakingNews from './Footer/breakingNews';
import Data1 from './contant/index';
import './Footer/footer.css'
// import UpPost from './AD';
import iconBack from "../src/Header/img/iconBack.png"
import Hotline from './Hotline';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import react, { useState } from 'react';
import Lesteats from './Body/bodyLetsEat/index';
function App() {
  const data = Data1.Data

  const [check, setcheck] = useState(false)
  const [show, setshow] = useState(true);
  const [show1, setShow1] = useState(true);

  const Menu = async () => {
    if (check === false) {
      setcheck(true)
      setshow(false)

    }

    else {
      setcheck(false)
      setshow(true)
    }
    // window.open("https://menu.banhcuonquyen.vn/");

  }
  if (!show && document.documentElement.clientWidth <= 755) {

    document.body.style.overflow = 'hidden'

  }
  else
    document.body.style.overflow = 'unset'
  const nullFooter = () => {
    return (
      <div style={{ height: '429px' }}></div>
    )
  }

  const Items = () => {

    return check === true ?
      <div className="modal-menu" style={{ width: "100%" }}>
        <div className="modaliframe">
          <iframe className="MenuiFrame" src="http://192.168.1.6:3001" frameborder="0" type="text/html"></iframe>
          <img className="iconBack" onClick={Menu} src={iconBack} alt="error img"/>

        </div>

      </div>
      : <>
        <img className="DathangPC" src={DatHang} onClick={Menu} data-aos="fade-up" alt="error img"/>
        {/* <img className="Dathangphone " src={Dathangphone} style={{ width: "100%" }} onClick={Menu} data-aos="fade-up" /> */}
        <div className="DatHangNhanh" onClick={Menu} data-aos="fade-up">
          <div className="box-first"></div>
          <span >Đặt hàng nhanh</span>
          <div className="box-last"></div>
        </div>


      </>

  }


  return (
    <>
      <Router>
        <Header shows={{ show1, setShow1 }} />
        <div className="Dathang">
          <Items />
        </div>
        <Hotline />

        <Switch>
          <Route exact path="/">
            <Index />
            {/* <UpPost shows={{ show1, setShow1 }} /> */}
            <Rating />
            <Footer cus={<BreakingNews DataTT={data} />} />
          </Route>
          <Route path="/Introduction">
            <GioiThieu />
          </Route>
          <Route path="/SanPham">
            <SanPham />
            <Footer cus={nullFooter()} />
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
