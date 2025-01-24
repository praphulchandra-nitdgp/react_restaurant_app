import React from 'react';
import { Carousel } from 'react-bootstrap';


const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg"
          alt="Food img"
        />
        <Carousel.Caption>
          <h3 className='animation-text'>Savor the flavor</h3>
          <p className='animation-text'>Savor chef-crafted dishes made with fresh, local ingredients.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg"
          alt="food img"
        />
        <Carousel.Caption>
          <h3 className='animation-text'>A Culinary Journey</h3>
          <p className='animation-text'>Savor dishes crafted with passion and the finest ingredients.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.indianexpress.com/2023/12/food.jpg"
          alt="food img"
        />
        <Carousel.Caption>
          <h3 className='animation-text'>Tastes Redefined!</h3>
          <p className='animation-text'>Enjoy exceptional flavors from global and local cuisines.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
