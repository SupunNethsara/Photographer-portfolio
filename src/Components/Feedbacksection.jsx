import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig';  // Import Firestore config
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { blue, deepPurple } from '@mui/material/colors';
import pic1 from '../assets/pic-1.jpg';
import pic2 from '../assets/pic-2.jpeg';
import pic3 from '../assets/pic-3.jpg';
import './Css/Feedbacksection.css';

const Feedbacksection = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
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

  useEffect(() => {
    // Fetch feedbacks from Firestore when component mounts
    const fetchFeedback = async () => {
      const querySnapshot = await getDocs(collection(db, "feedback"));
      const feedbackArray = [];
      querySnapshot.forEach((doc) => {
        feedbackArray.push(doc.data());
      });
      setFeedbackList([...feedbackList, ...feedbackArray]);
    };
    fetchFeedback();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (feedback.trim() && name.trim()) {
      const newFeedback = {
        name: name || "Anonymous",
        comment: feedback,
        img: null, // No image for new feedback, we'll use avatar instead
      };

      try {
        await addDoc(collection(db, "feedback"), newFeedback);
        setFeedbackList([...feedbackList, newFeedback]);
        setFeedback('');
        setName('');
      } catch (error) {
        console.error("Error adding feedback: ", error);
      }
    }
  };

  // Function to extract the first letter of the name
  const getFirstLetter = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'A';
  };

  return (
    <div className="feedback-main">
      <h2 className='t-title'>Client Feedback</h2>
     
      <div className="feedback-cards-container"> {/* New scrollable div */}
    {feedbackList.map((item, index) => (
      <div className="card" key={index}>
        <Stack direction="row" spacing={2}>
          {item.img ? (
            <Avatar src={item.img} alt="user" />
          ) : (
            <Avatar sx={{ bgcolor:blue[500] }}>
              {getFirstLetter(item.name)}
            </Avatar>
          )}
        </Stack>
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
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="name-input"
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
