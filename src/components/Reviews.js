import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxBanner } from "react-scroll-parallax";
import { Card } from "react-bootstrap";
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper } from '../../node_modules/swiper/react/swiper.js'
import { SwiperSlide } from '../../node_modules/swiper/react/swiper-slide.js'
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css';
import '../../node_modules/swiper/modules/pagination/pagination.min.css'
import bgMain4 from '../imgs/bg/bg-main-3.jpg'
import reviewer1 from '../imgs/reviewers/reviewer1-header.jpg'
import reviewer2 from '../imgs/reviewers/reviewer2-header.jpg'
import reviewer3 from '../imgs/reviewers/reviewer3-header.jpg'
import reviewer4 from '../imgs/reviewers/reviewer4-header.jpg'
import reviewer5 from '../imgs/reviewers/reviewer5-header.jpg'
import reviewer6 from '../imgs/reviewers/reviewer6-header.jpg'
import reviewer7 from '../imgs/reviewers/reviewer7-header.jpg'
import reviewer8 from '../imgs/reviewers/reviewer8-header.jpg'
import reviewimg1 from '../imgs/reviews/reviews-img-1.jpg'
import reviewimg2 from '../imgs/reviews/reviews-img-2.jpg'
import stars from '../imgs/reviews/stars.png'


function Reviews (props) {
  
  const getSlideNum = (mobile) => {
    if (mobile) {
      return 1;
    }
    return 3;
  }

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
        disabled={props.mobile}
      >
        <div className="container lvf-title-container">
          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <h1 className="lvf-title-lvp">REVIEWS</h1>
            <h2 className="lvf-title-intro">See what our customers have to say!</h2>
          </ScrollAnimation>
        </div>
      </ParallaxBanner>
      <div className="gradient-trans trans-top" />
      <ScrollAnimation animateIn="fadeIn">
        <div className="reviews-swiper-container">
          <Swiper 
            // modules={[Pagination]}
            // pagination={true}
            grabCursor={true} 
            centeredSlides={true} 
            slidesPerView={getSlideNum(props.mobile)} 
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            className="reviews-swiper"
            initialSlide={2}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false
            }}

          >
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer6} />
                <Card.Body>
                  <Card.Title>Mike B.</Card.Title>
                  <div className="card-text-container">
                    <Card.Text>
                      "I am a licensed GC and real estate broker, and in my 50+ years I have seldom received better value and service from any vendor"
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer7} />
                <Card.Body>
                  <Card.Title>Chris L.</Card.Title>
                  <div className="card-text-container">
                    <Card.Text>
                      "The best company and customer service you can ask for. Steve, the owner, is the best and has great deals! Highly recommend!"
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer8} />
                <Card.Body>
                  <Card.Title>Sean K.</Card.Title>
                  <div className="card-text-container">
                    <Card.Text>
                      "By far the best place I've ever bought flooring from. ...I highly recommend this business for your next LVP purchase"
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer1} />
                <Card.Body>
                  <Card.Title>Ryan T.</Card.Title>
                  <div className="card-text-container">
                    <Card.Text>
                      "Best place to find good flooring products. The price was great. There were so many options as well. Super nice people!"
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer2} />
                <Card.Body>
                  <Card.Title>Beverly D.</Card.Title>
                  <div className="card-text-container">
                    <Card.Text>
                      "Excellent customer service! Everything from the sales experience to the installation was flawless. Highly recommend!"
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer3} />
                <Card.Body>
                  <Card.Title>Shannon S.</Card.Title>
                  <div className="card-text-container">
                    <Card.Text>
                      "Steve is a great guy to work with. His prices can't be beat. He also has a great variety of flooring to choose from."
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer4} />
                <Card.Body>
                  <Card.Title>Anh T.</Card.Title>
                  <div className="card-text-container">
                    <Card.Text>
                      "Got the best service today. Very good quality products as such as a good deal!"
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer5} />
                <Card.Body>
                  <Card.Title>Declan M.</Card.Title>
                  <div className="card-text-container">
                    <Card.Text>
                      "Great LVP flooring options from premium to value options. They've got a very helpful team that can set you up with exactly what you're looking for!"
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </ScrollAnimation>
      <div className="review-cards">
        <ScrollAnimation animateIn="fadeIn">
          <div className="review-card">
            <div className="review-card-text">
              <div className="review-card-title">
                Joe S.
              </div>
              <div className="review-card-body">
                "Steve is the man! Very professional and his prices are second to none! Give him a shot and save hundreds on your flooring jobs. I buy and sell houses and have bought more than 20k sq. ft. from Steve! Great quality flooring at wholesale prices!"
              </div>
            </div>
            <div className="review-card-img">
              <ParallaxBanner
                className="review-card-banner"
                layers={[
                  {
                    image: reviewimg1,
                    amount: 0.5,
                  },
                  {
                    image: stars,
                    amount: 0,
                  }
                ]}
                disabled={props.mobile}
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="review-card">
            <div className="review-card-img">
              <ParallaxBanner
                className="review-card-banner"
                layers={[
                  {
                    image: reviewimg2,
                    amount: 0.5,
                  },
                  {
                    image: stars,
                    amount: 0,
                  }
                ]}
                disabled={props.mobile}
              >
              </ParallaxBanner>
            </div>
            <div className="review-card-text">
              <div className="review-card-title">
                D.L. Hoffman H.
              </div>
              <div className="review-card-body">
                "Love the product and the people. Sales people and installers have been awesome to work with. I've used them for probably 10 houses in the last year or so and the experience has never been anything but top notch. We have 3 more flips lined up and they will be doing all the floors."
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Reviews;