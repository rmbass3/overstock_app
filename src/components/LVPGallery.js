import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ParallaxBanner } from "react-scroll-parallax";
import Gallery from "react-grid-gallery";
import bgMain3 from '../imgs/bg-main-3.jpg'
import galleryimg1 from '../imgs/gallery-img-1.JPG'
import galleryimg2 from '../imgs/gallery-img-2.JPG';
import galleryimg3 from '../imgs/gallery-img-3.JPG'
import galleryimg4 from '../imgs/gallery-img-4.JPG'
import galleryimg5 from '../imgs/gallery-img-5.JPG'
import galleryimg6 from '../imgs/gallery-img-6.JPG'
import galleryimg7 from '../imgs/gallery-img-7.JPG'
import galleryimg8 from '../imgs/gallery-img-8.JPG'
import galleryimg9 from '../imgs/gallery-img-9.JPG'
import galleryimg10 from '../imgs/gallery-img-10.JPG'
import galleryimg11 from '../imgs/gallery-img-11.JPG'
import galleryimg12 from '../imgs/gallery-img-12.JPG'

var galleryArr = [galleryimg1, galleryimg2, galleryimg3, galleryimg4, galleryimg5, galleryimg6, galleryimg7, galleryimg8, galleryimg9, galleryimg10, galleryimg11, galleryimg12];

function randomizeGalleryOrder() {
  for (var i = galleryArr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = galleryArr[i];
    galleryArr[i] = galleryArr[j];
    galleryArr[j] = temp;
  }
  // galleryArr.forEach(e => console.log(e));
}

function LVPGallery (props) {

  randomizeGalleryOrder();
  console.log(galleryArr[0])
  const IMAGES =
  [
    {
      src: `${galleryArr[0]}`,
      thumbnail: `${galleryArr[0]}`,
      thumbnailWidth: 300,
      thumbnailHeight: 400,
    },
    {
      src: `${galleryArr[1]}`,
      thumbnail: `${galleryArr[1]}`,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: `${galleryArr[2]}`,
      thumbnail: `${galleryArr[2]}`,
      thumbnailWidth: 300,
      thumbnailHeight: 400,
    },
    {
      src: `${galleryArr[3]}`,
      thumbnail: `${galleryArr[3]}`,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: `${galleryArr[4]}`,
      thumbnail: `${galleryArr[4]}`,
      thumbnailWidth: 300,
      thumbnailHeight: 400,
    },
    {
      src: `${galleryArr[5]}`,
      thumbnail: `${galleryArr[5]}`,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: `${galleryArr[6]}`,
      thumbnail: `${galleryArr[6]}`,
      thumbnailWidth: 300,
      thumbnailHeight: 400,
    },    {
      src: `${galleryArr[7]}`,
      thumbnail: `${galleryArr[7]}`,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },    {
      src: `${galleryArr[8]}`,
      thumbnail: `${galleryArr[8]}`,
      thumbnailWidth: 300,
      thumbnailHeight: 400,
    },    {
      src: `${galleryArr[9]}`,
      thumbnail: `${galleryArr[9]}`,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },    {
      src: `${galleryArr[10]}`,
      thumbnail: `${galleryArr[10]}`,
      thumbnailWidth: 300,
      thumbnailHeight: 400,
    },    {
      src: `${galleryArr[11]}`,
      thumbnail: `${galleryArr[11]}`,
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
  )
}

export default LVPGallery;