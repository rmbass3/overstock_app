import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import ScrollAnimation from "react-animate-on-scroll";
import aboutimg1 from '../imgs/about-img1.JPG'
import aboutimg2 from '../imgs/about-img2.jpg'

function About(props){
  return (
    <div id="about">

      <div className="about-container">
        <div className="row gx-3 gx-sm-4 gx-md-5 my-3 my-sm-4my-md-5">
          <div className="col-7 order-2">
            <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight">
              <div className="about-text-col-right">
                <div className="about-text-container">
                  <h4 className="about-text-title">SELECTION</h4>
                  <p className="about-text">
                    With OVER 200,000 square feet of LVP in stock carrying 15-year residential or lifetime commercial warranties the quality and selection speaks for itself.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-5 order-1">
            <div className="about-img-col">
              <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft">
                <ParallaxBanner
                  className="parallax-about"
                  layers={[
                    {
                      image: aboutimg1,
                      amount: 0.0
                    }
                  ]}
                >
                </ParallaxBanner> 
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="row gx-3 gx-sm-4 gx-md-5 my-3 my-sm-4 my-md-5">
          <div className="col-7 order-1">
            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft">
              <div className="about-text-col-left">
                <div className="about-text-container">
                  <h4 className="about-text-title">PRICING</h4>
                  <p className="about-text">
                    Whether you’re in need of Luxury Vinyl Plank as a home investor, for a DIY, or you are a builder looking for a source for new home construction, we’re committed to making sure you receive the best prices around.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-5 order-2">
            <div className="about-img-col">
              <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight">
                <ParallaxBanner
                  className="parallax-about"
                  layers={[
                    {
                      image: aboutimg2,
                      amount: 0.0
                    }
                  ]}
                >
                </ParallaxBanner> 
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;