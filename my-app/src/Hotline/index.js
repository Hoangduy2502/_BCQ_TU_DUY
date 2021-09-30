import React from 'react';
import icon from './img/phoneIcon.gif'
import './style.css'
const Hotline = () => {
    return (
        <a href="tel:+84934222788" className="hotline">
            
                <img style={{ width: '90px'}} src={icon} />
            

        </a>
    );
};

export default Hotline;