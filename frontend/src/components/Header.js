import React from "react";
import FoodButton from "./FoodButton";
import Fish from "../Images/Fish1.png";
function Header() {
  return (
    <div className="container-fluid">
      <div className="row headerpage ">
        <div className="col-md-6 headerContent px-0">
          <div>
            <h1>
              We Bring you the best <span>Cuisine</span> you want.{" "}
            </h1>
            <p>
              We Provide you the healthy and tasty meal, made by love and fresh
              ingredients.{" "}
            </p>

            <FoodButton ButtonName="Menu" />
          </div>
        </div>

        <div className="col-md-6 FishLogo ">
          <img
            src={Fish}
            className="img-fluid FishImage rounded mx-auto d-block"
            alt="Fishi"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
