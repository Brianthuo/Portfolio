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
          <p>I am a professional web developer and have the expertise and experience necessary to deliver high quality results. I value open communication throughout the development process and hence  I take the time to get to know my clients and their businesses, so I can deliver customized solutions that truly meet their needs so that the result I will offer will be  scalable , so as your  business grows, your website can grow with it.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About