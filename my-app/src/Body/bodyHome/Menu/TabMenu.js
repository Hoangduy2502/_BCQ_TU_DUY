import React from 'react';
import "../body.css"
import product from "./Product/index"
import CarouselMenu from './CarouselMenu';
import Banhcuon1 from "../img/BC1.png"


const TabMenu = (props) => {
    const {Product,activeTab1s,activeTab2s,activeTab3s,activeTab4s,onClick,link1,link2,link3,link4}=props
    console.log("TEST2",Object.values(Object.values(Product)[0])[0])
    var banhcuon=Object.values(Object.values(Product)[0])[0];
    var cha=Object.values(Object.values(Product)[0])[1];
    var nuocmam=Object.values(Object.values(Product)[0])[2];
    var Hanh=Object.values(Object.values(Product)[0])[3];
    const listBanhs=banhcuon.map((list)=>{
        return(
         <img className="d-block mt-4 mb-4 pr-2 mr-2" src={list} style={{width:"215px", height:"316px"}} alt="First slide"/>
        )
    })
    const Listchas=cha.map((list)=>
    {
        return(
            <img className="d-block mt-4 mb-4 pr-2 mr-2" src={list} style={{width:"215px", height:"316px"}} alt="First slide"/>
           )
    })
    const ListNuocMam=nuocmam.map((list)=>
    {
        return(
            <img className="d-block mt-4 mb-4 pr-2 mr-2" src={list} style={{width:"215px", height:"316px"}} alt="First slide"/>
           )
    })
    const ListHanh=Hanh.map((list1)=>
    {
        return(
            <img className="d-block mt-4 mb-4 pr-2 mr-2" src={list1} style={{width:"215px", height:"316px"}} alt="First slide"/>
           )
    })
   
    return (
        <div className="Tab " style={{paddingLeft:"110px",paddingTop:"50px",paddingBottom:"50px"}}>
            <div className="Nav_Tab">
                <ul className="nav nav-tabs">
                    <li className="nav-item" onClick={()=>{onClick(1)}}><a data-toggle="tab" className={link1} >Bánh Cuốn</a></li>
                    <li className="nav-item" onClick={()=>{onClick(2)}}><a data-toggle="tab" className={link2} >Chả</a></li>
                    <li className="nav-item" onClick={()=>{onClick(3)}}><a data-toggle="tab" className={link3} >Nước Chấm</a></li>
                    <li className="nav-item" onClick={()=>{onClick(4)}}><a data-toggle="tab" className={link4} >Hành</a></li>
                </ul>
                <div className="tab-content" id="ex1-content">
                    <div className={activeTab1s.activeTab1}  id="BanhCuon" role="tabpanel" aria-labelledby="ex1-tab-1">
                        <CarouselMenu list={listBanhs}/>
                    </div>
                    <div className={activeTab2s.activeTab2} id="Cha" role="tabpanel" aria-labelledby="ex2-tab-2">
                        <CarouselMenu list={Listchas}/>
                    </div>
                    <div className={activeTab3s.activeTab3} id="NuocCham" role="tabpanel" aria-labelledby="ex3-tab-3">
                        <CarouselMenu list={ListNuocMam}/>
                    </div>
                    <div className={activeTab4s.activeTab4}  id="Hanh" role="tabpanel" aria-labelledby="ex4-tab-4">
                       
                        <CarouselMenu list={ListHanh}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabMenu;
