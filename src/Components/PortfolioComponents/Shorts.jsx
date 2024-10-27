import React,{  useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../PortfolioComponents/Css/All.css';
export const Shorts = () => {
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
            <img src="/shorts3.jpeg" alt="" srcset="" />
            <div className="card-content">
              <h3>Oshaka & Rassel</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/1vXKTPBIjaNJsvdVHfmN8L4FrxAqehYi4/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="/Shorts2.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Short Movie</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/19GhYGhYOFw-_zsFW9PcVRHm70PFinwEv/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="/Shorts1.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Short Movie</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/19GhYGhYOFw-_zsFW9PcVRHm70PFinwEv/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="/shorts4.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Scenic Wonders</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/1tAGmU4t0LBxINDEpO3X0sDNUi4vd9548/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="/shorts7.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Cascading Nature</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/1FEcwS7RJrVCWqeSBsAphEfuRCHq9HbYU/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="/shorts6.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Cascading Nature</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/1vJlWHO-0fGXbl8ov2BzoJHvaCxAjZa_I/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
        </div>
      
        
         
       
      </div>
    </div>
  )
}
