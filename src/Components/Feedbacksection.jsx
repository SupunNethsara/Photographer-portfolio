import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig';  // Import Firestore config
import pic1 from '../assets/pic-1.jpg';
import pic2 from '../assets/pic-2.jpeg';
import pic3 from '../assets/pic-3.jpg';
import './Css/Feedbacksection.css';

const Feedbacksection = () => {
  const [name, setName] = useState(''); // New state for the name
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
    }
  ]);

  useEffect(() => {
    // Fetch feedbacks from Firestore when component mounts
    const fetchFeedback = async () => {
      const querySnapshot = await getDocs(collection(db, "feedback"));
      const feedbackArray = [];
      querySnapshot.forEach((doc) => {
        feedbackArray.push(doc.data());
      });
      // Combine Firestore feedbacks with the default feedbacks
      setFeedbackList(prevList => [...prevList, ...feedbackArray]);
    };
    fetchFeedback();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (feedback.trim() && name.trim()) { // Check if both feedback and name are provided
      const newFeedback = {
        name: name || "Anonymous", // Use the provided name or fallback to "Anonymous"
        comment: feedback,
        img: pic3
      };

      try {
        await addDoc(collection(db, "feedback"), newFeedback);
        setFeedbackList([...feedbackList, newFeedback]);
        setFeedback('');
        setName(''); // Clear the name input after submission
      } catch (error) {
        console.error("Error adding feedback: ", error);
      }
    }
  };

  return (
    <div className="feedback-main">
      <div className='feedbacks-section'>
        <h2 className='t-title'>Client Feedback</h2>
        {feedbackList.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img || pic3} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>{item.comment}</p>
                <h4>- {item.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="feedback-input">
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="feedback-name-input" // Optional: Add a class for styling
          />
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
