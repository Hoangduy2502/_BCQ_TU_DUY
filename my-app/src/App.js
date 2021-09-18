import logo from './logo.svg';
import Header from './Header/Header';
import Index from './Body/bodyHome/index';
import Footer from './Footer';
import DatHang from "./Header/img/Dathang.png"
import "./index.css"
import GioiThieu from "./Body/bodyIntroduce/index"
import SanPham from "./Body/bodyProduct/index"
import Rating from './Footer/rating';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import react, {useState} from 'react';
function App() {
  const [check,setcheck]=useState(false)
  const Menu = () => {
    if(check==false)

      setcheck(true)
    else{
      setcheck(false)
    }
    // window.open("https://menu.banhcuonquyen.vn/");
  }
  console.log("TEST",check)
 
  const Items=()=>
  {
   
    return check==true?
    <>
      <iframe style={{width:"500px",height:"850px"}} src="https://menu.banhcuonquyen.vn/"></iframe>
      <button onClick={Menu}>Thoát</button>
      </>
    :<><img  src={DatHang} onClick={Menu} /> </>
  }
  return (
    <>
      <Header />
      <div className="Dathang" >
        <Items/>
      </div>
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
            <Rating/>
          </Route>
          <Route path="/GioiThieu">
            <GioiThieu/>
          </Route>
          <Route path="/SanPham">
            <SanPham />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}


export default App;
