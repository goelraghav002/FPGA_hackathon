import React, { useEffect } from 'react'
import './Banner.scss'
import Typewriter from 'typewriter-effect';
import {BsDiscord} from 'react-icons/bs'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'
import {Link} from 'react-router-dom'


const Banner = () => {
  return (
  
    <div className="landing" id="home">      
        <div className='content'>
          <h1>FPGA Hackathon</h1>
          <span className='typewriter'>
            <Typewriter
              options={{
              strings: ['Unleash the FPGA Power: Code, Create, Compete!', 'Ignite Your Innovation with Hardware Hacks!'],
                autoStart: true,
                loop: true,
              }}
              
            />
          </span>
        <div>&nbsp;</div>
          <div className="banner-link">
            {/* <p>on 2nd and 3rd october</p> */}
            <Link to="" className='join_disco'><BsDiscord /> &nbsp; &nbsp; Join our discord</Link>

            <Link to="" className='devfolio'>Go to Projects</Link>
 
            
          </div>

          <div className="bottom">
            <p>Follow us on social media for updates</p>
            <ul>
              <li><Link to=""><AiOutlineInstagram /></Link></li>
              <li><Link to=""><BsDiscord /></Link></li>
              <li><Link to=""><BiLogoLinkedin /></Link></li>
              <li><Link to=""><AiOutlineTwitter /></Link></li>
            </ul>
          </div>

        </div>


    </div>          
    
  )
}

export default Banner