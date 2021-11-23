import React from 'react';
import News from './News';
const index = (props) => {
    const {isnewsData,setIsnewsData}=props
    return (
        <div>
            <News isnewsData={isnewsData} setIsnewsData={setIsnewsData}></News>
        </div>
    );
}

export default index;
