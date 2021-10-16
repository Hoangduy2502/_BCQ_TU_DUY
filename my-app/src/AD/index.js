import React from 'react';
import postup from '../Body/bodyHome/img/postup.png';
import iconX from '../Body/bodyHome/img/iconX.png';
import { Link } from 'react-router-dom'

import './style.css'
const UpPost = (props) => {
   const {shows}=props
    if(shows.show1) 
    document.body.style.overflow = 'hidden'

    const Show = () => {
        shows.setShow1(false)
        document.body.style.overflow = 'unset'
       
    }   
    
    const go = (e) => {
        e.stopPropagation()
        document.body.style.overflow = 'unset'
        shows.setShow1(false)
    }
    


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

            {(shows.show1) ? <Dodal /> : <></>}
        </div>



    );
}

export default UpPost;
