import React, { useState } from 'react'; // Import useState for managing state
import './Css/Home.css';
import { Typewriter } from 'react-simple-typewriter';
import softwareitem1 from '../assets/pngwing1.png';
import softwareitem2 from '../assets/pngwing2.png';
import softwareitem3 from '../assets/pngwing3.png';
import softwareitem4 from '../assets/brand-2.png';
import softwareitem5 from '../assets/pngwing4.png';
import softwareitem6 from '../assets/brand-1.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Home = () => {
  return (
    <div>
       <div className='social-icons'>
          <div><FacebookOutlinedIcon sx={{ color: ' #1E90FF', fontSize: 20 }} /> </div>
          <div><WhatsAppIcon sx={{color: ' #1E90FF',fontSize: 20  }}/></div>
          <div><TwitterIcon sx={{color: '#1E90FF',fontSize: 20 }}/></div>
          <div><InstagramIcon sx={{color: ' #1E90FF',fontSize: 20 }}/></div>
        </div>
      <div className='main-sec'>
         <div className='text'>
          <div className='text-section'>
            <h1>
              <span>Hello I'm a</span>
            </h1>
            <h3>Shashimal Liyanage</h3>

            <span className='typewrite' style={{ display: 'inline-block', minHeight: '40px', marginTop: '15px', color: '#1E90FF' }}>
              <Typewriter
                words={['Content Creater', 'videographer', 'video editor']}
                loop={true}
                speed={100}
                delay={2000}
                cursor
              />
            </span>


            <p>With over 2+ Years of experience as a freelance video editor, I bring stories to life through compelling visuals and seamless storytelling. My passion for filmmaking and content creation drives me to craft engaging videos that captivate audiences. Whether it’s editing dynamic vlogs, promotional content, or cinematic short films, wedding films, I thrive on collaborating with clients to transform their visions into reality. Let’s create something amazing together!</p>

            <div className="software">
              <div className="software_item">
                <img src={softwareitem1} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem2} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem3} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem4} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem5} alt="" />
              </div>
              <div className="software_item">
                <img src={softwareitem6} alt="" />
              </div>
            </div>

            <div className='cv' style={{ display: 'flex' }}>
              <button style={{ backgroundColor: '#1E35FF', color: '#ffffff' }}>Download CV</button>
              <button>More Me</button>
            </div>
          </div>
        </div>

        <div className='image'>
          <div className='img-container'>
            <div className="blob"></div>
            <img src="/src/assets/removebg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
