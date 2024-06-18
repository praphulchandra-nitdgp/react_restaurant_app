import React from 'react';
import AboutImg from "../Abouthead.png"
import "./About.css"


const About = () => {
  return (
    <>
      <section className='top-container'>
        <div className='abt-img'>
          <img
            src={AboutImg}
            alt="about-img"
          />
          <h2>About Us</h2>
        </div>
      </section>
      <div className='abt-text-container'>
        <p>Welcome to Fork Frenzy, where culinary delights meet an unforgettable dining experience! We pride ourselves on offering a diverse menu that spans a wide range of flavors and cuisines. From locally-sourced ingredients to international dishes crafted by our expert chefs, each meal is designed to tantalize your taste buds. Whether you're in the mood for a cozy dinner, a festive family gathering, or a casual lunch, our welcoming atmosphere and attentive service ensure that every visit is special.</p>
      </div>
      <section className='float1-container'>
        <div className='abt1'>
          <div className='abt1-img'>
              <img
                src='https://media.istockphoto.com/id/1069793714/photo/sprinkling-seasonings-from-high-up.jpg?s=612x612&w=0&k=20&c=Cb537EMBtujrYokiMbVb7jVG1MlCcgP7QNIat0M_hgY='
                alt='abt-img'
              />
          </div>
          <div className='abt1-content'>
            <h2 className='abt1-header'>Who Are We</h2>
            <p className='abt1-description'>At Fork Frenzy. Our modern and inviting space is perfect for any occasion, and our dedicated team is always ready to make your dining experience exceptional.</p>
            <p className='abt1-description'>Join us at Fork Frenzy, where every meal is an adventure in flavor and a celebration of good company. We look forward to serving you and making your time with us truly memorable. Bon appétit!</p>
          </div>
        </div>

        <div className='abt1'>
          <div className='abt1-content'>
            <h2 className='abt1-header'>Colleta Cary</h2>
            <p className='abt1-description'>Seasonal changes, outstanding ingredients and a made-from-scratch menu of antipastis. The chef curated dinner and dessert menus, pair with the well balanced wine and beverage program. </p>
            <p className='abt1-description'>Located at Fenton in Cary, NC, this casual yet polished family-style Italian restaurant features 120 indoor dining seats, 60 seats outdoors on the semi-covered patio, and a 12-seat bar.</p>
          </div>
          <div className='abt1-img'>
            <img
              src='https://images.otstatic.com/prod1/51571013/1/huge.jpg'
              alt='abt-img'
            />
          </div>
        </div>
        
      </section>
    </>
  );

};

export default About;