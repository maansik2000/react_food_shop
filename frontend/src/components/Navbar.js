import React, { useState } from "react";
import FishLogo from "../Images/FishLogo.png";
import FoodButton from "./FoodButton";
import { Link } from "react-router-dom";

function Navbar() {
  const [burgerMenu, setburgerMenu] = useState(false);

  const handleChange = () => {
    setburgerMenu(!burgerMenu);
  };
  return (
    <nav className="navbar-links">
      <div className="menu-icon">
        <Link to="/" className="logo text-decoration-none text-white">
          Salmo
        </Link>
        <img src={FishLogo} alt="logo" width="35" height="35" />
      </div>

      <div className="hamburgerIcon" onClick={handleChange}>
        <i className={burgerMenu ? "fas fa-hamburger" : "fas fa-times"}></i>
      </div>

      <ul className="navlinks">
        <li>
          <Link to="/" className="logo text-decoration-none text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" className="logo text-decoration-none text-white">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/" className="logo text-decoration-none text-white">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </li>
        <li>
          <FoodButton ButtonName="Sign Up" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
