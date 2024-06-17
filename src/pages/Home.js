
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCarousel from '../components/Carousel';
import "./Home.css";
import DailyData from '../Dailyspecial';
import MenuFloat from "../menuFloat.png";
import ContactFloat from "../contactFloat.png"

const Home = () => {
  const Navigate = useNavigate();

  const handleAbtButtonClick = () => {
    Navigate('/about'); 
  };
  const handleMenuButtonClick =() => {
    Navigate('/menu'); 
  };
  const handleContactButtonClick =() => {
    Navigate('/contact'); 
  };
  return (
    <>
      <section className='custom-carousel'>
        <CustomCarousel />
      </section>
      <section className='text-section'>
        <div className='text-container'>
          <p>
  Fork Frenzy is your ultimate dining companion, bringing the best restaurants in town right to your fingertips. Discover a wide variety of cuisines, read reviews from fellow food enthusiasts, and make reservations effortlessly. Whether you're craving a cozy dinner for two or planning a group outing, Fork Frenzy ensures an exceptional dining experience every time. Bon appétit!</p>
          <button onClick={handleAbtButtonClick} className='about-btn'>
            <span>Learn More</span>
          </button>
        </div>
      </section>
      <section className='floating-section'>
        <div className='menu-caller'>
          <div className='mc-content'>
            <h2 className='mc-header'>MENU</h2>
            {/* <p className='mc-description'>Welcome to Fork Frenzy, your ultimate culinary companion! We invite you to explore our diverse and delectable menu, curated to satisfy every palate. Fork Frenzy brings the best of local and international cuisine right to your fingertips. Enjoy an exceptional dining experience with us.</p> */}
            <p className='mc-description'>Everything we serve is house-made and prepared by a staff that cares. You could spend a lifetime sampling every flavor combination at Federalist Pig, and we hope you do.</p>
            <button onClick={handleMenuButtonClick} className='menu-btn'>Menu</button>
          </div>
          <div className='mc-image'>
            <img
            src={MenuFloat}
            alt="Food menu image"
            />
          </div>
        </div>
        <div className='contact-caller'>
          <div className='cc-image'>
            <img
            src={ContactFloat}
            alt="Food contact image"
            />
          </div>
          <div className='cc-content'>
            <h2 className='cc-header'>RESERVE</h2>
            {/* <p className='cc-description'>Welcome to Fork Frenzy, where culinary excellence meets convenience! We're thrilled to offer you a seamless dining experience like no other. Fork Frenzy ensures every moment is memorable</p> */}
            <p className='cc-description'>Reserve your table effortlessly, Indulge in an exceptional dining journey with us. We look forward to serving you with passion and flavour. Cheers to delicious adventures at Fork Frenzy!</p>
            <button onClick={handleContactButtonClick} className='contact-btn'>Reserve</button>
          </div>
        </div>
      </section>
      <section className='daily-specials'>
        <h1 className='ds-title'>Daily-specials</h1>
        <hr/>
        <div className='ds-container'>
          {DailyData.map(special=>{
            return(
              <div key={special.id} className='ds-item' >
                <h2 className='day'>{special.day}</h2>
                <hr/>
                <h3 className='heading'>{special.name}</h3>
                <p className='description'>{special.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      
    </>
  );
};
export default Home;