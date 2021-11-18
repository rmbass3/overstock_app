import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxBanner } from "react-scroll-parallax";
// import { Card } from "react-bootstrap";
// import { Swiper } from '../../node_modules/swiper/react/swiper.js'
// import { SwiperSlide } from '../../node_modules/swiper/react/swiper-slide.js'
// import { EffectCoverflow } from "swiper";
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css';
import '../../node_modules/swiper/modules/pagination/pagination.min.css'
import bgMain5 from '../imgs/bg-main-5.jpg'

function Contact(props){
  return (
    <div id="contact">
      <div className="gradient-trans trans-bottom" />
      <ParallaxBanner
        className="lvf-banner"
        layers={[
          {
            image: bgMain5,
            amount: 0.5,
          },
        ]}
      >
        <div className="container lvf-title-container">
          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <h1 className="lvf-title-lvp">CONTACT US</h1>
            <h2 className="lvf-title-intro">Let's get in touch</h2>
          </ScrollAnimation>
        </div>
      </ParallaxBanner>
      <div className="gradient-trans trans-top" />
    </div>
  )
}

export default Contact