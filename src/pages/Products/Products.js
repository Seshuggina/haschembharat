import React, { useState } from "react";
import { Product } from "./../../components/product/product";
import products from "./../../assets/data/products.json";

// reactstrap components
import { Container, Row, Col, Button, FormGroup, Input } from "reactstrap";
import "./Products.scss";

export const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
  const [selectedLetters, setSelectedLetters] = useState([]);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleLetterClick = (letter) => {
    setSelectedLetters((prevSelectedLetters) =>
      prevSelectedLetters.includes(letter)
        ? prevSelectedLetters.filter((l) => l !== letter)
        : [...prevSelectedLetters, letter]
    );
  };

  const filterItems = () => {
    if (selectedLetters.length === 0) {
      return filteredProducts;
    }
    return filteredProducts.filter((item) =>
      selectedLetters.includes(item.name.charAt(0).toUpperCase())
    );
  };

  const clearSelection = () => {
    setSelectedLetters([]);
  };

  const clearFilter = () => {};

  return (
    <>
      <section className="section section-shaped section-lg">
        <div className="shape products-banner">
          <div className="wrap">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Container className="pt-lg-7">
          <h1>Products</h1>
        </Container>
      </section>
      <section className="my-4">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <section className="responsive-blocks">
                <Button
                  color="primary"
                  outline
                  type="button"
                  className={`nav-link ${
                    selectedLetters.length === 0 ? "active" : ""
                  }`}
                  onClick={() => clearSelection()}
                >
                  All
                </Button>
                {alphabet.map((letter) => (
                  <Button
                    color="primary"
                    outline
                    type="button"
                    key={letter}
                    className={`nav-link ${
                      selectedLetters.includes(letter) ? "active" : ""
                    }`}
                    onClick={() => handleLetterClick(letter)}
                  >
                    {letter}
                  </Button>
                ))}
              </section>
            </Col>
          </Row>

          <Row className="justify-content-center pt-4">
            <Col lg="8">
              <FormGroup>
                <Input placeholder="Search Products" type="text" />
                
              </FormGroup>
            </Col>
            <Col lg="4"><Button>Search</Button></Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <Row className="row-grid">
              {filteredProducts.map((product, index) => (
                <Product
                  product={product}
                  thumbnailColor={thumbnailsColors[index % 5]}
                  key={index}
                ></Product>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
