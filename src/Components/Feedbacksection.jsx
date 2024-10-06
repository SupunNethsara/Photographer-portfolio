import React, { useState } from 'react';
import pic1 from '../assets/pic-1.jpg';
import pic2 from '../assets/pic-2.jpeg';
import pic3 from '../assets/pic-3.jpg';

import './Css/Feedbacksection.css';
const Feedbacksection = () => {
  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState([
    {
      name: "Marnus Stephen",
      comment: "We had a great time collaborating with the Filament team. They have my high recommendation!",
      img: pic1
    },
    {
      name: "Andrew Jettpace",
      comment: "The team drastically improved our product's user experience & increased our business outreach.",
      img: pic2
    },
    {
      name: "Stacy Stone",
      comment: "I absolutely loved working with the Filament team. Complete experts at what they do!",
      img: pic3
    },
    {
      name: "Jhon kills",
      comment: "I absolutely loved working with the Filament team. Complete experts at what they do!",
      img: pic1
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      const newFeedback = {
        name: "Anonymous",
        comment: feedback,
        img: "" // You can add a placeholder image here
      };
      setFeedbackList([...feedbackList, newFeedback]);
      setFeedback(''); // Clear input after submission
    }
  };

  return (
    <div className="feedback-main">
      <h2 className='t-title'>Client Feedback</h2>
   
      {feedbackList.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt="user" />
          <div className="card__content">
            <span><i className="ri-double-quotes-l"></i></span>
            <div className="card__details">
              <p>{item.comment}</p>
              <h4>- {item.name}</h4>
            </div>
          </div>
        </div>
      ))}

      <div className="feedback-input">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="feedback-textarea"
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Feedbacksection;
