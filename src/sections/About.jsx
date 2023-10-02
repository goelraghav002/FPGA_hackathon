import React from 'react';
import hackathonLogo from '../assets/hackathonLogo.png';
import './About.css';

const ABOUT_SECTION = {
  TITLE: 'What is FPGA?',
  LONG_DESCRIPTION:
    "FPGA is Field Programmable Gate Array. It is a development board, generally used for VLSI verification of IC. These development boards are now also used in embedded systems due to their low power consumption, high speed data processing and various other key features.",
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


