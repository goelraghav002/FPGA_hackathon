import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import {HiX} from "react-icons/hi"
import {AiOutlineMenu} from "react-icons/ai"
import './Navbar.scss';
import {motion } from "framer-motion"

const NAVIGATION_OFFSET = 66;

const Navbar = () => {
  const [navtoggle, setNavtoggle] = useState(false);
  const [isOffset, setIsOffset] = useState(false);

  const navigation = useRef();

  const listenScrollEvent = () => {
    if (window.scrollY >= NAVIGATION_OFFSET) {
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);


  return (
    <>
      
      <nav className={`nav_bar ${isOffset && 'nav_bar-offset-crossed'}`}>
          <div className='nav-content'>
            <ul>
              <li><span className="links"><img src={logo} alt="" width="80px" /></span></li>
              {["Home", "About", "Prizes", "Speakers", "Organizers", "FAQ"].map((item) => (
                <li  key={`link-${item}`}>
                    <a href={`#${item.toLowerCase()}`}>  <span className='links'> {item} </span> </a>                 
                </li>
              ))}
            </ul>
          </div>


          <div className='app__navbar-menu'>
            <AiOutlineMenu onClick={() => setNavtoggle(true)} />
            {navtoggle && (
              <motion.div 
                whileInView={{ x : [200,0]}} 
                transition={{duration: 0.65, ease: "easeOut"}}

              >
              <ul>
                <HiX onClick={() => setNavtoggle(false)} />
                {["Home", "About", "Prizes", "Speakers", "Organizers", "FAQ"].map((item) => (
                  <li className='p-text' key={`${item}`}>
                      <a href={ `#${item.toLowerCase()}`} onClick={() => setNavtoggle(false)}> {item} </a>
                  </li>
                ))}
              </ul>
              </motion.div>
            )}
          </div>
      </nav>
    </>

  )
}

export default Navbar