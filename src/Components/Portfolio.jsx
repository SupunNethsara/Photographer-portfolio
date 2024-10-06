import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Css/Portfolio.css';

const Portfolio = () => {
  const [activeItem, setActiveItem] = useState('All');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
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
              Video Editing
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
              Photo Shooting
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
