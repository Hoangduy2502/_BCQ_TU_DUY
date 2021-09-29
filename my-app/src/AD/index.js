import React, { useState } from 'react';
import postup from '../Body/bodyHome/img/postup.png';
import iconX from '../Body/bodyHome/img/iconX.png';
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

        console.log("vao luon tin tuc")
    }
    const Dodal = () =>
        <div className="ADgrid" onClick={() => Show()}>
            <div>
                <img src={iconX} alt="" onClick={() => Show()} />
                <img src={postup} alt="" className="main-img" onClick={(e) => go(e)}></img>
                <div>Xem ngay!</div>
            </div>

        </div>;

    return (
        <div>

            {show ? <Dodal /> : null}
        </div>



    );
}

export default UpPost;
