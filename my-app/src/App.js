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
import iconBack from "../src/Header/img/iconBack.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import react, {useState,useEffect} from 'react';
import Lesteats from './Body/bodyLetsEat/index';
function App() {
  const data=Data1.Data
 
  const [check,setcheck]=useState(false)

    
  const Menu = async() => {
    if(check==false)
    {
        setcheck(true)
      

    }
 
    else{
      setcheck(false)
    }
    // window.open("https://menu.banhcuonquyen.vn/");
  }
  
  console.log("TEST",check)
 const nullFooter = () => {
   return (
     <div style={{height: '429px'}}>

     </div>
   )
 }
  const Items=()=>
  {
   
    return check==true?
    <>
      <iframe className="MenuiFrame" src="https://menu.banhcuonquyen.vn/" frameborder="0" type="text/html"></iframe>
      <img className="iconBack" onClick={Menu} src={iconBack}/>
    </>
    :<> 
    <img className="DathangPC"  src={DatHang} onClick={Menu} data-aos="fade-up"/>
    <img className="Dathangphone " src={Dathangphone} style={{width:"100%"}} onClick={Menu} data-aos="fade-up"/> 
    
   
   
    </>
    
  }


  return (
    <>
      <Header />
     <div className="Dathang">
        <Items/>
     </div>
        
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
            <Rating/>
            <Footer cus={<BreakingNews DataTT={data}/>}/>
          </Route>
          <Route path="/GioiThieu">
            <GioiThieu/>
          </Route>
          {/* <Route path="/SanPham">
            <SanPham />
            <Footer cus={nullFooter()}/>
          </Route> */}
          <Route path="/LetEat">
           <Lesteats/>
           <Footer cus={nullFooter()}/>
          </Route>
          <Route path="/TinTuc">
            <TinTuc/>
            <Footer cus={nullFooter()}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}


export default App;
