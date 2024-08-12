import React, { useState } from "react";
import propertyLogo from "../Slider/property favicon.png";
import "./slider.css";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      content:
        "Mintah Property exceeded our expectations in every way. They understood exactly what we were looking for and helped us find a home that perfectly suits our family's needs. Their professional approach made the entire process enjoyable and stress-free.",
    },
    {
      content:
        "Working with Mintah Property was a breath of fresh air. They were always available to answer our questions and guide us through each step of the buying process. We couldn't be happier with the home they helped us purchase.",
    },
    {
      content:
        "Selling our home with Mintah Property was smooth and efficient. They provided expert advice, and their marketing strategies were spot on. We sold our property quickly and for a great price. Highly recommend their services!",
    },
    {
      content:
        "From the first meeting to the final sale, Mintah Property was there every step of the way. Their team is knowledgeable, responsive, and truly cares about their clients. We felt confident and supported throughout the entire process.",
    },
    {
      content:
        "Mintah Property made relocating to a new city so much easier for us. They found us a home in a great neighborhood and took care of all the details. Their local expertise and dedication to client satisfaction are unmatched.",
    },
    {
      content:
        "We were first-time homebuyers, and Mintah Property made the experience simple and enjoyable. They took the time to understand our needs and budget, and we ended up with a home that we absolutely love. Thank you, Mintah Property!",
    },
    {
      content:
        "The team at Mintah Property made selling our home a breeze. Their professional approach and in-depth market knowledge led to a quick and profitable sale. We highly recommend their services!",
    },
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
    <>
      <div className="main1">
        <h1>Success Stories with Us</h1>
        <div className="main-container">
          <div className="slider-container">
            <div className="logo-section">
              <img src={propertyLogo} alt="Logo" />
            </div>
            <div className="slider">
              <div className="slider-slides">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`slider-slide ${
                      index === currentIndex ? "active" : ""
                    }`}
                    style={{
                      display: index === currentIndex ? "block" : "none",
                    }}
                  >
                    <p>{slide.content}</p>
                  </div>
                ))}
              </div>
              <button className="circle-button">READ MORE</button>
              <div className="slider-controls">
                <button
                  className="slider-button prev"
                  onClick={handlePrev}
                  style={{ color: "#f9dc52" }}
                >
                  &lt;
                </button>
                <div className="slider-dots">
                  {slides.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${
                        index === currentIndex ? "active" : ""
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>
                <button
                  className="slider-button next"
                  onClick={handleNext}
                  style={{ color: "#f9dc52" }}
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blank"></div>
    </>
  );
}

export default Slider;
