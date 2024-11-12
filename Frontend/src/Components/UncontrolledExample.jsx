import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../assets/music-events.jpg'
import photo2 from '../assets/car1.jpg'
import ExampleCarouselImage from './ExampleCarouselImage';

function UncontrolledExample() {
  const carouselStyle = {
    height: '40vh', // Set carousel height to 40% of viewport height
  };

  const itemStyle = {
    height: '100%', // Ensure each item takes full height of the carousel
  };

  return (
    <Carousel style={carouselStyle}>
      <Carousel.Item style={itemStyle}>
        <ExampleCarouselImage text={photo1} />
        <Carousel.Caption>
          <h3>Workshop
          </h3>
          <p>Workshop gave us the practical knowledge about things, Fast grab Your Seats</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={itemStyle}>
        <ExampleCarouselImage text={photo2} />
        <Carousel.Caption>
          <h3>Social Gathering</h3>
          <p>Social gathering increases knowledge of ourselves. This helps us socialize.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={itemStyle}>
        <ExampleCarouselImage text={photo1} />
        <Carousel.Caption>
          <h3>Music Festival
          </h3>
          <p>
          Music Brings people together, So when you are coming to this show.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
