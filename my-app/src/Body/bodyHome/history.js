import React from 'react';
import { useEffect } from 'react';
import "./body.css"
import maket from "./img/maket.png"
import tet from "./img/chup-anh-tet.png"
import street from "./img/Trangbanh.png"
import Aos from 'aos';
import "aos/dist/aos.css"
import Cho from "./img/cho.png"
const History = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    return (
        <>
        <div className="GT" >
            <div className="Gioithieu">
            </div>
            <div className=" d-flex" >
                <img data-aos="fade-up"  className="maket" src={Cho}/>
                <img data-aos="fade-up" className="anhtet" src={tet}/>
            </div>
            <img data-aos="fade-up" className="Street" src={street} />
           
        </div>
        <div>
            
        </div>
        </>
    );
}

export default History;
