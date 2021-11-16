import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxBanner } from "react-scroll-parallax";
import { Card } from "react-bootstrap";
import { Swiper } from '../../node_modules/swiper/react/swiper.js'
import { SwiperSlide } from '../../node_modules/swiper/react/swiper-slide.js'
import { Pagination } from 'swiper';
import { EffectCoverflow } from "swiper";
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css';
import '../../node_modules/swiper/modules/pagination/pagination.min.css'
import bgMain4 from '../imgs/bg-main-4.jpg'
import reviewer1 from '../imgs/reviewer1-header.png'

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
      <div className="reviews-swiper-container">
          <Swiper 
            modules={[Pagination, EffectCoverflow]}
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
            pagination={true}

          >
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer1} />
                <Card.Body>
                  <Card.Title>Ryan Truong</Card.Title>
                  <Card.Text>
                    Best place to find good flooring products. The price was great. There were so many options as well. Super nice people!
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer1} />
                <Card.Body>
                  <Card.Title>Ryan Truong</Card.Title>
                  <Card.Text>
                    Best place to find good flooring products. The price was great. There were so many options as well. Super nice people!
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer1} />
                <Card.Body>
                  <Card.Title>Ryan Truong</Card.Title>
                  <Card.Text>
                    Best place to find good flooring products. The price was great. There were so many options as well. Super nice people!
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer1} />
                <Card.Body>
                  <Card.Title>Ryan Truong</Card.Title>
                  <Card.Text>
                    Best place to find good flooring products. The price was great. There were so many options as well. Super nice people!
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img variant="top" src={reviewer1} />
                <Card.Body>
                  <Card.Title>Ryan Truong</Card.Title>
                  <Card.Text>
                    Best place to find good flooring products. The price was great. There were so many options as well. Super nice people!
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}

export default Reviews;