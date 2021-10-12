import React from "react";
import { Link } from "react-router-dom";

function FoodButton({ ButtonName }) {
  return (
    <button className="signup-btn">
      <Link to="/menu" className="text-decoration-none text-white">
        {ButtonName}
      </Link>
    </button>
  );
}

export default FoodButton;
