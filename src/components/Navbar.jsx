import { useEffect,useState} from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import logoClose from "../assets/ham-c.svg";
import hamLogo from '../assets/ham.svg';
import logo from '../assets/logo.png';
import './Navbar.scss';

const NAVIGATION_OFFSET = 66;


const Wrapper = styled.div`
  display: block;
  width: 100%;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    // translateY: -1000px;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    animation: slideIn 0.7s ease-in-out;
    .nav-content {
      max-height: 35%;
      width: 100%;
      background-color: rgba(50, 13, 136);
      padding: 1rem;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;




const Navbar = ({}) => {
  const [toggle, setToggle] = useState(true);
  const [isOffset, setIsOffset] = useState(false);

  

  const listenScrollEvent = e => {
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

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', e =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener('mousedown', e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);

  return (

      <nav className={`nav_bar ${isOffset && 'nav_bar-offset-crossed'}`}>
        <Wrapper toggle={toggle}>
          <div className="nav-content" >
            <ul>
              <li>
                <span className="links">
                  <img src={logo} width="80px" alt="logo" />
                </span>
              </li>
              <li>
                <a href="#home">
                  <span className="links">Home </span>
                </a>
              </li>
              <li>
                <a href="#faq">
                  <span className="links">About </span>
                </a>
              </li>
              <li>
                <a href="#prizes">
                  <span className="links">Prizes </span>
                </a>
              </li>
              <li>
                <a href="#sponsors">
                  <span className="links">Sponsors </span>
                </a>
              </li>

              <img
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
              />
            </ul>
          </div>
        
        </Wrapper>

        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav>
      

  );
};

export default Navbar;