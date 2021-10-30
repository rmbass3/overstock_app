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
        <ScrollAnimation animateIn="fadeIn">
          <div className="row gx-3 gx-sm-4 gx-md-5 my-3 my-sm-4 my-md-5">
            <div className="col-7 order-2">
              <div className="about-text-col">
                <div className="about-text-container">
                  <h4 className="about-text-title">SELECTION</h4>
                  <p className="about-text">
                    With OVER 200,000 square feet of LVP in stock carrying 15-year residential or lifetime commercial warranties the quality and selection speaks for itself.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-5 order-1">
              <div className="about-img-col">
                <ParallaxBanner
                  className="parallax-about-right"
                  layers={[
                    {
                      image: aboutimg1,
                      amount: 0.0
                    }
                  ]}
                >
                </ParallaxBanner> 
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default About;