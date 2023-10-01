import React, { useEffect } from 'react'
import './Banner.scss'
import Typewriter from 'typewriter-effect';
import {BsDiscord} from 'react-icons/bs'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'

const Banner = () => {
  return (
  
    <div className="landing">      
        <div className='content'>
          <h1>FPGA Hackathon</h1>
          <span className='typewriter'>
            <Typewriter
              options={{
                strings: ['1st To be decided', 'Code In the Abyssal'],
                autoStart: true,
                loop: true,
              }}
              
            />
          </span>

          <div className="banner-link">
            <p>on 2nd and 3rd october</p>
            <a href="" className='join_disco'><BsDiscord /> &nbsp; &nbsp; Join our discord</a>

            <a href="" className='devfolio'>Go to Projects</a>
 
            
          </div>

          <div className="bottom">
            <p>Follow us on social media for updates</p>
            <ul>
              <li><a href=""><AiOutlineInstagram /></a></li>
              <li><a href=""><BsDiscord /></a></li>
              <li><a href=""><BiLogoLinkedin /></a></li>
              <li><a href=""><AiOutlineTwitter /></a></li>
            </ul>
          </div>

        </div>


      </div>          
    
  )
}

export default Banner