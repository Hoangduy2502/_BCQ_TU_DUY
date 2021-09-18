import React from 'react';
import ContentFooter from './contentFooter';
import Rating from './rating';
import Data1 from '../contant/index';
import { useState } from 'react';
const Footer = () => {
    const data = Data1.Data
    console.log("TEST", data)
    return (
        <div className="Footer">
            <div style={{height: 0}}>
                <Rating />
                <ContentFooter DataTT={data} />
            </div>

        </div>)
}

export default Footer;