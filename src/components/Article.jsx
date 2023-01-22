import React from 'react'
import '../App.css'
import '../index.css'

export default function Article(props) {
    return(
        <article>
            <div className="header">
                <h1 className="title">{props.title}</h1>
                <div className="publishing-details">
                    <h4>{props.author}</h4>
                    <h5>/ {props.publishedAt}</h5>
                </div>
            </div>
            <div className="imageContainer">
                <img src={props.urlToImage} alt="article-image" className='article-image'/>
            </div>
            <section>
                <p className="descr">{props.description}</p>
                <a href={props.url} target="_blank">
                    <button>Learn More</button>
                </a>
            </section>
        </article>
    )
}