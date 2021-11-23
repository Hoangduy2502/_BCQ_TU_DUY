import React from 'react';
import News from './News';
const index = (props) => {
    const {isnewsData}=props
    return (
        <div>
            <News isnewsData={isnewsData}></News>
        </div>
    );
}

export default index;
