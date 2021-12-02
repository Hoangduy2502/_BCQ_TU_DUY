import React from 'react';
import ContanstGraphSql from '../../ContanstGraphSql';
const PageAllNews = () => {
    const [allNews, setAllNews] = React.useState(null)
    React.useEffect(() => {
        async function getAllmobile() {
            await ContanstGraphSql.getBlogs().then((val) =>
                setAllNews(val)
            )
        }
        getAllmobile()
    }, [])
    const listNews = allNews != null && allNews.getBlogs.map((data) => {
        return (
            <div className="col-xl-4 col-12 mb-2">
                <div className="card p-2 " style={{ width: "100%" }}>
                    {

                        data.thumbnail != null &&
                        < img className="pt-3 mb-4 w-100" src={process.env.REACT_APP_API_IMG + data.thumbnail.formats.thumbnail.url} />
                    }
                    <div className="card-body p-0">
                        {/* <Link to="/News#challenge?id=1" component={News} /> */}
                        <a href={`/News?id=${data.id}#challenge`}><p className="card-text-name">{data.title}</p></a>
                        <p className="card-text-comment">{data.description}</p>
                        <p className="card-text-date">{data.created_at}</p>
                    </div>
                </div>
            </div>
        )

    })

    return (
        <div style={{ marginBottom: '471px' }}>
            <div className="container-fluid p-0 breackcum-introbody">
                <div className="container p-0">
                    <ul>
                        <li><a>Trang chủ</a></li>
                        <li>/</li>
                        <li><a>Tin tức</a></li>
                    </ul>
                </div>
            </div>
            <div className="container" style={{ marginTop: "70px" }}>
                <div className="row container-fluid p-0 m-0" >
                    {listNews}
                </div>
            </div>
            
        </div>
    );
}

export default PageAllNews;
