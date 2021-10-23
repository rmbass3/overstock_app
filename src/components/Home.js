import React from "react";
import {Button} from 'react-bootstrap';

function Home(props) {
  return (
    <div className="home" id="home">
      <div className="container title-container">
        <h2 className="title-intro">FIND THE PERFECT</h2>
        <h2 className="title-intro">FLOORING WITH</h2>
        <h1 className="title-overstock">OVERSTOCK</h1>
        <h3 className="title-end">DISCOUNT FLOORING</h3>
        <hr className="title-hr"/>
        <Button size="lg" className="title-button btn-secondary">
          Get a quote today
        </Button>
      </div>
    </div>
  )
}

export default Home;