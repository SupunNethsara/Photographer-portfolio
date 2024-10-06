import React from 'react'
import './Css/Services.css';
import 'remixicon/fonts/remixicon.css';
import Feedbacksection from './Feedbacksection';
export const Services = () => {
  return (
    <div>
      <div className="services-feedback">
        <div className="model">
          <div className='heading'>
            <h4>Services</h4>
            <h2>Overview.</h2>
            <p>With over 2+ Years of experience as a freelance video editor, I bring stories to life through compelling visuals and seamless storytelling. My passion for filmmaking and content creation drives me to craft engaging videos that captivate audiences. Whether it’s editing dynamic vlogs, promotional content, or cinematic short films, wedding films, I thrive on collaborating with clients to transform their visions into reality. Let’screate something amazing together! </p>
          </div>
          <div className='boxes-serv'>
            <div className='row'>
              <div className='boxs'>
                <i className="ri-user-voice-line"></i>
                <h2>Content Creator</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto neque veniam culpa exercitationem obcaecati ratione ullam voluptatem, est a, illo cupiditate deleniti. Minus esse magni minima omnis, iusto totam ut?</p>
                <button>Read More</button>
              </div>
              <div className='boxs'>
              <i className="ri-film-line"></i>
              <h2>Vedio Editor</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quod quae corrupti. Dolorem veniam fugiat temporibus error et quos a quaerat consequatur amet cupiditate sunt quasi, ipsum pariatur inventore eligendi!</p>
              <button>Read More</button>
              </div>
            </div>
            <div className='row'>
              <div className='boxs'>
                <i className="ri-scissors-line"></i>
                <h2>vedio Creator</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ex laudantium laboriosam saepe deleniti animi vitae repudiandae ducimus laborum iste, repellat, maxime est nobis, eligendi pariatur aliquid doloremque suscipit tenetur!</p>
                <button>Read More</button>
              </div>
              <div className='boxs'>
                <i className="ri-camera-line"></i>
                <h2>Photographer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus tenetur asperiores dolorum, necessitatibus sed dolore quaerat inventore fugiat porro ex, iure quam vitae quisquam. Magni, corporis. Minus dolor numquam natus.</p>
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
