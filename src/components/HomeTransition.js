import React from "react";
import img1 from "../imgs/trans1-img-right.png"

function HomeTransition(props) {
  return (
    <div className="home-trans1">
      <div className="trans1-container">
        <div className="row row-cols-1 row-cols-md-2 gx-0">
          <div className="col trans1-text-col">
            <div className="trans1-box-left">
              <div className="container trans1-title-container">
                <h3 className="trans1-title">
                  Why Luxury Vinyl <br/>
                  Plank (LVP) <br/>
                  Flooring?
                </h3>
              </div>
              <div className="triangle-right-bottom"/>
            </div>
          </div>
          <div className="col trans1-img-col">
            <div className="trans1-img-right-container">
              <div className="triangle-left-top"/>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 gx-0">
          <div className="col trans1-img-col">
            <div className="trans1-img-left-container">
              <div className="triangle-right-top"/>
            </div>
          </div>
          <div className="col trans1-text-col">
            <div className="trans1-box-right">
              <div className="triangle-left-bottom"/>
              <div className="container trans1-text-container">
                <p className="trans1-text">
                  Scratches from animal claws or active children running through the house have met their match. Unlike real wood floors, LVP is very durable with MIL wears from 12-22, even with the heaviest traffic it’s scratch resistant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTransition;