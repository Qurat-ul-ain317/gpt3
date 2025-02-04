import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Header() {
  return (
    // Main Header Section
    <div className='gpt3__header section__padding' id='home'>

      {/* Header content section */}
        <div className='gpt3__header-content'>
          {/* Heading */}
            <h1 className='gpt3__header-heading gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>

            {/* Paragraph */}
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

            {/* Header email field */}
            <div className='gpt3__header-content__input'>
                {/* Input field */}
                <input type="email" placeholder='Your Email Address' />
                {/* Input button */}
                <button type='button'>Get Started</button>
            </div>

            {/* Header People section */}
            <div className='gpt3__header-content__people'>
              <img src= {people} alt="People" />
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>

      {/* Header Image */}
        <div className='gpt3__header-image'>
          <img src= {ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header