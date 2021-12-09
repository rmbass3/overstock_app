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
import '../../node_modules/@fortawesome/fontawesome-free/js/all'
import { useController } from "react-scroll-parallax";
import { useLayoutEffect } from "react";

const ParallaxCache = () => {
  const { parallaxController } = useController();

  useLayoutEffect(() => {
      const handler = () => parallaxController.update();
      window.addEventListener('load', handler);
      return () => window.removeEventListener('load', handler);
  }, [parallaxController]);

  return null;
};

function Contact(props){

  return (
    <div id="contact">
      <div className="gradient-trans trans-bottom" />
      <ParallaxCache />
      <ParallaxBanner
        className="lvf-banner"
        layers={[
          {
            image: bgMain5,
            amount: 0.5,
          },
        ]}
        disabled={props.mobile}
      >
        <div className="container lvf-title-container">
          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <h1 className="lvf-title-lvp">CONTACT US</h1>
            <h2 className="lvf-title-intro">Let's get in touch</h2>
          </ScrollAnimation>
        </div>
      </ParallaxBanner>
      <div className="gradient-trans trans-top" />
      <ScrollAnimation className="contact-containter-animation" animateIn="fadeIn" duration={2}>
        <div className="contact-container">
          <div className="contact-map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.6589168693636!2d-80.03837414863509!3d35.93084792375043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88530b81c8f99bed%3A0x2d169abe421fbfec!2sOverstock%20Discount%20Flooring!5e0!3m2!1sen!2sus!4v1637281756852!5m2!1sen!2sus" title="contact-map" className="contact-map"/>
          </div>
          <div className="contact-info-container">
            <div className="contact-left">
              <h3 className="contact-info-title">CONTACT</h3>
              <h4 className="contact-info">
                <i className="fas fa-phone-alt contact-icons-left"></i>
                <a href="tel:843-318-9675">(843) 318-9675</a>
              </h4>
              <h4 className="contact-info">
                <i className="fas fa-map-marker-alt contact-icons-left"></i>
                <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Overstock+Discount+Flooring/@35.9308479,-80.0383688,17z/data=!3m1!4b1!4m5!3m4!1s0x88530b81c8f99bed:0x2d169abe421fbfec!8m2!3d35.9308436!4d-80.0361801?hl=en">
                  1205 Elgin Ave <br/>
                  High Point, NC 27262
                </a>
              </h4>
              {/* <h4 className="contact-info">
                <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Overstock+Discount+Flooring/@35.9308479,-80.0383688,17z/data=!3m1!4b1!4m5!3m4!1s0x88530b81c8f99bed:0x2d169abe421fbfec!8m2!3d35.9308436!4d-80.0361801?hl=en">High Point, NC 27262</a>
              </h4> */}
            </div>
            <div className="contact-middle">
              <h3 className="contact-info-title">SOCIAL</h3>
              <div className="contact-icons-container">
                <a href="https://www.yelp.com/biz/overstock-discount-flooring-high-point" target="_blank" className="yelp-link" rel="noreferrer">
                  <i className="fab fa-yelp contact-icons-middle"/>
                </a>
                <a href="https://www.instagram.com/overstockdiscountflooringnc/" target="_blank" className="insta-link" rel="noreferrer">
                  <i className="fab fa-instagram contact-icons-middle"/>
                </a>
                <a href="https://www.facebook.com/Overstock-Discount-Flooring-101773294750190/" target="_blank" className="fb-link" rel="noreferrer">
                  <i className="fab fa-facebook-square contact-icons-middle"/>
                </a>
              </div>
            </div>
            <div className="contact-right">
              <h3 className="contact-hours-title">HOURS</h3>
              <h4 className="contact-hours">M-F: 8AM-5PM</h4>
              <h4 className="contact-hours">Sat: 9AM-12PM</h4>
              <h4 className="contact-hours">Sun: Closed</h4>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Contact