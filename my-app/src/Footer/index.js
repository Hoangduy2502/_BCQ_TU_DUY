import React from 'react';
import Data1 from '../contant/index';
// import BreakingNews from './breakingNews';
import ContactFooter from './contactFooter'
import Logo from './img/Group28.webp'

const Footer = (props)=>{
    const data=Data1.Data
     const {cus} = props 
    
    return(
    <div className="Footer">
        
        <div className="contentfooter">
            {cus}
            {/* <BreakingNews DataTT={data}/> */}
            <ContactFooter />
            <img src={Logo} style={{ opacity: '.3', position: 'absolute', bottom: '0', left: '0' }} alt="loi"></img>
            <div style={{ position: 'absolute', bottom: '0', width: '100%', height: '27px', background: '#840C16 0% 0% no-repeat padding-box' }}>
                <p style={{ color: 'red' }}>Ver:2.0.0</p>
            </div>
        </div>
    </div>)
}

export default Footer;