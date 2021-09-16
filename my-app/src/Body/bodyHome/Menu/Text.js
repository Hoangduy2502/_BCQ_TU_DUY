import React from 'react';
import data from "./Product/index.js"
const Text = () => {
    const TextData=Object.values(data.Textdata)
    console.log("TEST2",TextData)
    return (
        <div className="row d-flex container-fuild">
            <div className="col-4 mt-3 ml-2">
                    <div className="txt mt-1 mb-2 ml-1"  >{TextData[0][0]}</div>
                    <div className="KhungHinh1 " style={{ position: 'absolute', top: '0', left: '0', width: '41px', height: '34px', borderBottom: '3px solid #FFBE00', borderRight: '3px solid #FFBE00', 
                    borderBottomRightRadius: '3px 3px', marginTop:"-8px",
                    marginLeft:"10px"
                    }}></div>
                    <div className="KhungHinh2 " style={{ position: 'absolute', bottom: '0', right: '0', width: '41px', height: '34px',
                    borderBottom: '3px solid #FFBE00', 
                    borderRight: '3px solid #FFBE00',
                    borderBottomRightRadius: '3px 3px',
                    marginBottom:"17px",
                    marginRight:"-8px"}}></div>
            </div>
            <div className="col-7 mt-3 " style={{textAlign: "left",Font: "normal normal normal 13px/20px Montserrat",color: "#392A00",opacity: 1}}>
                <label>{TextData[0][1]}</label>
            </div>
        </div>
    );
}

export default Text;
