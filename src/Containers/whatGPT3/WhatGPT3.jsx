import React from 'react'
import './whatGPT3.css'
import Feature  from '../../Components/feature/Feature'

function WhatGPT3() {
  return (

    // What is GPT3
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>

        {/* What GPT3 Features */}
        <div className='gpt3__whatgpt3-features'>
            <Feature title = "What is GPT-3" text = "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
        </div>

        {/* What GPT3 Heading */}
        <div className='gpt3__whatgpt3-heading'>
            <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
            <p>Explore The Library</p>
        </div>

        {/* What GPT3 Container */}
        <div className='gpt3__whatgpt3-container'>
            <Feature title = "Chatbots" text = "We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>

            <Feature title = "Knowledgebase" text = "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>

            <Feature title = "Education" text = "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        </div>
    </div>
  )
}

export default WhatGPT3