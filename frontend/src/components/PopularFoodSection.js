import axios from "axios";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/row";
import CardItem from "./CardItem";

function PopularFoodSection() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products/popularFood/");
      setProduct(data);
      console.log(product);
    };
    fetchData();
  }, []);
  return (
    <div className="container-fluid popularSection ">
      <div className="popularTitle">
        <h1>Popular Food</h1>
        <p>
          We provide a variety of food and beveraged with fresh ingredient and
          high taste from famous chefs.{" "}
        </p>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4 PopularDish">
        {product.map((product) => (
          <CardItem key={product.key} product={product} />
        ))}
      </Row>
    </div>
  );
}

export default PopularFoodSection;
