import React from 'react';
import data from "./Product/index.js"
const Text = (props) => {
   
    const {TextData,text}=props
    console.log("TEST2",TextData)
    return (
        <div className="row d-flex container-fuild">
            <div className="col-4 mt-2 ml-2">
                    <div className="txt mt-1 mb-2 ml-1"  >{TextData}</div>
                    <div className="KhungHinh1 " style={{ position: 'absolute', top: '0', left: '0', width: '41px', height: '34px', borderBottom: '3px solid #FFBE00', borderRight: '3px solid #FFBE00', 
                    borderBottomRightRadius: '3px 3px', marginTop:"-5px",
                    marginLeft:"10px"
                    }}></div>
                    <div className="KhungHinh2 " style={{ position: 'absolute', bottom: '0', right: '0', width: '41px', height: '34px',
                    borderBottom: '3px solid #FFBE00', 
                    borderRight: '3px solid #FFBE00',
                    borderBottomRightRadius: '3px 3px',
                    marginBottom:"3px",
                    marginRight:"-5px"}}></div>
            </div>
            <div className="col-7 mt-2 " style={{textAlign: "left",Font: "normal normal normal 13px/20px Montserrat",color: "#392A00",opacity: 1}}>
                <label>{text}</label>
            </div>
        </div>
    );
}

export default Text;
