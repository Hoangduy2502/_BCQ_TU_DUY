import React from 'react';
import History from './history';
import Content from './Content';

import Menu from './Menu/Menu';
import TabMenu from './Menu/TabMenu';
const Index = () => {
    return (
        <div className="body">
            <History/>
            <Content/>
            <Menu/>
            <TabMenu/>
        </div>
    );
}

export default Index;
