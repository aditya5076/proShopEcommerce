import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    };
    fetchProduct();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={4} ls={4}>
            <Product product={product} key={product._id} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
