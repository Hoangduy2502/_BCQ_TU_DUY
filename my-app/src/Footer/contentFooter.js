import React from 'react';
import ContactFooter from './contactFooter';
import './footer.css'
import Logo from './img/Group28.png'
import BreakingNews from './breakingNews';
const ContentFooter = (props) =>{
    const {DataTT}=props
    return(
        <div className="contentfooter">
            <BreakingNews DataTT={DataTT}/>
            <ContactFooter />
        <img src={Logo} style={{opacity: '.3', position: 'absolute', bottom: '0', left: '0'}} alt="loi"></img>
    </div>
    )
}
export default ContentFooter;