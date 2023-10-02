import React from 'react';
import hackathonLogo from '../assets/hackathonLogo.png';
import './About.css';

const ABOUT_SECTION = {
  TITLE: 'What is FPGA?',
  LONG_DESCRIPTION:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repellat quo ullam officiis sequi aliquam, iusto, perspiciatis animi ab fuga maiores, alias aliquid numquam! Sint voluptatibus sunt beatae quidem similique, suscipit hic iste asperiores totam qui rem quia cumque architecto, tempore nobis commodi provident labore blanditiis a reiciendis. Optio, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit',
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


