import React from 'react';
import ContentFooter from './contentFooter';
import Rating from './rating';
import Data1 from '../contant/index';
import { useState } from 'react';
<<<<<<< HEAD
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
=======
const Footer = ()=>{
    const data=Data1.Data
    console.log("TEST",data)
    return(
    <div className="Footer">
        
        <ContentFooter DataTT={data}/>
    </div>)
>>>>>>> 07ce73ac0239abcf0524c9ea02822644933927a5
}

export default Footer;