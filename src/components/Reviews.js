import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxBanner } from "react-scroll-parallax";
import Gallery from "react-grid-gallery";
import { Swiper } from '../../node_modules/swiper/react/swiper.js'
import { SwiperSlide } from '../../node_modules/swiper/react/swiper-slide.js'
import { Pagination, EffectCoverflow } from 'swiper';
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css';
import '../../node_modules/swiper/modules/pagination/pagination.min.css'
import bgMain4 from '../imgs/bg-main-4.jpg'

function Reviews (props) {
  return (
    <div id="reviews">
      <div className="gradient-trans trans-bottom" />
      <ParallaxBanner
        className="lvf-banner"
        layers={[
          {
            image: bgMain4,
            amount: 0.5,
          },
        ]}
      >
        <div className="container lvf-title-container">
          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <h1 className="lvf-title-lvp">REVIEWS</h1>
            <h2 className="lvf-title-intro">See what our customers have to say!</h2>
          </ScrollAnimation>
        </div>
      </ParallaxBanner>
      <div className="gradient-trans trans-top" />
    </div>
  )
}

export default Reviews;