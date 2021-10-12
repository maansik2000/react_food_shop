import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import dish2 from "../Images/dish4.png";

function CardItem({ key, product }) {
  return (
    <Col>
      <Card className="cardItem">
        <div className="row">
          <div className="col-9 dishRating">
            <h5>{product.name}</h5>
            <h6>
              {product.rating}
              <span>
                <i className="fas fa-star starRating"></i>
                <i className="far fa-heart"></i>
              </span>
            </h6>
          </div>
          <div className="col-3 px-2 DishImage">
            <img
              src={product.img}
              className="dishIcon"
              alt="dishIcon"
              width="110"
            />
          </div>
        </div>
        <div>
          <div className="row my-3">
            <div className="col-3 dishPrice">
              <h6>{product.price}$</h6>
            </div>
            <div className="col-9 dishButton">
              <button className="addtocart">
                <span>
                  <i className="fas fa-shopping-cart"></i>
                </span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
}

export default CardItem;
