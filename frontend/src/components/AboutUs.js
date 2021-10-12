import React from "react";
import Bowl from "../Images/dish1.png";

import FoodButton from "./FoodButton";

function AboutUs() {
  return (
    <div className="container-fluid AboutSection px-0">
      <div className="row">
        <div className="col-md-6 ImageSec">
          <div className="ImageBlock">
            <img src={Bowl} alt="bowlImage" className="bowlImage img-fluid" />
          </div>
        </div>
        <div className="col-md-6 aboutUsHeading">
          <div>
            <h1>We provide the fresh sea food with different exotic menu</h1>
            <p>
              Each Freshly meal is perfectly made with fresh vegetables and is
              carefully considered for you health. We always try to bring our
              customer happniess
            </p>
            <div className="Btns">
              <FoodButton ButtonName="Menu" />
              <FoodButton ButtonName="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
