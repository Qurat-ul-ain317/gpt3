import React from 'react'
import './features.css'
import { Feature } from '../../Components'


//Array of Features data
const featuresData = [
  {
    title : "Improving end distrusts instantly",
    text : "From they fine john he give of rich he. They age and draw mrs like.     Improving end distrusts may instantly was household applauded."
  },
  {
    title : "Improving end distrusts instantly",
    text : "From they fine john he give of rich he. They age and draw mrs like.     Improving end distrusts may instantly was household applauded."
  },
  {
    title : "Improving end distrusts instantly",
    text : "From they fine john he give of rich he. They age and draw mrs like.     Improving end distrusts may instantly was household applauded."
  },
  {
    title : "Improving end distrusts instantly",
    text : "From they fine john he give of rich he. They age and draw mrs like.     Improving end distrusts may instantly was household applauded."
  }
]

function Features() {
  return (
      <div className='gpt3__features section__padding' id='features'>

          {/* GPT3 Features Heading */}
          <div className='gpt3__features-heading'>
              <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
              <p>Request Early Access to Get Started</p>
          </div>

          {/* GT3 Features Container */}
          <div className='gpt3__features-container'>
              {featuresData.map((val, i) => (
                  <Feature title={val.title} text={val.text} key={val.title + i}/>
              ))}
          </div>

      </div>
  )
}

export default Features