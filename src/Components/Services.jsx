import React ,{  useEffect } from 'react'
import './Css/Services.css';
import 'remixicon/fonts/remixicon.css';
import ScrollReveal from 'scrollreveal';
import Feedbacksection from './Feedbacksection';
export const Services = () => {

  useEffect(() => {
    ScrollReveal().reveal('.boxes-serv', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      reset: true,  // Animation will happen every time it scrolls into view
      easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.heading p', {
      origin: 'bottom',
      distance: '50px',
      duration: 2000,
      reset: true,  // Animation will happen every time it scrolls into view
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div>
      <div className="services-feedback">
      <div className='top-left-image '>
            <img src="/shadow4.png" alt="" />
          </div>
        <div className="model">
          <div className='heading'>
            <h4>Services</h4>
            <h2>Overview</h2>
            <p>With over 2+ Years of experience as a freelance video editor, I bring stories to life through compelling visuals and seamless storytelling. My passion for filmmaking and content creation drives me to craft engaging videos that captivate audiences. Whether it’s editing dynamic vlogs, promotional content, or cinematic short films, wedding films, I thrive on collaborating with clients to transform their visions into reality. Let’s create something amazing together!</p>
          </div>
          <div className='boxes-serv'>
            <div className='row'>
              <div className='boxs'>
                <i className="ri-user-voice-line"></i>
                <h2>Content Creator</h2>
                <p>"As a content creator, I specialize in crafting engaging digital content that resonates with audiences. From social media posts to informative videos, my focus is on storytelling that communicates your brand’s message clearly and creatively."
                </p>
                <button>Read More</button>
              </div>
              <div className='boxs'>
              <i className="ri-film-line"></i>
              <h2>Vedio Editor</h2>
              <p>"With a keen eye for detail and a passion for cinematic storytelling, I offer professional video editing services. Whether it’s post-production work for films, promotional content, or personal projects, I ensure a seamless blend of visuals and narrative." </p>
              <button>Read More</button>
              </div>
            </div>
            <div className='row'>
              <div className='boxs'>
                <i className="ri-scissors-line"></i>
                <h2>vedio Creator</h2>
                <p>"As a video creator, I manage the entire process of video production, from conceptualizing ideas to shooting and editing. My goal is to bring your vision to life with engaging visuals and creative storytelling."</p>
                <button>Read More</button>
              </div>
              <div className='boxs'>
                <i className="ri-camera-line"></i>
                <h2>Photographer</h2>
                <p>"Capturing moments that tell a story is my passion as a photographer. I provide professional photography services, specializing in events, portraits, and commercial shoots, ensuring each shot highlights the essence of the subject."</p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback">
          <Feedbacksection />
        </div>
      </div>
    </div>
  )
}
