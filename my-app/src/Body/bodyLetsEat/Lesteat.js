import React,{useState} from 'react';
import data from "../bodyHome/Menu/Product/index"
import "./bodyLetEat.css"
const Lesteat = () => {
   
    const listData=Object.values(data.LetEatData) 
    // const [col, setCol]=useState("col-6 col-md-3")
    var col="col col-md-3"
    const listEat=listData.map((data)=>
    {
        if(parseInt(data.width)>=460)
        {
            col="col-12 col-md-6 p-2"
        }
        else{
            col="col-6 col-md-3 p-2"
        }
        return(
            
                <div className={col}>
                <div className="card p-2 " style={{width:"100%"}}>
                    <img className="card-img-top" src={data.img} />
                    <div className="card-body p-0">
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
                <div className="row container-fluid p-0 m-0" >
                    {listEat}
                </div>
            </div>
        </div> 
    );
}

export default Lesteat;
