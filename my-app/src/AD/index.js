import React, { useState } from 'react';
import postup from '../Body/bodyHome/img/postup.png';
import iconX from '../Body/bodyHome/img/iconX.png';
import { Link } from 'react-router-dom'

import './style.css'
const UpPost = () => {
    const [show, setshow] = useState(true);
    if(show) 
    document.body.style.overflow = 'hidden'

    const Show = () => {
        console.log("false", show);
        document.body.style.overflow = 'unset'
        setshow(false)
    }   
    const go = (e) => {
        e.stopPropagation()
        document.body.style.overflow = 'unset'
    }
    

    console.log("tao la render")
    const Dodal = () =>
        <div className="ADgrid">
            <div>
                <img src={iconX} alt="" onClick={() => Show()} />
                <a href="/News#challenge"><img src={postup} alt="" className="main-img" onClick={(e) => go(e)}></img></a>
                
                <Link to={'/News#challenge'}><div className="linkbt" onClick={(e) => go(e)}>Xem ngay!</div></Link>
            </div>

        </div>;

    return (
        <div>

            {show ? <Dodal /> : <></>}
        </div>



    );
}

export default UpPost;
