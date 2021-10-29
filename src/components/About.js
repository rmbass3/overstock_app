import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import ScrollAnimation from "react-animate-on-scroll";
import bgAbout from '../imgs/bg-main-dark.jpg';

function About(props){
    return (
        <div id="about">
            <ScrollAnimation
            className="about-banner"
            layers={[
                {
                  image: bgAbout,
                  amount: 0.5,
                },
            ]}
            >

            </ScrollAnimation>
        </div>
    )
}

export default About;