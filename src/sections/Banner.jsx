import './Banner.scss'
import Typewriter from 'typewriter-effect';
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import { problem } from '../assets';


const Banner = () => {
  return (
  
    <div className="landing" id="home">      
        <div className='content'>
          <h1>FPGA-THON</h1>
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
          <Link to="https://unstop.com/p/this-fpgathon-comes-with-multiple-challenges-as-well-as-opportunities-the-external-hackathon-powered-by-amd-brings-abo-788326" className='join_disco'>Register on Unstop</Link>

          <a href={problem} target='_blank' rel="noreferrer" className='devfolio'>Problem Statements</a>
 
            
          </div>

          <div className="bottom">
            <p>Follow us on social media for updates</p>
            <ul>
            <li><a href="https://www.instagram.com/ieeesbjiit/" target="_blank" rel="noreferrer"><AiOutlineInstagram /></a></li>
            <li><a href="https://www.facebook.com/ieeesbjiit" target="_blank" rel="noreferrer"><AiFillFacebook /></a></li>
            <li><a href="https://www.linkedin.com/company/ieee-student-branch-jiit" target="_blank" rel="noreferrer"><BiLogoLinkedin /></a></li>
            {/* <li><a href="" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a></li> */}
            </ul>
          </div>

        </div>


    </div>          
    
  )
}

export default Banner