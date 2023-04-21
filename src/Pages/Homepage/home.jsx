import React from 'react'
import './home.scss'
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {RiComputerLine} from 'react-icons/ri'
import {FiPhoneCall} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {BsWhatsapp, BsLinkedin} from 'react-icons/bs'
import image1 from '../../images/image5.png'

const home = () => {
  return (
    <div className='container'>
        <div>
        <nav className='navbar'>
            <ul>
                <li>
                     < BiHome className='icon'/>    
                <span className='list'>home</span>
                 </li>
                <li>
                     <AiOutlineUser className='icon'/>
                      <span className='list'>About me</span>
                       </li>
                <li>
                     <RiComputerLine className='icon'/> 
                     <span className='list'> My services</span>
                     
                </li>
                <li> <FiPhoneCall className='icon'/>
                 <span className='list'> get in touch</span>
                 </li>
            </ul>
        </nav>
        </div>

        <div className="content-container">
        <div className="content">
            <h1> Hello i'm <br /> <span className='name'>Brian Churchill thuo</span> <br /> 
            I'm a <span className='title'> web developer.</span> </h1>
            <p>
            I assist business and individuals create a website that is <br /> tailored specifically to their
             needs with custom features and functionality to ensure that    
            it meets your unique <br /> business requirements.
            </p>
            <button>Hire me</button>
            <div className="icon-links">
            <BsWhatsapp className='icon'/>
            <FaFacebookF className='icon' />
            <BsLinkedin className='icon' />
            </div>

        </div>
        <div className="image">
            <img src={image1} alt="" className='image' />

        </div>
        </div>

        
        <div className="contact">
            <BsWhatsapp/>
        </div>
    </div>
  )
}

export default home