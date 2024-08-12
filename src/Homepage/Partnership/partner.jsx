import React, { useState } from 'react';
import './partner.css'; // Ensure your CSS file is properly linked

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      content: "We've had an amazing experience with the property company. Their service is top-notch, and they truly care about their clients.",
      buttonText: "Learn More",
      buttonLink: "#"
    },
    {
      content: "The property we purchased was beyond our expectations. Highly recommend this company for anyone looking for their dream home.",
      buttonText: "View Properties",
      buttonLink: "#"
    },
    {
      content: "Exceptional service and attention to detail. The team made our buying process smooth and stress-free.",
      buttonText: "Contact Us",
      buttonLink: "#"
    },
    {
      content: "A wonderful experience from start to finish. The property company went above and beyond to meet our needs.",
      buttonText: "Our Story",
      buttonLink: "#"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider-content">
        <div className="logo-section">
          <img src="https://via.placeholder.com/150?text=Your+Logo" alt="Logo" />
        </div>
        <div className="slider">
          <div className="slider-slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slider-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <p>{slide.content}</p>
                <a href={slide.buttonLink} className="slider-button-link">
                  {slide.buttonText}
                </a>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <button className="slider-button prev" onClick={handlePrev}>
              &lt;
            </button>
            <div className="slider-dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button className="slider-button next" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
