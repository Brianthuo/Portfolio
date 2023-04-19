import React from 'react'
import './About.scss'
import brian from '../../images/brian.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="portrate">
        <img src={brian} alt="" />
      </div>
      <div className="info">
        <div className="sub-conteiner">
        <div className="header">
        <h1>About Me</h1>
        </div>
        <div className="info-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum ad ab tempore, quaerat consequatur, tenetur veritatis sed neque minus dolore! Eveniet quibusdam tempore quis exercitationem totam, quod necessitatibus blanditiis?</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About