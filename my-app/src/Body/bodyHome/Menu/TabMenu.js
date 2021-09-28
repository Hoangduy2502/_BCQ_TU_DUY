import React from 'react';
import "../body.css"
import product from "./Product/index"
import CarouselMenu from './CarouselMenu';
import Banhcuon1 from "../img/BC1.png"

import Text from './Text';
const TabMenu = (props) => {
    const {Product,activeTab1s,activeTab2s,activeTab3s,activeTab4s,activeTab5s,onClick,link1,link2,link3,link4,link5,TextData}=props
    console.log("TEST2",Object.values(Object.values(Product)[0])[0])
    var banhcuon=Object.values(Object.values(Product)[0])[0];
    var cha=Object.values(Object.values(Product)[0])[1];
    var nuocmam=Object.values(Object.values(Product)[0])[2];
    var Hanh=Object.values(Object.values(Product)[0])[3];
    var Rau=Object.values(Object.values(Product)[0])[4];
    const listBanhs=banhcuon.map((list)=>{
        return(
         <img className="d-block mt-4 mb-4 pr-2 mr-2 my-imgMenu" src={list} alt="First slide"/>
        )
    })
    const Listchas=cha.map((list)=>
    {
        return(
            <img className="d-block mt-4 mb-4 pr-2 mr-2 my-imgMenu" src={list} alt="First slide"/>
           )
    })
    const ListNuocMam=nuocmam.map((list)=>
    {
        return(
            <img className="d-block mt-4 mb-4 pr-2 mr-2 my-imgMenu" src={list} alt="First slide"/>
           )
    })
    const ListHanh=Hanh.map((list1)=>
    {
        return(
            <img className="d-block mt-4 mb-4 pr-2 mr-2 my-imgMenu" src={list1} alt="First slide"/>
           )
    })
    const ListRau=Rau.map((list1)=>
    {
        return(
            <img className="d-block mt-4 mb-4 pr-2 mr-2 my-imgMenu" src={list1} alt="First slide"/>
           )
    })
    return (
        <div className="Tab container-fuild justify-content-center align-items-center" >
            <div className="Nav_Tab container justify-content-center pt-4">
                <ul className="nav nav-tabs">
                    <li className="nav-item" onClick={()=>{onClick(1)}}><a data-toggle="tab" className={link1} >Bánh Cuốn</a></li>
                    <li className="nav-item" onClick={()=>{onClick(2)}}><a data-toggle="tab" className={link2} >Chả Thịt</a></li>
                    <li className="nav-item" onClick={()=>{onClick(3)}}><a data-toggle="tab" className={link3} >Nước Mắm Chấm</a></li>
                    <li className="nav-item" onClick={()=>{onClick(4)}}><a data-toggle="tab" className={link4} >Hành Phi</a></li>
                    <li className="nav-item" onClick={()=>{onClick(5)}}><a data-toggle="tab" className={link5} >Rau</a></li>
                </ul>
                <div className="tab-content" id="ex1-content">
                   
                    <div className={activeTab1s.activeTab1}  id="BanhCuon" role="tabpanel" aria-labelledby="ex1-tab-1">
                    
                    <div className="Textphone">
                        <Text  TextData={TextData[0][0]} text={TextData[0][1]} />
                        </div>
                        <CarouselMenu list={listBanhs}/>
                    </div>
                    <div className={activeTab2s.activeTab2} id="Cha" role="tabpanel" aria-labelledby="ex2-tab-2">
                 
                    <div className="Textphone">
                        <Text TextData={TextData[1][0]} text={TextData[1][1]} />
                        </div>
                        <CarouselMenu list={Listchas}/>
                    </div>
                    <div className={activeTab3s.activeTab3} id="NuocCham" role="tabpanel" aria-labelledby="ex3-tab-3">
                    
                        <div className="Textphone">
                            <Text  TextData={TextData[2][0]} text={TextData[2][1]} />
                        </div>
                        <CarouselMenu list={ListNuocMam}/>
                    </div>
                    <div className={activeTab4s.activeTab4}  id="Hanh" role="tabpanel" aria-labelledby="ex4-tab-4">
                    
                        <div className="Textphone">
                            <Text TextData={TextData[3][0]} text={TextData[3][1]} />
                        </div>
                        <CarouselMenu list={ListHanh}/>
                    </div>
                    <div className={activeTab5s.activeTab5}  id="Rau" role="tabpanel" aria-labelledby="ex5-tab-5">
                        <div className="Textphone">
                            <Text  TextData={TextData[4][0]} text={TextData[4][1]} />
                        </div>
                    
                       <CarouselMenu list={ListRau}/>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default TabMenu;
