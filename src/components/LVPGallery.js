import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxBanner } from "react-scroll-parallax";
import Gallery from "react-grid-gallery";
import bgMain3 from '../imgs/bg-main-3.jpg'
import galleryimg1 from '../imgs/gallery-img-1.jpeg'
import galleryimg2 from '../imgs/gallery-img-2.JPG';
import galleryimg3 from '../imgs/gallery-img-3.JPG'
import galleryimg4 from '../imgs/gallery-img-4.JPG'
import galleryimg5 from '../imgs/gallery-img-5.jpeg'
import galleryimg6 from '../imgs/gallery-img-6.JPG'
import galleryimg7 from '../imgs/gallery-img-7.JPG'
import galleryimg8 from '../imgs/gallery-img-8.JPG'
import galleryimg9 from '../imgs/gallery-img-9.JPG'
import galleryimg10 from '../imgs/gallery-img-10.JPG'
import galleryimg11 from '../imgs/gallery-img-11.JPG'
import galleryimg12 from '../imgs/gallery-img-12.JPG'

function LVPGallery (props) {

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
        >
          <div className="container lvf-title-container">
            <ScrollAnimation animateIn="fadeIn" duration={2}>
              <h2 className="lvf-title-intro">Find the</h2>
              <h1 className="lvf-title-lvp">PERFECT FLOORING</h1>
              <h2 className="lvf-title-intro">for your home</h2>
            </ScrollAnimation>
          </div>
        </ParallaxBanner>
        <div className="gradient-trans trans-top" />
        <div className="gallery-container">
          <Gallery 
          images={IMAGES} 
          enableImageSelection={false}
          rowHeight={400}
          backdropClosesModal={true}
          thumbnailStyle={() => {
            // <ScrollAnimation animateIn="fadeIn" />
          }}
          />
        </div>
    </div>
  )
}

export default LVPGallery;