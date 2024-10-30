import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './Css/Portfolio.css';
import ScrollReveal from 'scrollreveal';

const Portfolio = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('All');

  useEffect(() => {
    // Get active item from localStorage or default to 'All'
    const savedActiveItem = localStorage.getItem('activeItem') || 'All';
    setActiveItem(savedActiveItem);
  }, []);

  useEffect(() => {
    ScrollReveal().reveal('.port', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      reset: true,
      easing: 'ease-in-out'
    });
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
    localStorage.setItem('activeItem', item); // Save active item in localStorage
  };

  return (
    <div className='port'>
      <div className='image1'>
        <img src="/shadow.png" alt="" />
      </div>
      <div className='header-sec'>
        <h2>Education and Experience</h2>
        <h1>Latest Project</h1>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink
              to="."
              onClick={() => handleItemClick('All')}
              style={{
                color: activeItem === 'All' ? '#1E90FF' : '#ffffff'
              }}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shorts"
              onClick={() => handleItemClick('Video Editing')}
              style={{
                color: activeItem === 'Video Editing' ? '#1E90FF' : '#ffffff'
              }}
            >
              Shorts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="weddings"
              onClick={() => handleItemClick('Photo Shooting')}
              style={{
                color: activeItem === 'Photo Shooting' ? '#1E90FF' : '#ffffff'
              }}
            >
              Weddings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="events"
              onClick={() => handleItemClick('Contents')}
              style={{
                color: activeItem === 'Contents' ? '#1E90FF' : '#ffffff'
              }}
            >
              Events
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