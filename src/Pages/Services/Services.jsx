import React from 'react'
import './Services.scss'
import webdev from '../../images/webdev.jpg'
import consult from '../../images/consult.jpg'
import seo from '../../images/seo.jpg'

const Services = () => {
  return (
    <div className='services'>
      <h2>My services</h2>
      <div className="image-content">
     <div className="webdev">
      <img src={webdev} alt="" />
      <h4>Website development</h4>
     </div>
     <div className="Consulting">
      <img src={consult} alt="" />
      <h4>Consulting</h4>
     </div>
     <div className="seo">
      <img src={seo} alt="" />
      <h4>SEO expert</h4>
     </div>
      </div>
    </div>
  )
}

export default Services