import React, { useEffect, useState } from "react";
import { Product } from "./../../components/product/product";
import products from "./../../assets/data/products.json";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Input,
  Badge,
} from "reactstrap";
import "./Products.scss";
import useGlobalStore from "./../../store/global";

export const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
  const [selectedLetters, setSelectedLetters] = useState([]);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const categoryType = "";
  const productsCategory = useGlobalStore((state) => state.productsCategory);
  const updateProductsCategory = useGlobalStore(
    (state) => state.updateProductsCategory
  );
  console.log("productsCategory", productsCategory);

  useEffect(() => {
    filterItems();
  }, [selectedLetters]);

  const handleLetterClick = (letter) => {
    setSelectedLetters((prevSelectedLetters) =>
      prevSelectedLetters.includes(letter)
        ? prevSelectedLetters.filter((l) => l !== letter)
        : [...prevSelectedLetters, letter]
    );
  };

  const filterItems = () => {
    let filteredItems = products;
    // if (categoryType && !ignoreCategory) {
    //   filteredItems = filteredItems.filter(
    //     (product) =>
    //       product.category.toLowerCase() === categoryType.toLowerCase()
    //   );
    // }
    if (selectedLetters.length > 0) {
      filteredItems = filteredItems.filter((item) => {
        console.log("item", item);
        console.log("selectedLetters[0].toLowerCase()", selectedLetters[0].toLowerCase());
        // item.impurityName
        //   .toLowerCase()
        //   .includes(selectedLetters[0].toLowerCase());
      });
    }
    setFilteredProducts(filteredItems);
  };

  const clearSelection = () => {
    setSelectedLetters([]);
  };

  const clearCategory = () => {
    updateProductsCategory("");
  };

  return (
    <>
      <section className="section section-shaped section-lg">
        <div className="shape products-banner">
          <div className="wrap">
            {Array(100)
              .fill()
              .map((_, i) => (
                <div key={i}></div>
              ))}
          </div>
        </div>
        <Container className="pt-lg-7">
          <h1 className="text-white">Products</h1>
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
                  onClick={clearSelection}
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
            <Col lg="4">
              <Button>Search</Button>
            </Col>
          </Row>

          <Row className="pt-4">
            <Col lg="7">
              <h5 className="mb-0">
                Selected Category: &nbsp;
                {productsCategory && (
                  <Badge color="primary">
                    {productsCategory}{" "}
                    <span onClick={clearCategory}>&times;</span>
                  </Badge>
                )}
              </h5>
            </Col>
            <Col lg="5">
              <h5 className="mb-0 text-right">
                Products Count: &nbsp; {filteredProducts.length}
              </h5>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <div className="grid-items-equal-height">
              {filteredProducts.map((product, index) => (
                <Product
                  product={product}
                  thumbnailColor={
                    thumbnailsColors[index % thumbnailsColors.length]
                  }
                  key={index + 1}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
