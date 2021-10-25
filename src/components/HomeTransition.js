import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import trans1img1 from '../imgs/trans1-img-right.jpg'
import trans1img2 from '../imgs/trans1-img-left.jpg'
import ScrollAnimation from "react-animate-on-scroll";

function HomeTransition(props) {
  return (
    <div className="home-trans1">
      <div className="trans1-container">
        <div className="row row-cols-1 row-cols-md-2 gx-0">
          <div className="col order-1 order-md-1">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
              <div className="col trans1-text-col">
                <div className="trans1-box-left p-3 p-md-0">
                  <div className="container trans1-title-container">
                    <h3 className="trans1-title">
                      Why Luxury Vinyl <br/>
                      Plank (LVP) <br/>
                      Flooring?
                    </h3>
                  </div>
                  <div className="triangle-right-bottom d-none d-md-block"/>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col order-2 order-md-2">
            <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
              <div className="col trans1-img-col">
                <ParallaxBanner
                  className="parallax-trans1-right"
                  layers={[
                    {
                      image: trans1img1,
                      amount: 0.5
                    }
                  ]}
                  style={{
                    height: '314px'
                  }}
                >
                <div className="triangle-left-top d-none d-md-block"/>
                </ParallaxBanner> 
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 gx-0">
          <div className="col order-2 order-md-1">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
              <div className="col trans1-img-col">
              <ParallaxBanner
                  className="parallax-trans1-right"
                  layers={[
                    {
                      image: trans1img2,
                      amount: 0.5
                    }
                  ]}
                  style={{
                    height: '314px'
                  }}
                >
                  <div className="triangle-right-top d-none d-md-block"/>
                </ParallaxBanner> 
              </div>
            </ScrollAnimation>
          </div>
          <div className="col order-1 order-md-2">
            <ScrollAnimation animateIn="fadeInRight" animateOnce="true">
              <div className="col trans1-text-col">
                <div className="trans1-box-right p-3 p-md-0">
                  <div className="triangle-left-bottom d-none d-md-block"/>
                  <div className="container trans1-text-container">
                    <h4 className="trans1-title-text">
                      Durability
                    </h4>
                    <p className="trans1-text">
                      Scratches from animal claws or active children running through the house have met their match. Unlike real wood floors, LVP is very durable with MIL wears from 12-22. Even with the heaviest traffic it’s scratch resistant.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTransition;