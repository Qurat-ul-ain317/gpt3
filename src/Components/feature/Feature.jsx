import React from 'react'
import './feature.css'

function Feature({title, text}) {
  return (
    <div>
      <div className='gpt3__features-container__features'>
          <div className='gpt3__features-container__features-title'>
              <div></div>
              <h1>{title}</h1>
          </div>
          <div className='gpt3__features-container__features-text'>
              <p>{text}</p>
          </div>
      </div>
    </div>
  )
}

export default Feature