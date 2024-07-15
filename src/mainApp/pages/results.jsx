import React, { useState,useEffect } from 'react';
import './results.css';

function Result() {
    const [images, setImages] = useState([]);
    // const datasetPath = './path_to_images'; // Set your dataset path here
  
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/recommend_images`)
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error('Error fetching recommended images:', error));
    }, []);
  
    return (
      <div className="result-container">
        <h2>Recommended Styles</h2>
        <div className="result-image-container">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Recommendation ${index}`} className="result-image" />
          ))}
        </div>
        <div className="result-button-container">
          {/* Add any buttons or interactions here */}
        </div>
      </div>
    );
  }
export default Result;
