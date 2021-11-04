import React from "react";
import {Button} from 'react-bootstrap';
import { ParallaxBanner } from "react-scroll-parallax";
import bgMain from '../imgs/bg-main-dark-2.jpg'
import ScrollAnimation from "react-animate-on-scroll";


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
      >
        <div className="home">
          <div className="container home-title-container">
            <ScrollAnimation animateIn="fadeIn" duration={2}>
              <h2 className="title-intro">FIND THE PERFECT</h2>
              <h2 className="title-intro">FLOORING WITH</h2>
              <div>
                <h1 className="title-overstock">OVERSTOCK</h1>
                <h3 className="title-end mt-2">DISCOUNT FLOORING</h3>
                <Button 
                  size="lg" 
                  className="title-button btn-secondary mt-3" 
                >
                  Get a quote today
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </ParallaxBanner>
      <div className="gradient-trans trans-top" />
    </div>
  )
}

export default Home;