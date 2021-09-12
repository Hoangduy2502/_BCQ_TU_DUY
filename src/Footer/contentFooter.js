import React from 'react';
import ContactFooter from './contactFooter';
import './footer.css'
import Logo from './img/Group28.png'
import BreakingNews from './breakingNews';
const ContentFooter = () => (
    <div className="contentfooter">
        <BreakingNews />
        <ContactFooter />
        <img src={Logo} style={{opacity: '.3', position: 'absolute', bottom: '0', left: '0'}} alt="loi"></img>
    </div>
);

export default ContentFooter;