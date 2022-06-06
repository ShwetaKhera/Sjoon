import React from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';

import background_5_resized from '../img/home/background_5_resized.jpg';
import background_6_resized from '../img/home/background_6_resized.jpg';
import background_7_resized from '../img/home/background_7_resized.jpg';
import NavComponent from './components/nav.js';
import { carousel, carouselHeader, carouselItem } from '../styles/style';

class Home extends React.Component {
  render() {
    return (
      <>
        <NavComponent background="transparent" />
        <Carousel fade controls={false} indicators={false} style={carousel}>
          <Carousel.Item style={carouselItem}>
            <img
              className="d-block w-100"
              src={background_5_resized}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item style={carouselItem}>
            <img
              className="d-block w-100"
              src={background_6_resized}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item style={carouselItem}>
            <img
              className="d-block w-100"
              src={background_7_resized}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <h2 style={carouselHeader}>
          The best free photos,
          <br />
          royalty free images available for download
        </h2>
      </>
    );
  }
}

export default Home;
