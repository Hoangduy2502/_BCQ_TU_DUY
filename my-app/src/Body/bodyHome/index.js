import React, { useState } from 'react';
import History from './history';
import Content from './Content';

import Menu from './Menu/Menu';
import TabMenu from './Menu/TabMenu';
import Product from './Menu/Product/index';
import DatHang from "../../Header/img/Dathang.png"
const Index = () => {
    const [activeTab1, setActiveTab1] = useState("tab-pane fade show active")
    const [activeTab2, setActiveTab2] = useState("tab-pane fade")
    const [activeTab3, setActiveTab3] = useState("tab-pane fade")
    const [activeTab4, setActiveTab4] = useState("tab-pane fade")
    const [activeTab5, setActiveTab5] = useState("tab-pane fade")
    
    return (
        <div className="body">
            
            <History/>
            <Content/>
            <Menu Product={Product} 
            activeTab1s={{activeTab1,setActiveTab1}}
            activeTab2s={{activeTab2,setActiveTab2}}
            activeTab3s={{activeTab3,setActiveTab3}}
            activeTab4s={{activeTab4,setActiveTab4}}
            activeTab5s={{activeTab5,setActiveTab5}}/>
          
        </div>
    );
}

export default Index;
