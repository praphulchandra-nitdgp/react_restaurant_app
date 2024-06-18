import React, { useState } from 'react';
import "./Menu.css";
import MenuHero from "../MenuHero.png";
import MenuData from "../MenuData.js";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Menu = () => {
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  const filterMenu = () => {
    if (category === 'All') {
      return MenuData;
    }
    return MenuData.filter(item => item.category === category);
  };

  const filteredData = filterMenu();

  // Calculate the number of pages
  const count = Math.ceil(filteredData.length / itemsPerPage);

  // Calculate the items to display on the current page
  const currentPageItems = filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <section className='menu-top'>
        <div className='menu-img'>
          <img src={MenuHero} alt="menu-img" />
          <h2>Menu</h2>
        </div>
      </section>
      <section className='menu-container'>
        <div className='category-bar'>
          {['All', 'Desserts', 'Main Course', 'Bread'].map(cat => (
            <button
              key={cat}
              className={`category-button ${category === cat ? 'active' : ''}`}
              onClick={() => {
                setCategory(cat);
                setPage(1); // Reset to first page on category change
              }}
            >
              <h2 className='btn-cat'>{cat}</h2>
            </button>
          ))}
        </div>
        <div className="menu-items">
          {currentPageItems.map(item => (
            <div key={item.id} className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className='pagination'>
          <Box display="flex" justifyContent="center" mt={2} className="pagination">
            <Pagination
              size='large'
              count={count}
              page={page}
              onChange={handleChange}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Box>
        </div>
      </section>
    </>
  );
};

export default Menu;
