import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CarouselCardItem from "./CarouselCardItem";
import Testimonial from "../utils/Testimonial.js";

function MyCarousel({ options }) {
  return (
    <OwlCarousel className="owl-theme" {...options}>
      {Testimonial.map((review) => (
        <div className="item" key={review.key}>
          <CarouselCardItem item={review} />
        </div>
      ))}
    </OwlCarousel>
  );
}

export default MyCarousel;
