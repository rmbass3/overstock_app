import React from "react";
import {Button} from 'react-bootstrap';
import { ParallaxBanner } from "react-scroll-parallax";
import bgMain from '../imgs/bg-main-dark-2.jpg'
import ScrollAnimation from "react-animate-on-scroll";
import '../../node_modules/@fortawesome/fontawesome-free/js/all'

import '../../node_modules/@fortawesome/fontawesome-free/js/solid.js'


function Home(props) {

  return (
    <div id="home">
      <ParallaxBanner
        className="home-banner"
        layers={[
          {
            image: bgMain,
            amount: 0.5,
          },
        ]}
        disabled={props.mobile}
      >
        <div className="home">
          <div className="container home-title-container">
            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
              <h2 className="title-intro">FIND THE PERFECT</h2>
              <h2 className="title-intro">FLOORING WITH</h2>
              <div>
                <h1 className="title-overstock">OVERSTOCK</h1>
                <h3 className="title-end mt-2">DISCOUNT FLOORING</h3>
                <a href="#contact">
                  <Button 
                    size="lg" 
                    className="title-button btn-secondary mt-3" 
                  >
                    Get a quote today
                  </Button>
                </a>
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation 
            animateIn="fadeInDown"
            duration={2} 
            delay={2000} 
            animateOnce={true}
          >
            <a href="#about">
              <div className="angle-container">
                <i className="fas fa-angle-down"></i>
              </div>
            </a>
          </ScrollAnimation>
        </div>
      </ParallaxBanner>
      <div id="about" className="gradient-trans trans-top" />
    </div>
  )
}

export default Home;