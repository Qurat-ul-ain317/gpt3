import React from 'react'
import './blog.css'
import {Article} from '../../Components'
import { blog01, blog02, blog03, blog04, blog05 } from './import'

function Blog() {
  return (
    // GPT3 Blog
    <div className='gpt3__blog section__padding' id='blog'>
        {/* Gpt3 Heading */}
        <div className='gpt3__blog-heading'>
            <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
        </div>

        {/* Gpt3 Container */}
        <div className='gpt3__blog-container'>
            {/*Group A */}
            <div className='gpt3__blog-container_GroupA'>
                <Article imageUrl = {blog01} date = "Sep 26, 2021" title = "GPT-3 and Open AI is the future. Let us exlore how it is?"/>
            </div>
            {/* Group B */}
            <div className='gpt3__blog-container_GroupB'>
                <Article imageUrl = {blog02} date = "Sep 26, 2021" title = "GPT-3 and Open AI is the future. Let us exlore how it is?"/>
                <Article imageUrl = {blog03} date = "Sep 26, 2021" title = "GPT-3 and Open AI is the future. Let us exlore how it is?"/>
                <Article imageUrl = {blog04} date = "Sep 26, 2021" title = "GPT-3 and Open AI is the future. Let us exlore how it is?"/>
                <Article imageUrl = {blog05} date = "Sep 26, 2021" title = "GPT-3 and Open AI is the future. Let us exlore how it is?"/>
            </div>
        </div>
    </div>
  )
}

export default Blog