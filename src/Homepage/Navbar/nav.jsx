import React, { useState } from "react";
import "../Navbar/nav.css";
import property from "../Navbar/property.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarChart,
  faBars,
  faCaretDown,
  faClose,
  faDropletSlash,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);

  const inputClick = () => {
    setShowInput(!showInput);
  };

  const [showSidebar, setShowSidebar] = useState(false);

  const barClick = () => {
    setShowSidebar(!showSidebar);
  };

  const barClose = () => {
    setShowSidebar(false); // Close sidebar
  };

  return (
    <>
      <nav>
        <figure className="logo">
          <img src={property} alt="Logo" />
        </figure>

        <ul>
        <li className="lost">Home</li>
            <li className="lost">Services</li>
            <li className="lost">Portfolio</li>
            <li className="lost">Blog</li>
            <li className="lost">About Us</li>
            <li className="lost">Contact</li>
          {showInput && (
            <input className="inputs" type="text" placeholder="Search here" />
          )}
          <button onClick={inputClick} className="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </button>
          <button onClick={barClick} className="bar-button">
            <FontAwesomeIcon icon={faBars} className="bar-icon" />
          </button>
        </ul>

        {showSidebar && (
          <ul className="sidebar">
                     <button onClick={barClose} className="search-button">
            <FontAwesomeIcon icon={faClose} className="close-icon" />
          </button>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact</li>
            {showInput && (
              <input className="inputs1" type="text" placeholder="Search here" />
            )}
            <button onClick={inputClick} className="search-button">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search1-icon"
              />
            </button>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
