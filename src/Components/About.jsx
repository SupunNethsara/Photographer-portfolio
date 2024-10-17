import React, { useState, useEffect } from 'react';
import './Css/About.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ScrollReveal from 'scrollreveal';
import { NavLink, Outlet, Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export const About = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [certifications, setCertifications] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {

    ScrollReveal().reveal('.content', {
      origin: 'bottom',
      distance: '40px',
      duration: 1000,
      reset: true,
      easing: 'ease-in-out'
    });
    ScrollReveal().reveal('.edu-content', {
      origin: 'bottom',
      distance: '70px',
      duration: 2000,
      reset: true,
      easing: 'ease-in-out'
    });

    const experienceInterval = setInterval(() => {
      setExperience((prev) => {
        if (prev < 3) return prev + 1;
        clearInterval(experienceInterval);
        return prev;
      });
    }, 500);

    const clientsInterval = setInterval(() => {
      setClients((prev) => {
        if (prev < 20) return prev + 1;
        clearInterval(clientsInterval);
        return prev;
      });
    }, 100);

    const projectsInterval = setInterval(() => {
      setProjects((prev) => {
        if (prev < 50) return prev + 1;
        clearInterval(projectsInterval);
        return prev;
      });
    }, 50);

    const certificationsInterval = setInterval(() => {
      setCertifications((prev) => {
        if (prev < 3) return prev + 1;
        clearInterval(certificationsInterval);
        return prev;
      });
    }, 500);

    return () => {
      clearInterval(experienceInterval);
      clearInterval(clientsInterval);
      clearInterval(projectsInterval);
      clearInterval(certificationsInterval);
    };
  }, []);

  // Tabs movement
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='about-container'>
        <div className='top-left-image'>
          <img src="/top-left-img.png" alt="" />
        </div>
        <div className="profile-details">
          <div className="content">
            <h1>Shashimal Liyanage</h1>
            <h2>Undergraduate Student<span> & Freelancing</span><span><br/>Video-grapher</span></h2>
            <p>
            As a videographer and advanced editor, I specialize in creating cinematic wedding films and event short films that beautifully capture the essence of each moment. With extensive experience in both shooting and editing, I combine a creative eye with technical precision to produce visually stunning films. My advanced editing skills allow me to craft seamless, engaging narratives that highlight the emotions and energy of weddings and events, ensuring that every project tells a unique and memorable story.
            </p>
            <div className='achievements-sec'>
              <div className='achievement'>
                <h3>{experience}+</h3>
                <p>Years<br />Experience</p>
              </div>
              <div className='achievement'>
                <h3>{clients}+</h3>
                <p>Satisfied<br /> Clients</p>
              </div>
              <div className='achievement'>
                <h3>{projects}+</h3>
                <p>Completed<br /> Projects</p>
              </div>
              <div className='achievement'>
                <h3>{certifications}</h3>
                <p>Technology <br />Certifications</p>
              </div>
            </div>
            <div className="circle-text mx-auto  my-6">
              <Link href={'#'} className=" relative w-[165px] h-[165px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
                <img
                  src="/rounded-text.png"
                  width={121}
                  height={128}
                  alt="Spinning Image"
                  className="animate-spin-slow w-full max-w-[121px] max-h-[128px]"
                />
                {/* Centered arrow inside the image */}
                <ArrowRightAltIcon sx={{ color: '#ffffff' }} className="absolute text-4xl group-hover:translate-x-2 transition-ll duration-300" />
              </Link>
            </div>
          </div>
        </div>
        <div className="about-edu-exp">
          <div className='edu-content'>
            <div className="about-nav">
              <Box sx={{ width: '100%' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="inherit"
                  indicatorColor="primary"
                  aria-label="custom tabs example"
                  sx={{
                    paddingLeft: '5%',
                    '.MuiTabs-indicator': { backgroundColor: '#ffffff' },
                    '.MuiTab-root': {
                      color: '#ffffff',
                      padding: '30px',
                      fontSize: '12px', // Default font size
                    },
                    '.Mui-selected': { color: '#1e53ff', fontWeight: 'bold' },
                    '.MuiTab-root:hover': { color: '#928e9c' },
                    width: '100%', // Ensure full width of tabs
                    '@media (max-width: 768px)': {
                      '.MuiTab-root': {
                        fontSize: '0.9rem',

                      },
                      '.Mui-selected': { color: ' #1e53ff', fontWeight: 'bold' },

                    },
                    '@media (max-width: 576px)': {

                      '.MuiTab-root': {
                        fontSize: '0.6rem',
                        padding: '20px',

                      },

                      '.MuiTab-root:hover': { color: '#928e9c' },
                      '.Mui-selected': { color: ' #1e53ff', fontWeight: 'bold' },
                    },
                    '@media (min-width: 993px) and (max-width: 1200px)': {
                      '.MuiTab-root': {
                        fontSize: '10px',
                        padding: '10px',
                        margin: '0px'
                      },
                      '.MuiTab-root:hover': { color: '#928e9c' },
                      '.Mui-selected': { color: ' #1e53ff', fontWeight: 'bold' },
                    }
                  }}
                >
                  <Tab
                    component={NavLink}
                    to="/about"
                    value="one"
                    label="Skills"
                    sx={{ textDecoration: 'none' }}
                  />

                  <Tab
                    component={NavLink}
                    to="/about/experience"
                    value="three"
                    label="Experiences"
                    sx={{ textDecoration: 'none' }}
                  />
                  <Tab
                    component={NavLink}
                    to="/about/education"
                    value="four"
                    label="Educations"
                    sx={{ textDecoration: 'none' }}
                  />
                </Tabs>
              </Box>
            </div>
            <div className="about-drawer">
              <Outlet /> {/* Render the nested routes here */}
            </div>
          </div>

          <div className='image1'>
        <img src="/shadow.png" alt="" />
      </div>
      <div className='image2 '>
        <img src="" alt="" />
      </div>
        </div>
      </div>

      {/* Decorative Image */}
    
    </>
  );
};

export default About;
