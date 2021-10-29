import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import ScrollAnimation from "react-animate-on-scroll";
import bgAbout from '../imgs/bg-main-dark.jpg';
import aboutimg1 from '../imgs/about-img1.JPG'

function About(props){
  return (
    <div id="about">
      <ParallaxBanner
        className="banner-title"
        layers={[
          {
            image: bgAbout,
            amount: 0.5,
          },
        ]}
      >
        <div className="container title-container">
          <h1 className="about-title">HIGH POINT'S MOST TRUSTED</h1>
          <h1 className="about-title">FLOORING COMPANY</h1>
        </div>
      </ParallaxBanner>

      <div className="about-container">
        <div className="row row-cols-1 row-cols-md-2 gx-0 mb-0 mb-md-4 mt-0 mt-md-4">
          <div className="col order-1 order-md-2">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
              <div className="col about-text-col">
                <div className="about-text-container">
                  <h4 className="about-text-title">Selection</h4>
                  <p className="about-text">
                    With OVER 200,000 square feet of LVP in stock carrying 15-year residential or lifetime commercial warranties the quality and selection speaks for itself.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col order-2 order-md-1">
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <div className="col about-img-col">
                <ParallaxBanner
                  className="parallax-about-right"
                  layers={[
                    {
                      image: aboutimg1,
                      amount: 0.5
                    }
                  ]}
                  style={{
                    height: '400px'
                  }}
                >
                </ParallaxBanner> 
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
    )
}

export default About;