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
              <li><Link to=""><AiOutlineInstagram /></Link></li>
              <li><Link to=""><AiFillFacebook /></Link></li>
              <li><Link to=""><BiLogoLinkedin /></Link></li>
              <li><Link to=""><AiOutlineTwitter /></Link></li>
            </ul>
          </div>

        </div>


    </div>          
    
  )
}

export default Banner