import React from "react";
import FoodButton from "./FoodButton";

function SubsribeSection() {
  return (
    <div className="SubscribeSection">
      <div>
        <form>
          <div className="imgUrl">
            <div className="d-flex m-auto justify-content-center align-items-center h-100 subsInput">
              <input type="text" placeholder="Enter your Email" />
              <FoodButton ButtonName="SignUp" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubsribeSection;
