import React,{  useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../PortfolioComponents/Css/All.css';

export const All = () => {
  useEffect(() => {
    ScrollReveal().reveal('.all', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      reset: true,  // Animation will happen every time it scrolls into view
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <div>
      <div className="all">
        <div className="row">
          <div className='card-all'>
            <img src="rassel.jpeg" alt="" srcset="" />
            
            <div className="card-content">
              <h3>Shorts</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <i class="ri-external-link-fill"></i>
            </div>
          </div>
          <div className='card-all'>
          <img src="thumb2.jpg" alt="" srcset="" />
            <div className="card-content">
              <h3>Weddings</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <i class="ri-external-link-fill"></i>
            </div>
          </div>
          <div className='card-all'>
          <img src="beach2.jpg" alt="" srcset="" />
            <div className="card-content">
              <h3>Events</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <i class="ri-external-link-fill"></i>
            </div>
          </div>
          
        </div>
        <div className="row">
          <div className='card-all'>
          <img src="beach2.jpg" alt="" srcset="" />
            <div className="card-content">
              <h3>Testimonial</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <i class="ri-external-link-fill"></i>
            </div>
          </div>
          <div className='card-all'>
          <img src="beach2.jpg" alt="" srcset="" />
            <div className="card-content">
              <h3>Short Films</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <i class="ri-external-link-fill"></i>
            </div>
          </div>
          <div className='card-all'>
          <img src="Tiktok.jpeg" alt="" srcset="" />
            <div className="card-content">
              <h3>Tik Tok</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <i class="ri-external-link-fill"></i>
            </div>
          </div>
          
        </div>
      

      </div>
    </div>
  )
}
