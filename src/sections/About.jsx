import React from 'react';
import hackathonLogo from '../assets/hackathonLogo.png';
import './About.css';

const ABOUT_SECTION = {
  TITLE: 'What is FPGA?',
  LONG_DESCRIPTION:
    "We believe that AMD, as a leader in innovative computing solutions, is the ideal partner for this event. Their expertise in hardware and FPGA technology aligns perfectly with the goals of our Hackathon. We are confident that their involvement will add immense value to the event and inspire students to explore new horizons in FPGA technology.",
  LOGO: hackathonLogo,
};

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{ABOUT_SECTION.TITLE}</h1>
      <br/>
      <p>{ABOUT_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="logoS">
      <img className="Logo" src={ABOUT_SECTION.LOGO} alt="Hackstreet" />
    </div>
  );
}

const About = () => {
  return (
    <div className="about-container" id="about">
      <LogoSectionAbout />
      <Logo />
    </div>
  );
};

export default About;


