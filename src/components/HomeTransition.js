import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import trans1img2 from '../imgs/trans1-img2.jpg'
import trans1img3 from '../imgs/trans1-img3.jpg'
import trans1img4 from '../imgs/trans1-img4.jpg'
import trans1img5 from '../imgs/trans1-img5.jpg'
import trans1img6 from '../imgs/trans1-img6.jpg'
import ScrollAnimation from "react-animate-on-scroll";
import bgMain2 from '../imgs/bg-main-dark.jpg'

function HomeTransition(props) {
  return (
    <div className="home-trans1" id="lvp">
      <div className="gradient-trans trans-bottom" />
      <ParallaxBanner
        className="lvf-banner"
        layers={[
          {
            image: bgMain2,
            amount: 0.5,
          },
        ]}
        disabled={props.mobile}
      >
        <div className="container lvf-title-container">
          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <h2 className="lvf-title-intro">Why</h2>
            <h1 className="lvf-title-lvp">Luxury Vinyl Plank</h1>
            <h2 className="lvf-title-intro">Flooring?</h2>
          </ScrollAnimation>
        </div>
      </ParallaxBanner>
      <div className="gradient-trans trans-top" />
      <div className="trans1-container">
        <div className="row row-cols-1 row-cols-md-2 gx-0 mb-0 mt-3 mt-sm-4 mt-md-5">
          <div className="col order-2 order-md-1">
            <ScrollAnimation animateIn="fadeIn"  duration={0.5}>
              <div className="col trans1-img-col">
              <ParallaxBanner
                  className="parallax-trans1-right"
                  layers={[
                    {
                      image: trans1img2,
                      amount: 0.3
                    }
                  ]}
                  disabled={props.mobile}
                >
                  <div className="triangle-right-top d-none d-md-block"/>
                </ParallaxBanner> 
              </div>
            </ScrollAnimation>
          </div>
          <div className="col order-1 order-md-2">
            <ScrollAnimation animateIn="fadeIn"  duration={0.5}>
              <div className="col trans1-text-col">
                <div className="trans1-box-right p-3 p-md-0">
                  <div className="triangle-left-bottom d-none d-md-block"/>
                  <div className="container trans1-text-container">
                    <h4 className="trans1-title-text">
                      Durability
                    </h4>
                    <p className="trans1-text">
                      Scratches from animal claws or active children running through the house have met their match. Unlike real wood floors, LVP is very durable with MIL wears from 12-22. Even with the heaviest traffic, it’s scratch resistant.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        {/* Row Set 2 */}
        <div className="row row-cols-1 row-cols-md-2 gx-0 mb-0  ">
          <div className="col order-1 order-md-1">
            <ScrollAnimation animateIn="fadeIn"  duration={0.5}>
              <div className="col trans1-text-col">
                <div className="trans1-box-left p-3 p-md-0">
                    <div className="container trans1-text-container ps-0 ps-md-3">
                      <h4 className="trans1-title-text">
                        Price
                      </h4>
                      <p className="trans1-text">
                        Luxury vinyl plank flooring is a cost-effective way to update your home without breaking the bank. Unlike real wood or even LVP at most stores, you can find quality LVP at Overstock Discount Flooring for less than half of typical “big box” stores.
                      </p>
                    </div>
                    <div className="triangle-right-bottom d-none d-md-block"/>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col order-2 order-md-2">
            <ScrollAnimation animateIn="fadeIn"  duration={0.5}>
              <div className="col trans1-img-col">
                <ParallaxBanner
                  className="parallax-trans1-right"
                  layers={[
                    {
                      image: trans1img3,
                      amount: 0.3
                    }
                  ]}

                  disabled={props.mobile}
                >
                <div className="triangle-left-top d-none d-md-block"/>
                </ParallaxBanner> 
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 gx-0 mb-0  ">
          <div className="col order-2 order-md-1">
            <ScrollAnimation animateIn="fadeIn"  duration={0.5}>
              <div className="col trans1-img-col">
              <ParallaxBanner
                  className="parallax-trans1-right"
                  layers={[
                    {
                      image: trans1img4,
                      amount: 0.3
                    }
                  ]}

                  disabled={props.mobile}
                >
                  <div className="triangle-right-top d-none d-md-block"/>
                </ParallaxBanner> 
              </div>
            </ScrollAnimation>
          </div>
          <div className="col order-1 order-md-2">
            <ScrollAnimation animateIn="fadeIn"  duration={0.5}>
              <div className="col trans1-text-col">
                <div className="trans1-box-right p-3 p-md-0">
                  <div className="triangle-left-bottom d-none d-md-block"/>
                  <div className="container trans1-text-container">
                    <h4 className="trans1-title-text">
                      Installation
                    </h4>
                    <p className="trans1-text">
                      You won’t need to be a carpenter to install your new LVP floors. Some customers choose the “do-it-yourself” method or we can provide you with a recommend licensed installation team. 
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        {/* Row Set 3 */}
        <div className="row row-cols-1 row-cols-md-2 gx-0 mb-0  ">
          <div className="col order-1 order-md-1">
            <ScrollAnimation animateIn="fadeIn"  duration={0.5}>
              <div className="col trans1-text-col">
                <div className="trans1-box-left p-3 p-md-0">
                  <div className="container trans1-text-container ps-0 ps-md-3">
                    <h4 className="trans1-title-text">
                      Look & Feel
                    </h4>
                    <p className="trans1-text">
                      LVP is soft underfoot. As you walk, the flooring absorbs pressure. This flooring stays at room temperature to keep you comfortable, even in the winter.
                    </p>
                  </div>
                  <div className="triangle-right-bottom d-none d-md-block"/>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col order-2 order-md-2">
            <ScrollAnimation animateIn="fadeIn"  duration={0.5}>
              <div className="col trans1-img-col">
                <ParallaxBanner
                  className="parallax-trans1-right"
                  layers={[
                    {
                      image: trans1img5,
                      amount: 0.3
                    }
                  ]}

                  disabled={props.mobile}
                >
                <div className="triangle-left-top d-none d-md-block"/>
                </ParallaxBanner> 
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 gx-0 mb-0  ">
          <div className="col order-2 order-md-1">
            <ScrollAnimation animateIn="fadeIn"  duration={0.5}>
              <div className="col trans1-img-col">
              <ParallaxBanner
                  className="parallax-trans1-right"
                  layers={[
                    {
                      image: trans1img6,
                      amount: 0.3
                    }
                  ]}
                  disabled={props.mobile}
                >
                  <div className="triangle-right-top d-none d-md-block"/>
                </ParallaxBanner> 
              </div>
            </ScrollAnimation>
          </div>
          <div className="col order-1 order-md-2">
            <ScrollAnimation animateIn="fadeIn"  duration={0.5}>
              <div className="col trans1-text-col">
                <div className="trans1-box-right p-3 p-md-0">
                  <div className="triangle-left-bottom d-none d-md-block"/>
                  <div className="container trans1-text-container">
                    <h4 className="trans1-title-text">
                      Low-Maintenance
                    </h4>
                    <p className="trans1-text">
                      When it comes to maintenance, it doesn’t get any easier than LVP. These floors are 100% waterproof and ensure no water leakage. No wax? No polish? No problem. Today’s LVP doesn’t need added chemicals to hold its shine.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTransition;