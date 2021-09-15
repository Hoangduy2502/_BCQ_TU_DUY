import logo from './logo.svg';
import Header from './Header/Header';
import Index from './Body/bodyHome/index';
import Footer from './Footer';
import DatHang from "./Header/img/Dathang.png"
import "./index.css"
function App() {
  const Menu=()=>
  {
    window.open("https://menu.banhcuonquyen.vn/");
  }
  return (
    <>
      <Header/>
      <Index/>
      <img className="Dathang" src={DatHang} onClick={Menu}/>
      <Footer />
    </>
  );
}


export default App;
