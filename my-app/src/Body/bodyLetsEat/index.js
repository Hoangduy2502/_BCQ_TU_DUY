import React from 'react';
import Lesteat from './Lesteat';
import DetailBlogLeastEat from './DetailBlogLeatEat';
import ContanstGraphSql from '../../ContanstGraphSql';
const Leteats = () => {
    const [allNews, setAllNews] = React.useState(null)
    const [page,setPage]=React.useState(1)
    const [isloading, setIsloading] = React.useState(false)
    React.useEffect(() => {
        async function getAllmobile() {
            setIsloading(true)
            if (page > 0) {
                setIsloading(true)
                
                const blog = await ContanstGraphSql.getBlogs(2,page,10)
                if (blog == null) {
                    setAllNews({})
                    alert("Bạn không có lịch đặt hàng nào")
                    setIsloading(false)
                }
                else {
                    setAllNews(blog)
                    setIsloading(false)
                }
            }
            else {
                setPage(1)
            }
        }
        getAllmobile()
    }, [page])
    console.log("TESTPAGE",page)
    var url_string = window.location.href;
    var url = new URL(url_string);
    var client_id = React.useRef(url.searchParams.get("id") ? url.searchParams.get("id") : null);
    return (
 
        <div>
            {
                client_id.current==null?
                <Lesteat allNews={allNews} setAllNews={setAllNews} page={page} setPage={setPage} isloading={isloading}/>:
                <DetailBlogLeastEat isnewsData={allNews} setIsnewsData={setAllNews} client_id={client_id.current}></DetailBlogLeastEat>
            }
        </div>
       
    );
}

export default Leteats;
