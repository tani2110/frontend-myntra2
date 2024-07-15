import React, { useState } from 'react';
import './triangle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const images = [
  'https://i.pinimg.com/736x/6f/13/cf/6f13cfbfb933702d628717c4afac7369.jpg',
  'https://images.unsplash.com/photo-1706509801026-891f9bb204fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNraXJ0fGVufDB8fDB8fHww',
  'https://i.pinimg.com/564x/e0/21/54/e02154fedbd00a448e9999aeadee6490.jpg'
];

function Triangle() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [classificationResult, setClassificationResult] = useState('');

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleYes = async () => {
    const imageUrl = images[currentImageIndex];
    console.log(imageUrl);

    try {
      const response = await fetch('http://localhost:5000/classify_image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image_url: imageUrl }),
      });
      const data = await response.json();
      setClassificationResult(data.result);
    } catch (error) {
      console.error('Error classifying image:', error);
    }
  };

  return (
    <div className="triangle-container">
      <h2>Select the Styles you like</h2>
      <div className="triangle-image-container">
        <img src={images[currentImageIndex]} alt="Body type" />
      </div>
      <div className="triangle-button-container">
        <button className="triangle-yes-button" onClick={handleYes}>
          <FontAwesomeIcon icon={faHeart} /> Yes
        </button>
        <button className="triangle-next-button" onClick={handleNext}>Next</button>
      </div>
      {classificationResult && <p>{classificationResult}</p>}
      <div className="results">  <Link to="/result"> VIEW RESULTS </Link></div>
    </div>
  );
}

export default Triangle;
