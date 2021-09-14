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
        <div style={{position: 'absolute', bottom: '0',width: '100%', height: '27px', background: '#840C16 0% 0% no-repeat padding-box'}}></div>
    </div>
    )
}
export default ContentFooter;