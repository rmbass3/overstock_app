import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import ScrollAnimation from "react-animate-on-scroll";
import bgAbout from '../imgs/bg-main-dark.jpg';

function About(props){
  return (
    <div id="about">
      <ParallaxBanner
        className="about-banner"
        layers={[
          {
            image: bgAbout,
            amount: 0.5,
          },
        ]}
      >
        <div className="about">
          <div className="container title-container">
            <h1 className="about-title">High Point's Most Trusted Flooring Company</h1>
          </div>
        </div>
      </ParallaxBanner>
    </div>
    )
}

export default About;