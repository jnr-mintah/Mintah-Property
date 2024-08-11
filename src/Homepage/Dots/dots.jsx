import "../Dots/dots.css"; // Ensure this path is correct
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faThumbsUp, faShieldAlt, faHandshake, faGem } from '@fortawesome/free-solid-svg-icons';

// Define the WhyChooseUs component first
const WhyChooseUs = () => {
  const [icons] = useState([
    { id: 1, icon: faTrophy, title: "Excellence" },
    { id: 2, icon: faThumbsUp, title: "Trust" },
    { id: 3, icon: faShieldAlt, title: "Security" },
    { id: 4, icon: faHandshake, title: "Partnership" },
    { id: 5, icon: faGem, title: "Premium Service" },
  ]);

  return (
    <div className="why-choose-us-section">
      <div className="icon-container">
        {icons.map(({ id, icon, title }) => (
          <div key={id} className="icon-item">
            <FontAwesomeIcon className="iconss" icon={icon} size="3x" />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Define the Dot component
function Dot() {
  const circles = Array.from({ length: 42 }, (_, index) => index + 1);

  return (
    <>
      <div className="after-hero">
        <div className="circles-container">
          {circles.map((circle) => (
            <div key={circle} className="circle"></div>
          ))}
        </div>

        <div className="services">
          <h1>Why Choose Us</h1>
          <WhyChooseUs />
        </div>
      </div>
    </>
  );
}

export default Dot;
