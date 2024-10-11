import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Css/Portfolio.css';
import ScrollReveal from 'scrollreveal';
const Portfolio = () => {

  
  
const [activeItem, setActiveItem] = useState('All');
 const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    ScrollReveal().reveal('.port', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      reset: true,  // Animation will happen every time it scrolls into view
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className='port'>
      <div className='header-sec'>
        <h2>Education and Experience</h2>
        <h1>Latest Project</h1>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink 
              to="." 
              style={{
                color: activeItem === 'All' ? '#1E90FF' : '#ffffff'
              }}
              onClick={() => handleItemClick('All')}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="video-editing" 
              style={{
                color: activeItem === 'Video Editing' ? '#1E90FF' :  '#ffffff'
              }}
              onClick={() => handleItemClick('Video Editing')}
            >
              Video 
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="photo-shooting" 
              style={{
                color: activeItem === 'Photo Shooting' ? '#1E90FF' :  '#ffffff'
              }}
              onClick={() => handleItemClick('Photo Shooting')}
            >
              Photo
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="contents" 
              style={{
                color: activeItem === 'Contents' ? '#1E90FF' :  '#ffffff'
              }}
              onClick={() => handleItemClick('Contents')}
            >
              Contents
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='menu-section'>
        <Outlet />
      </div>
    </div>
  );
};

export default Portfolio;
