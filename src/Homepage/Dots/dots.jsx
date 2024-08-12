import "../Dots/dots.css"; // Ensure this path is correct
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faThumbsUp,
  faShieldAlt,
  faHandshake,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "../Slider/slider";

// Define the WhyChooseUs component first
const WhyChooseUs = () => {
  const [icons] = useState([
    { id: 1, icon: faTrophy, title: "Excellence" },
    { id: 2, icon: faThumbsUp, title: "Trust" },
    { id: 3, icon: faShieldAlt, title: "Security" },
    { id: 4, icon: faHandshake, title: "Partnership" },
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
          <div className="boxes">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <rect
                fill="rgb(94, 91, 91)"
                stroke="rgb(94, 91, 91)"
                stroke-width="19"
                width="30"
                height="30"
                x="25"
                y="50"
              >
                <animate
                  attributeName="y"
                  calcMode="spline"
                  dur="1.8"
                  values="50;120;50;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.4"
                ></animate>
              </rect>
              <rect
                fill="rgb(94, 91, 91)"
                stroke="rgb(94, 91, 91)"
                stroke-width="19"
                width="30"
                height="30"
                x="85"
                y="50"
              >
                <animate
                  attributeName="y"
                  calcMode="spline"
                  dur="1.8"
                  values="50;120;50;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.2"
                ></animate>
              </rect>
              <rect
                fill="rgb(94, 91, 91)"
                stroke="rgb(94, 91, 91)"
                stroke-width="19"
                width="30"
                height="30"
                x="145"
                y="50"
              >
                <animate
                  attributeName="y"
                  calcMode="spline"
                  dur="1.8"
                  values="50;120;50;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="0"
                ></animate>
              </rect>
            </svg>
          </div>
          <h1>Why Choose Us</h1>
          <WhyChooseUs />
        </div>
      </div>
    </>
  );
}


export default Dot;
