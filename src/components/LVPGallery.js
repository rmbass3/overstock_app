import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxBanner } from "react-scroll-parallax";
import Gallery from "react-grid-gallery";
import { Swiper } from '../../node_modules/swiper/react/swiper.js'
import { SwiperSlide } from '../../node_modules/swiper/react/swiper-slide.js'
import { Pagination, EffectCards, Autoplay } from 'swiper';
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css';
import '../../node_modules/swiper/modules/pagination/pagination.min.css'
import bgMain3 from '../imgs/bg/bg-main-4.jpg'
import galleryimg1 from '../imgs/gallery/gallery-img-1.jpg'
import galleryimg2 from '../imgs/gallery/gallery-img-2.jpg';
import galleryimg3 from '../imgs/gallery/gallery-img-3.jpg'
import galleryimg4 from '../imgs/gallery/gallery-img-4.jpg'
import galleryimg5 from '../imgs/gallery/gallery-img-5.jpg'
import galleryimg6 from '../imgs/gallery/gallery-img-6.jpg'
import galleryimg7 from '../imgs/gallery/gallery-img-7.jpg'
import galleryimg8 from '../imgs/gallery/gallery-img-8.jpg'
import galleryimg9 from '../imgs/gallery/gallery-img-9.jpg'
import galleryimg10 from '../imgs/gallery/gallery-img-10.jpg'
import galleryimg11 from '../imgs/gallery/gallery-img-11.jpg'
import galleryimg12 from '../imgs/gallery/gallery-img-12.jpg'
import slideimg1 from '../imgs/galleryslide/slide-flooring-img-1.jpg'
import slideimg2 from '../imgs/galleryslide/slide-flooring-img-2.jpg'
import slideimg3 from '../imgs/galleryslide/slide-flooring-img-3.jpg'
import slideimg4 from '../imgs/galleryslide/slide-flooring-img-4.jpg'
import slideimg5 from '../imgs/galleryslide/slide-flooring-img-5.jpg'

function LVPGallery (props) {

  // randomizeGalleryOrder();
  const IMAGES =
  [
    {
      src: galleryimg1,
      thumbnail: galleryimg1,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: galleryimg2,
      thumbnail: galleryimg2,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: galleryimg3,
      thumbnail: galleryimg3,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: galleryimg4,
      thumbnail: galleryimg4,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: galleryimg5,
      thumbnail: galleryimg5,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: galleryimg6,
      thumbnail: galleryimg6,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: galleryimg7,
      thumbnail: galleryimg7,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },    {
      src: galleryimg8,
      thumbnail: galleryimg8,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },    {
      src: galleryimg9,
      thumbnail: galleryimg9,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },    {
      src: galleryimg10,
      thumbnail: galleryimg10,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },    {
      src: galleryimg11,
      thumbnail: galleryimg11,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },    {
      src: galleryimg12,
      thumbnail: galleryimg12,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    }
  ]

  return (
    <div id="gallery">
        <div className="gradient-trans trans-bottom" />
        <ParallaxBanner
          className="lvf-banner"
          layers={[
            {
              image: bgMain3,
              amount: 0.5,
            },
          ]}
          disabled={props.mobile}
        >
          <div className="container lvf-title-container">
            <ScrollAnimation animateIn="fadeIn" duration={2}>
              <h1 className="lvf-title-lvp">FLOORING GALLERY</h1>
              <h2 className="lvf-title-intro">Take a look at our flooring!</h2>
            </ScrollAnimation>
          </div>
        </ParallaxBanner>
        <div className="gradient-trans trans-top" />
        <ScrollAnimation className="flooring-swiper-animation" animateIn="fadeIn" duration={2} animateOnce={true}>
          <div className="flooring-swiper-container">
            <Swiper 
              modules={[Pagination, Autoplay, EffectCards]}
              effect={'cards'} 
              grabCursor={true} 
              centeredSlides={true} 
              slidesPerView={'auto'} 
              className="flooring-swiper"
              loop={true}
              pagination={{ 
                clickable: true,
                dynamicBullets: true
              }}
              loopFillGroupWithBlank={true}
              initialSlide={2}
              observer={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              speed={600}
              // onResize={() => {
              //   const swiper = document.querySelector('.flooring-swiper').swiper;
              //   // if (window.innerWidth > 767) {
                  
              //   // }
              //   switchSlideType(props.mobile)
              //   console.log(switchSlideType(props.mobile))
              //   swiper.update()
              // }}
            >
              <SwiperSlide><img src={slideimg1} alt=""/></SwiperSlide>
              <SwiperSlide><img src={slideimg2} alt=""/></SwiperSlide>
              <SwiperSlide><img src={slideimg3} alt=""/></SwiperSlide>
              <SwiperSlide><img src={slideimg4} alt=""/></SwiperSlide>
              <SwiperSlide><img src={slideimg5} alt=""/></SwiperSlide>
            </Swiper>
          </div>
        </ScrollAnimation>
        <div className="gallery">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div className="gallery-container">
              <Gallery 
                images={IMAGES} 
                enableImageSelection={false}
                rowHeight={400}
                backdropClosesModal={true}
              />
            </div>
          </ScrollAnimation>
        </div>
    </div>
  )
}

export default LVPGallery;