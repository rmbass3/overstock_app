import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxBanner } from "react-scroll-parallax";
import bgMain2 from '../imgs/bg-main-dark.jpg'

function Gallery (props) {
  return (
    <div id="gallery">
        {/* <div className="gradient-trans trans-bottom" />
        <ParallaxBanner
          className="lvf-banner"
          layers={[
            {
              image: bgMain2,
              amount: 0.5,
            },
          ]}
        >
          <div className="container lvf-title-container">
            <ScrollAnimation animateIn="fadeIn" duration={2}>
              <h2 className="lvf-title-intro">Why</h2>
              <h1 className="lvf-title-lvp">Luxury Vinyl Plank</h1>
              <h2 className="lvf-title-intro">Flooring?</h2>
            </ScrollAnimation>
          </div>
        </ParallaxBanner>
        <div className="gradient-trans trans-top" /> */}
    </div>
  )
}

export default Gallery;