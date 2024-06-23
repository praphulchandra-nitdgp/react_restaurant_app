// src/components/Carousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg"
          alt="Food image"
        />
        <Carousel.Caption>
          <h3 className='animation-text'>First Slide</h3>
          <p className='animation-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='animation-text'>Second Slide</h3>
          <p className='animation-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.indianexpress.com/2023/12/food.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='animation-text'>Third Slide</h3>
          <p className='animation-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
