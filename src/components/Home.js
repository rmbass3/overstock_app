import React from "react";
import {Button} from 'react-bootstrap';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeIn1: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },

  fadeIn2: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },

  fadeIn3: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

function Home(props) {
  return (
    <div className="home" id="home">
      <div className="container title-container">
        <StyleRoot className="text-center">
          <h2 className="title-intro" style={styles.fadeIn1}>FIND THE PERFECT</h2>
          <h2 className="title-intro" style={styles.fadeIn2}>FLOORING WITH</h2>
          <div style={styles.fadeIn3}>
            <h1 className="title-overstock">OVERSTOCK</h1>
            <h3 className="title-end mt-2">DISCOUNT FLOORING</h3>
            <Button 
              size="lg" 
              className="title-button btn-secondary mt-3" 
            >
              Get a quote today
            </Button>
          </div>
        </StyleRoot>
      </div>
    </div>
  )
}

export default Home;