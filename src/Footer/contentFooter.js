import React from 'react';
import ContactFooter from './contactFooter';
import './footer.css'
import Logo from './img/Group28.png'
const ContentFooter = () => (
    <div className="contentfooter">
        <ContactFooter />
        <img src={Logo} style={{opacity: '.3', position: 'absolute', bottom: '0'}}></img>
    </div>
);

export default ContentFooter;