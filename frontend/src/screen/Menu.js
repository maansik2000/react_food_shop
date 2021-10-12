import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import CardItem from "../components/CardItem";
import { Link } from "react-router-dom";
import axios from "axios";

function Menu() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products/");
      setProduct(data);
      console.log(product);
    };
    fetchData();
  }, []);

  return (
    <div className="menuSection">
      <p>
        <Link to="/" className="text-black text-decoration-none">
          Home
        </Link>
        /Menu
      </p>
      <Row xs={1} md={2} lg={3} className="g-4 PopularDish">
        {product.map((product) => (
          <CardItem key={product.key} product={product} />
        ))}
      </Row>
    </div>
  );
}

export default Menu;
