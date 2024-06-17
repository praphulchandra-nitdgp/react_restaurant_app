import React, { useState } from 'react';
import "./Menu.css";
import MenuHero from "../MenuHero.png";
import MenuData from "../MenuData.js";

const Menu = () => {
  const [category, setCategory] = useState('All');

  const filterMenu = () => {
    if (category === 'All') {
      return MenuData;
    }
    return MenuData.filter(item => item.category === category);
  };
  
  return(
    <>
      <section className='menu-top'>
        <div className='menu-img'>
          <img
            src={MenuHero}
            alt="menu-img"
          />
          <h2>Menu</h2>
        </div>
        </section>
        <section className='menu-container'>
          <div className='category-bar'>
            {['All', 'Desserts', 'Main Course', 'Bread'].map(cat => (
              <button
                key={cat}
                className={`category-button ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                <h2 className='btn-cat'>{cat}</h2>
              </button>
            ))}
          </div>
          <div className="menu-items">
            {filterMenu().map(item => (
              <div key={item.id} className="menu-item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
    </>
  );
};

export default Menu;