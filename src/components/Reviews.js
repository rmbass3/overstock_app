import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxBanner } from "react-scroll-parallax";
import { Card } from "react-bootstrap";
import { Swiper } from '../../node_modules/swiper/react/swiper.js'
import { SwiperSlide } from '../../node_modules/swiper/react/swiper-slide.js'
import { EffectCoverflow } from "swiper";
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css';
import '../../node_modules/swiper/modules/pagination/pagination.min.css'
import bgMain4 from '../imgs/bg-main-4.jpg'
import reviewer1 from '../imgs/reviewer1-header.jpg'
import reviewer2 from '../imgs/reviewer2-header.jpg'
import reviewer3 from '../imgs/reviewer3-header.jpg'
import reviewer4 from '../imgs/reviewer4-header.jpg'
import reviewer5 from '../imgs/reviewer5-header.jpg'
import reviewimg1 from '../imgs/reviews-img-1.jpg'
import reviewimg2 from '../imgs/reviews-img-2.jpg'
import stars from '../imgs/stars.png'


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
      <ScrollAnimation animateIn="fadeIn">
        <div className="reviews-swiper-container">
          <Swiper 
            modules={[EffectCoverflow]}
            effect={'coverflow'} 
            grabCursor={true} 
            centeredSlides={true} 
            slidesPerView={3} 
            coverflowEffect={{
              "rotate": 10,
              "stretch": 0,
              "depth": 50,
              "modifier": 2,
              "slideShadows": true
            }}
            spaceBetween={30}
            loop={true}
            loopFillGroupWithBlank={true}
            className="reviews-swiper"
          >
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer1} />
                <Card.Body>
                  <Card.Title>Ryan Truong</Card.Title>
                  <Card.Text>
                    "Best place to find good flooring products. The price was great. There were so many options as well. Super nice people!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer2} />
                <Card.Body>
                  <Card.Title>Beverly Dale</Card.Title>
                  <Card.Text>
                    "Excellent customer service! Everything from the sales experience to the installation was flawless. Highly recommend!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer3} />
                <Card.Body>
                  <Card.Title>Shannon Skeen</Card.Title>
                  <Card.Text>
                    "Steve is a great guy to work with. His prices can't be beat. He also has a great variety of flooring to choose from."
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer4} />
                <Card.Body>
                  <Card.Title>Anh Truong</Card.Title>
                  <Card.Text>
                    "Got the best service today. Very good quality products as such as a good deal!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer5} />
                <Card.Body>
                  <Card.Title>Kent Lovern</Card.Title>
                  <Card.Text>
                    "Great products and service. Easy to work with."
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </ScrollAnimation>
      <div className="review-cards">
        <ScrollAnimation animateIn="fadeInRight">
          <div className="review-card">
            <div className="review-card-text">
              <div className="review-card-title">
                Sean Kilkenny
              </div>
              <div className="review-card-body">
                "By far the best place I've ever bought flooring from. Between the quality of the customer service and the outstanding prices, I highly recommend this business for your next Luxury Vinyl Plank purchase."
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
                
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
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

              >
                
              </ParallaxBanner>
            </div>
            <div className="review-card-text">
              <div className="review-card-title">
                Marc Stephanie
              </div>
              <div className="review-card-body">
                "Steve is awesome!!! Great floors and the price was better then any other!! Great customer service and recommend awesome people that installed at a great price! Will not go anywhere else! They are the best around!!"
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Reviews;