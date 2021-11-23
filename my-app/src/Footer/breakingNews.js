import React, { useState } from 'react';
import './footer.css'
import prebtn from './img/preicon.png'
import nextbtn from './img/nexticon.png'
import imgmb1 from './img/1.png'
import imgsupport from './img/imgsupport.png'
const BreakingNews = (props) => {
    const { DataTT, isnewsData } = props
    
    const listItems = isnewsData != null && isnewsData.getBlogs.map((book) => {
        return (
            <div key={book.id} className="row col-4 p-0 m-0 flex-nowrap" >
                <img className="img-carousel col-5" src={imgmb1} alt="First slide" />
                <span className="text-news col-7">
                    <div className="text-news-header">{book.title}</div>
                    <div className="text-news-body">{book.description}</div>
                    <div className="text-news-date">{book.created_at}</div>
                </span>
            </div>
        )
    })
    console.log("TEST12345678", listItems)
    const listItemsMobile = Object.values(DataTT).map((book, index) => {
        return (
            <li key={index}>
                <img className="img-carousel p-0" src={book.img} alt="First slide" sty />
                <span className="text-news">
                    <div className="text-news-header">{book.name}</div>
                    <div className="text-news-body">{book.content}</div>
                    <div className="text-news-date">{book.date}</div>
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
                <span className="tintucmoinhat container p-0">Tin tức mới nhất</span>
                <div className="slideFooter">
                    <img src={prebtn} onClick={() => {
                        scroll(false, element.current)
                    }

                    }></img>
                    <ul ref={element}>
                        {listItems}
                    </ul>
                    <img src={nextbtn} onClick={()=>scroll(true, element.current)} ></img>
                </div>

            </div>

            <div className="slide-mobie-footer">
                <img src={imgsupport} className="fix-imgFooter" alt=""></img>
                <span className="tintucmoinhat container">Tin tức mới nhất</span>

                <ul>
                    {listItemsMobile}
                </ul>
            </div>
        </div>
    )
}

export default BreakingNews;