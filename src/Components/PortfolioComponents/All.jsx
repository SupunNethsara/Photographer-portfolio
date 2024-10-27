import React, { useEffect } from 'react';
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
              <a href='https://drive.google.com/drive/folders/1XpSfZhrSDexk2wbLwI6B31tTLwTZhYhR?usp=drive_link'><i class=" ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="thumb2.jpg" alt="" srcset="" />
            <div className="card-content">
              <h3>Weddings</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/drive/folders/1uuL4eZTj0Z8SdLCFh3_s9k_W8C9jpTFS?usp=drive_link'> <i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="Events.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Events</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/1Xu9qHBYC7hC3PSQV4eyp1sCGG2osLo5H/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="Trestiminol.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Testimonial</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/1bvlqrmlKjSr6cYLcEBCR4vAXLDkASQRY/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="Shortfilms.jpg" alt="" srcset="" />
            <div className="card-content">
              <h3>Short Films</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/drive/folders/11WQd2t82QFSRAyba2SVIiUSL-MzgKdJa?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="Tiktok.jpg" alt="" srcset="" />
            <div className="card-content">
              <h3>Tik Tok</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://www.tiktok.com/@shashimal_liyanage?_t=8qrN5PLv2n6&_r=1'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
        </div>






      </div>
    </div>
  )
}
