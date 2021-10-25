import React from "react";
import img1 from "../imgs/trans1-img-right.png"

function HomeTransition(props) {
  return (
    <div className="home-trans1">
      <div className="trans1-container">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col trans1-col">
            <div className="trans1-box-left">
              <div className="container trans1-title-container">
                <h3 className="trans1-title">
                  Why Luxury Vinyl <br/>
                  Plank (LVP) <br/>
                  Flooring?
                </h3>
              </div>
              <div className="triangle-left-bottom"/>
            </div>
          </div>
          <div className="col">
            <div className="trans1-img-right-container">
              <div className="triangle-right-top"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTransition;