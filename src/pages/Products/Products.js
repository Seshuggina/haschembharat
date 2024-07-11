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
import { FixedSizeGrid as Grid } from "react-window";
import "./Products.scss";
import useGlobalStore from "./../../store/global";

export const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
  const [selectedLetters, setSelectedLetters] = useState([]);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let productsCategory = useGlobalStore((state) => state.productsCategory);
  let selectedLetter = useGlobalStore((state) => state.selectedLetter);
  const updateProductsCategory = useGlobalStore(
    (state) => state.updateProductsCategory
  );

  useEffect(() => {
    filterProducts();
  }, [selectedLetters, productsCategory, selectedLetter, searchText]);

  useEffect(() => {
    setSelectedLetters([selectedLetter]);
  }, [selectedLetter]);

  const handleLetterClick = (letter) => {
    setSelectedLetters((prevSelectedLetters) => {
      const newSelectedLetters = prevSelectedLetters.includes(letter)
        ? prevSelectedLetters.filter((l) => l !== letter)
        : [...prevSelectedLetters, letter];

      if (newSelectedLetters.includes("") && newSelectedLetters.length > 1) {
        return newSelectedLetters.filter((l) => l !== "");
      }

      return newSelectedLetters;
    });
  };

  const filterProducts = () => {
    let filteredProductsList = products.slice(0, 1000); // Fetch more products for better demo
    if (productsCategory) {
      filteredProductsList = filteredProductsList.filter(
        (obj) => obj.category === productsCategory
      );
    }
    if (selectedLetters.length > 0) {
      filteredProductsList = filterObjectsByCharacters(
        filteredProductsList,
        selectedLetters
      );
    }
    if (searchText) {
      filteredProductsList = filteredProductsList.filter((obj) => {
        const allProperties = JSON.stringify(obj).toLowerCase();
        return allProperties.includes(searchText.toLowerCase());
      });
    }

    setFilteredProducts(filteredProductsList);
  };

  function filterObjectsByCharacters(productsList, characters) {
    return productsList.filter((obj) => {
      const propertiesToCheck = [
        "casNo",
        "impurityName",
        "parentAPI",
        "productStatus",
        "category",
      ];
      const combinedString = propertiesToCheck
        .map((prop) => obj[prop] || "")
        .join(" ");
      return characters.some((char) => combinedString.includes(char));
    });
  }

  const clearSelection = () => {
    setSelectedLetters([]);
  };

  const clearCategory = () => {
    updateProductsCategory("");
  };

  const searchProducts = (e) => {
    setSearchText(e.target.value);
  };

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 3 + columnIndex;
    if (index >= filteredProducts.length) return null;
    const product = filteredProducts[index];

    return (
      <div style={style} className="d-flex justify-content-center">
        <Product
          product={product}
          thumbnailColor={thumbnailsColors[index % thumbnailsColors.length]}
          key={product.Sno}
        />
      </div>
    );
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
                <Input
                  placeholder="Search Products"
                  onChange={searchProducts}
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col lg="4">
              <Button>Search</Button>
            </Col>
          </Row>

          <Row className="pt-4">
            <Col lg="10">
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
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            {/* <Grid
              columnCount={3}
              columnWidth={400}
              height={800}
              rowCount={Math.ceil(filteredProducts.length / 3)}
              rowHeight={500}
              width={1200}
            >
              {Cell}
            </Grid> */}

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
