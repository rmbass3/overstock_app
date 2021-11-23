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
import '../../node_modules/@fortawesome/fontawesome-free/js/brands.js'
import '../../node_modules/@fortawesome/fontawesome-free/js/solid.js'

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
      <div className="contact-container">
        <div className="contact-map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.6589168693636!2d-80.03837414863509!3d35.93084792375043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88530b81c8f99bed%3A0x2d169abe421fbfec!2sOverstock%20Discount%20Flooring!5e0!3m2!1sen!2sus!4v1637281756852!5m2!1sen!2sus" title="contact-map" className="contact-map"/>
        </div>
        <div className="contact-info-container">
          <div className="contact-left">
            <h3 className="contact-info-title">CONTACT</h3>
            <h4 className="contact-info">
              <i class="fas fa-phone-alt"></i>
              (843) 318-9675
            </h4>
            <h4 className="contact-info">
              <i class="fas fa-map-marker-alt"></i>
              1205 Elgin Ave
            </h4>
            <h4 className="contact-info">High Point, NC 27262</h4>
          </div>
          <div className="contact-middle">
            <h3 className="contact-info-title">SOCIAL</h3>
            <i class="fab fa-yelp"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook-square"></i>
          </div>
          <div className="contact-right">
            <h3 className="contact-hours-title">HOURS</h3>
            <h4 className="contact-hours">M-F: 8AM-5PM</h4>
            <h4 className="contact-hours">Sat: 9AM-12PM</h4>
            <h4 className="contact-hours">Sun: Closed</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact