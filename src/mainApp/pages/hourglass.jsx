import React, { useState } from 'react';
import './hourglass.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// Placeholder images, replace these with your own image URLs
const images = [
  'https://via.placeholder.com/300.png/09f/fff',
  'https://via.placeholder.com/300.png/07f/fff',
  'https://via.placeholder.com/300.png/05f/fff',
  
];

function Hourglass() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="hourglass-container">
      <h2>Select the styles you like</h2>
      <div className="hourglass-image-container">
        <img src={images[currentImageIndex]} alt="Body type" />
      </div>
      <div className="hourglass-button-container">
        <button className="hourglass-yes-button">
          <FontAwesomeIcon icon={faHeart} /> Yes
        </button>
        <button className="hourglass-next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Hourglass;
