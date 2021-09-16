import React from 'react';
import "./body.css"
import maket from "./img/maket.png"
import tet from "./img/chup-anh-tet.png"
import street from "./img/Street.png"
import Dathang from "../../Header/img/Dathang.png"
const History = () => {
    return (
        <>
        <div className="GT" >
            <div className="Gioithieu">
            </div>
            <div className=" d-flex" >
                <img  className="maket" src={maket}/>
                <img className="anhtet" src={tet}/>
            </div>
            <img className="Street" src={street} />
           
        </div>
        <div>
            
        </div>
        </>
    );
}

export default History;
