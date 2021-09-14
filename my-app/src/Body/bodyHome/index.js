import React from 'react';
import History from './history';
import Menu from './Menu/Menu';
import TabMenu from './Menu/TabMenu';
const Index = () => {
    return (
        <div className="body">
            <History/>
            <Menu/>
            <TabMenu/>
        </div>
    );
}

export default Index;
