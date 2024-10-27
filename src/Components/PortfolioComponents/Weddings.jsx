import React,{  useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../PortfolioComponents/Css/All.css';
export const Weddings = () => {
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
            <img src="/wedding1.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Arosha & Murray</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/1uKZlCrwq2McZafVggazGZSv9I1zNCmPP/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="/wedding3.png"  alt="" srcset="" />
            <div className="card-content">
              <h3>Arosha & Murray</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/1uKZlCrwq2McZafVggazGZSv9I1zNCmPP/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="/wedding2.png"  alt="" srcset="" />
            <div className="card-content">
              <h3>Arosha & Murray</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/1uKZlCrwq2McZafVggazGZSv9I1zNCmPP/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="/wedding4.jpg"  alt="" srcset="" />
            <div className="card-content">
              <h3>Sathsarani & Lahiru</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/1MjmIb77uuzu6dw5mbQ4g0qbfpkgd7fzK/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="/wedding5.jpg"  alt="" srcset="" />
            <div className="card-content">
              <h3>Sathsarani & Lahiru</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/1MjmIb77uuzu6dw5mbQ4g0qbfpkgd7fzK/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="/wedding6.jpg"  alt="" srcset="" />
            <div className="card-content">
              <h3>Sathsarani & Lahiru</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/file/d/1MjmIb77uuzu6dw5mbQ4g0qbfpkgd7fzK/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
        </div>
        
        
        
       
      </div>
    </div>
  )
}
