import React  from 'react';
import './footer.css'
import prebtn from './img/preicon.webp'
import nextbtn from './img/nexticon.webp'
// import imgmb1 from './img/1.webp'
import imgsupport from './img/imgsupport.png'
const BreakingNews = (props) => {
    const { DataTT, isnewsData } = props
    
    const listItems = isnewsData != null && isnewsData.getBlog.content.map((book) => {
        return (
            <div key={book.id} className="row col-4 p-0 m-0 flex-nowrap" >
                  {
                    book.thumbnail != null &&
                    <img className="img-carousel p-0" src={process.env.REACT_APP_API_IMG + book.thumbnail.formats.thumbnail.url} alt="First slide" />
                }
                <span className="text-news col-7" >
                    <a className="text-news-header" href={`/News?id=${book.id}#challenge`}>{book.title}</a>
                    <div className="text-news-body">{book.description}</div>
                    <div className="text-news-date">{book.created_at}</div>
                </span>
            </div>
        )
    })
    console.log("TEST12345678", listItems)
    const listItemsMobile = isnewsData != null && isnewsData.getBlog.content.map((book, index) => {
        return (
            <li key={index}>
                 {
                    book.thumbnail != null &&
                    <img className="img-carousel p-0" src={process.env.REACT_APP_API_IMG + book.thumbnail.formats.thumbnail.url} alt="First slide" />
                }
                <span className="text-news">
                    <a className="text-news-header" href={`/News?id=${book.id}`}>{book.title}</a>
                    <div className="text-news-body">{book.description}</div>
                    <div className="text-news-date">{book.created_at}</div>
                </span>
            </li>
        )
    })
    const scroll = (direction, Element) => {
        if (Element != undefined && Element.childNodes != null && Element.childNodes.length > 0) {

            let height = Element.childNodes[0].clientWidth // click to scroll height by card
            if (!direction) {
                height = -height
            }
            Element.scrollBy({
                left: height,
                behavior: 'smooth'
            });
            console.log(height);
        }

    }
    const element = React.useRef({})
    React.useEffect((boolen) => {
        scroll(element.current, boolen)
    }, [element])
    return (
        <div style={{ width: '100%' }}>
            <div className='slide-pc-footer'>
                <span className="tintucmoinhat container p-0">Tin t???c m???i nh???t</span>
                <div className="slideFooter container">
                    <img src={prebtn} onClick={() => {
                        scroll(false, element.current)
                    }
                    } style={{marginLeft:"20px"}}></img>
                    <ul ref={element}>
                        {listItems}
                    </ul>
                    <img src={nextbtn} onClick={()=>scroll(true, element.current)} style={{marginLeft:"30px"}}></img>
                </div>

            </div>

            <div className="slide-mobie-footer">
                <img src={imgsupport} className="fix-imgFooter" alt=""></img>
                <span className="tintucmoinhat container">Tin t???c m???i nh???t</span>
                <ul>
                    {listItemsMobile}
                </ul>
            </div>
        </div>
    )
}

export default BreakingNews;