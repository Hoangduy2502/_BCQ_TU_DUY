import React from 'react';
import News from './News';
import PageAllNews from './PageAllNews';

const TinTuc = (props) => {
    const { isnewsData, setIsnewsData } = props
    var url_string = window.location.href;
    var url = new URL(url_string);
    var client_id = React.useRef(url.searchParams.get("id") ? url.searchParams.get("id") : null);
    const [page,setPage]=React.useState(1)
    return (
        <div>
            {
                client_id.current==null?
                <PageAllNews page={page} setPage={setPage}/>:
                <News isnewsData={isnewsData} setIsnewsData={setIsnewsData} client_id={client_id.current}></News>
            }
        </div>
    );
}

export default TinTuc;
