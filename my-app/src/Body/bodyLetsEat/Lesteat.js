import React from 'react';
import "./bodyLetEat.css"
import ContanstGraphSql from '../../ContanstGraphSql';

const Lesteat = (props) => {
    const { allNews, page, setPage } = props
    var col = "col col-md-3"
    const listEat = allNews != null && allNews.getBlog.content.map((data) => {
        if (data.thumbnail != null && parseInt(data.thumbnail.formats.thumbnail.width - data.thumbnail.formats.thumbnail.height) >= 10) {
            col = "col-12 col-md-6 p-2"
        }
        else {
            
            col = "col-6 col-md-3 p-2"
        }
        return (

            <div className="col-12 col-md-4 p-2">
                <div className="card p-2 " style={{ width: "100%" }}>
                    <img className="card-img-top" src={process.env.REACT_APP_API_IMG + data.thumbnail.formats.thumbnail.url} />
                    <div className="card-body p-0">
                        <a href={`/LetEat?id=${data.id}#challenge`}><p className="card-text-name">{data.title}</p></a>
                        <p className="card-text-comment">{data.description}</p>
                        <p className="card-text-date">{data.created_at}</p>
                    </div>
                </div>
            </div>
        )
    })
    var total_page = []
    if (allNews != null && allNews.getBlog != undefined) {
        for (var i = 1; i <= allNews.getBlog.paging.total_page; i++) {
            total_page.push(i)
        }
    }
    else {
    }
    console.log("TESST", total_page)
    const plusPage = () => {
        if (allNews != undefined && allNews.getBlog != undefined && page < allNews.getBlog.paging.total_page)
            setPage(page + 1)
        console.log("TESST", page)
    }
    const subPage = () => {
        if (allNews != undefined && allNews.getBlog != undefined && page > 1)
            setPage(page - 1)
        console.log("TESST", page)
    }
    const listPage = total_page.map((page) => {
        return (
            <li class="page-item" id={page} value={page} onClick={(e) => {
                setPage(e.currentTarget.value)
            }}><a class="page-link" href="#challenge" >{page}</a></li>
        )

    })
    return (
    
        <div style={{ marginBottom: '471px' }}>
            
            <div className="container-fluid p-0 breackcum-introbody">
                <div className="container p-0">
                    <ul>
                        <li><a>Trang chủ</a></li>
                        <li>/</li>
                        <li><a>Ăn gì hôm nay</a></li>
                    </ul>
                </div>
            </div>
           
                <div className="container" style={{ marginTop: "70px" }}>
                    <div className="row container-fluid p-0 m-0" >
                        {listEat}
                    </div>
                </div>
                <nav aria-label="Page navigation example " style={{ position: "relative" }}>
                    <ul class="pagination" >
                        <li class="page-item" onClick={subPage}>
                            <a class="page-link" href="#challenge" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        {listPage}
                        <li class="page-item" onClick={plusPage}>
                            <a class="page-link" href="#challenge" aria-label="Next" >
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
          
        </div>
     
    );
}

export default Lesteat;
