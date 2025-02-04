import React from 'react'
import './cta.css'

function Cta() {
  return (
    // CTA
    <div className='gpt3__cta'>
        {/* CTA Content Part */}
        <div className='gpt3__cta-content'>
            <p>Request Early Access to Get Started</p>
            <h3>Register today & start exploring the endless possiblities.</h3>
        </div>
        {/* CTA Button */}
        <div className='gpt3__cta-btn'>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Cta