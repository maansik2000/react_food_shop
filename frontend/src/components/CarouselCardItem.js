import React from "react";
import Card from "react-bootstrap/esm/Card";

function CarouselCardItem({ item }) {
  return (
    <div>
      <Card className="TestimonialCard" style={{ width: "500px" }}>
        <Card.Body>
          <Card.Text>{item.text}</Card.Text>
          <div className="row">
            <div className="col-3">
              <img className="testimonial-image" src={item.img} alt="avatar" />
            </div>
            <div className="col-9">
              <h6 className="testimonial-name">{item.name}</h6>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CarouselCardItem;
