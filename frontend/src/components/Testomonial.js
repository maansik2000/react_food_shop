import React from "react";
import MyCarousel from "./MyCarousel";

function Testomonial() {
  const options = {
    loop: true,
    margin: 50,
    items: 2,
    autoplay: true,
    autoWidth: true,
    responsiveClass: true,

    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 2,
      },
    },
  };
  return (
    <div className="Testimonial">
      <div>
        <h1 className="testimonial-heading">What our Customer says</h1>
      </div>
      <div className="myCarousel">
        <MyCarousel options={options} />
      </div>
    </div>
  );
}

export default Testomonial;
