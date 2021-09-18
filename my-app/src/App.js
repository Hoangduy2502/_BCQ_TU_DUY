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
function App() {
  const Menu = () => {
    window.open("https://menu.banhcuonquyen.vn/");
  }
  return (
    <>
      <Header />
      <img className="Dathang" src={DatHang} onClick={Menu} />
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
