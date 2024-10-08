import React, { Component } from 'react'
import './Css/About.css';
export default class About extends Component {
  render() {
    return (
      <div>
        <div className='header-sec' >
          <h2>Education  and Experience</h2>
          <h1>ABOUT ME</h1>
        </div>
        <div className="about">

          <div className='img-about'>
            <div className='image'>
              {/* 
              <div className="blobe"></div> */}
              <div className='image-frame'>
                <img src="removebackground2.png" alt="" />
              </div>


            </div>
            <div className="info-about1">
              <span style={{ color: '#1E90FF', fontSize: '1rem' }} >2+</span>
              <p style={{ color: 'white' }}>Years of Experience</p>
            </div>
            <div className="info-about2">
              <span style={{ color: '#1E90FF', fontSize: '1rem' }} >16+</span>
              <p style={{ color: 'white' }}>Project Complete</p>
            </div>
            <div className="info-about3">
              <span style={{ color: '#1E90FF', fontSize: '1rem' }} >60+</span>
              <p style={{ color: 'white' }}>happy Clients</p>
            </div>
          </div>

          <div className='about-content'>
            <span >Let me introduce myself</span>
            <h3>A story of good</h3>
            <h4>I'am Dynamic Crative Designer<span className='pandv' style={{ color: '#1E90FF', fontWeight: '400' }}> photography and Vedio</span></h4>
            <p>With over 2+ Years of experience as a freelance video editor, I bring stories to life through compelling visuals and seamless storytelling. My passion for filmmaking and content creation drives me to craft engaging videos that captivate audiences. Whether it’s editing dynamic vlogs, promotional content, or cinematic short films, wedding films, I thrive on collaborating with clients to transform their visions into reality. Let’s create something amazing together! lo</p>
            <div className="btn-box">
              <button>Hire Me</button>
            </div>
          </div>



        </div>
        <div className="details">
          <div className='skills-bar'>
            <div className='bar'>
              <div> <h3 className='title'>Technical Skills </h3></div>

              <div className="candidatos">
                <div className="parcial">
                  <div className="info">
                    <div className="nome">Adobe Photoshop</div>
                    <div className="percentag-num">90%</div>
                  </div>
                  <div className="presentagebar">
                    <div className="presentagem" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              <div className="candidatos">
                <div className="parcial">
                  <div className="info">
                    <div className="nome">Adobe Xd</div>
                    <div className="percentag-num">80%</div>
                  </div>
                  <div className="presentagebar">
                    <div className="presentagem" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
              <div className="candidatos">
                <div className="parcial">
                  <div className="info">
                    <div className="nome">Adobe Premiere Pro </div>
                    <div className="percentag-num">70%</div>
                  </div>
                  <div className="presentagebar">
                    <div className="presentagem" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
              <div className="candidatos">
                <div className="parcial">
                  <div className="info">
                    <div className="nome">Adobe After Effects</div>
                    <div className="percentag-num">50%</div>
                  </div>
                  <div className="presentagebar">
                    <div className="presentagem" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
              <div className="candidatos">
                <div className="parcial">
                  <div className="info">
                    <div className="nome">Figma</div>
                    <div className="percentag-num">60%</div>
                  </div>
                  <div className="presentagebar">
                    <div className="presentagem" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='about-me'>

            <div class="information">
              <p><strong>Birthday : </strong><span>  09 April 2004</span></p>
              <p><strong>Website : </strong><span>www.domain.com</span></p>
              <p><strong>Degree : </strong><span>BCA</span>  </p>
              <p><strong>City : </strong><span>Kolkata, India</span>  </p>
              <p><strong>City : </strong><span>Kolkata, India</span>  </p>
           

            </div>
            <div class="information">
              <p><strong>Age : </strong> <span>20</span></p>
              <p><strong>Email : </strong><span>prasad.@gmail.com</span></p>
              <p><strong>Phone : </strong><span> +91 00000 00000</span></p>
              <p><strong>Freelance : </strong> <span> Available</span></p>
              <p><strong>City : </strong><span>Kolkata, India</span>  </p>
            </div>
          </div>

        </div>
        <div className="edu-exp">
          <div className="education">
            <header class="title">
              <h2>Education</h2>
            </header>
            <section class="col">
              <div class="contents">

                <div class="box">
                  <h4>2018 - 2022</h4>
                  <h3>High School Degree</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>

                <div class="box">
                  <h4>2018 - 2022</h4>
                  <h3>Bachelor's Degree</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>

                <div class="box">
                  <h4>2018 - 2022</h4>
                  <h3>Master Degree</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>

              </div>
            </section>
          </div>
          <div className="experience">
            <header class="title">
              <h2>Expereince</h2>
            </header>
            <section class="col">
              <div class="contents">

                <div class="box">
                  <h4>2018 - 2022</h4>
                  <h3>UI/UX Designer</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>

                <div class="box">
                  <h4>2018 - 2022</h4>
                  <h3>Full-Stack Developer</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>

                <div class="box">
                  <h4>2018 - 2022</h4>
                  <h3>Frontend Developer</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>

              </div>
            </section>

          </div>
        </div>
      </div>
    )
  }
}
