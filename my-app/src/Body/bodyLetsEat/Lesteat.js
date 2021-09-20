import React,{useState} from 'react';
import data from "../bodyHome/Menu/Product/index"
import "./bodyLetEat.css"
const Lesteat = () => {
   
    const listData=Object.values(data.LetEatData) 
    
    const listEat=listData.map((data)=>
    {
        
        return(
            <div className="m-2" style={{display: "inline-block"}}>
                <div className="card " style={{width: "15rem"}}>
                    <img className="card-img-top" src={data.img} />
                    <div className="card-body">
                        <p className="card-text-name">{data.name}</p>
                        <p className="card-text-comment">{data.comment}</p>
                        <p className="card-text-date">{data.date}</p>
                    </div>
                </div>
            </div>
        )
        
    })
  
    return (
        <div style={{ marginBottom: '471px' }}>
            <div className="container-fluid p-0 breackcum-introbody">
                <div className="container p-0">
                    <ul>
                        <li><a>Trang chủ</a></li>
                        <li>/</li>
                        <li><a>Ăn gì hôm nay</a></li>
                    </ul>
                </div>
            </div>
            <div className="container" style={{marginTop:"70px"}}> 
                {listEat}
            </div>
        </div> 
    );
}

export default Lesteat;
