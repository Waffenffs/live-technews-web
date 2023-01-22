import { useState, useEffect } from 'react'
import React from 'react'
import Article from './components/Article'
import './App.css'
import './Index.css'

export default function App() {
  const [news, setNews] = useState([])

  const articleElements = news.map((article) => {
    return(
      <Article 
        author={article.author}
        publishedAt={article.publishedAt}
        title={article.title}
        urlToImage={article.urlToImage}
        description={article.description}
        url={article.url}
      />
    )
  })

  useEffect(()=>{
    const fetchData = async () => {
      const data = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=296bff10926b4d96928c9d20cd139047')
      data.json().then(data => {
        data.articles.map((article) => {
          setNews(prevNews => [...prevNews, article])
        })
      })
    }

    fetchData()
  }, [])

  return(
    <main>
      <nav>
        <a href="https://newsapi.org/" target="_blank">
          <div className="apiLogo">
            <h1>News</h1>
            <span><h1>API</h1></span>
          </div>
        </a>
        <h1 className='website-title'>LIVETECHNEWS.NET</h1>
      </nav>
      <div className="articleContainer">
        {articleElements}
      </div>
    </main>
  )
}