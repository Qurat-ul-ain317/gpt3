import React from 'react'
import './article.css'

function Article({imageUrl, date, title}) {
  return (
    // Main article div
    <div className='gpt3__blog-container_article'>
        {/* Article image */}
        <div className='gpt3__blog-container_article-image'>
            <img src={imageUrl} alt="blog" />
        </div>

        {/* Article Content */}
        <div className='gpt3__blog-container_article-content'>
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
            </div>
            <p>READ FULL ARTICLE</p>
        </div>
    </div>
  )
}

export default Article