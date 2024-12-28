import React, { useEffect, useRef, useState } from "react";
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
import Multiselect from "multiselect-react-dropdown";

const categoriesList = [
  "APIs",
  "Impurities",
  "Metabolities",
  "Nitrosamines",
  "Building blocks",
];
export const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
  const [selectedLetters, setSelectedLetters] = useState([]);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let categoriesList = useGlobalStore((state) => state.productsCategoryList);
  let productsCategory = useGlobalStore((state) => state.productsCategory);
  let selectedLetter = useGlobalStore((state) => state.selectedLetter);
  let searchedTxt = useGlobalStore((state) => state.searchedText);
  const updateProductsCategory = useGlobalStore(
    (state) => state.updateProductsCategory
  );
  const searchTextRef = useRef("");
  const selectedCategoriesList = useRef([]);

  useEffect(() => {
    if (searchedTxt) {
      searchTextRef.current = searchedTxt;
    }
    filterProducts();
  }, [selectedLetters, productsCategory, selectedLetter]);

  useEffect(() => {
    if (productsCategory.length > 0) {
      selectedCategoriesList.current = productsCategory;
    }
    const unsubscribe = useGlobalStore.subscribe((state) => {
      searchTextRef.current = state.searchedText;
      filterProducts();
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
      updateProductsCategory([]);
    };
  }, []);

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
    let filteredProductsList = products; // Fetch more products for better demo

    // Filter by categories
    if (
      selectedCategoriesList.current &&
      selectedCategoriesList.current.length > 0
    ) {
      filteredProductsList = filteredProductsList.filter((obj) =>
        obj.category.some((category) =>
          selectedCategoriesList.current.includes(category)
        )
      );
    }

    // Filter by selected letters
    if (selectedLetters.length > 0) {
      filteredProductsList = filterObjectsByCharacters(
        filteredProductsList,
        selectedLetters
      );
    }

    // Filter by search text
    if (searchTextRef.current) {
      filteredProductsList = filteredProductsList.filter((obj) => {
        const allProperties = JSON.stringify(obj).toLowerCase();
        return allProperties.includes(searchTextRef.current.toLowerCase());
      });
    }

    setFilteredProducts(filteredProductsList);
  };

  function filterObjectsByCharacters(productsList, characters) {
    return productsList.filter((obj) => {
      const propertiesToCheck = [
        // "casNo",
        "impurityName",
        // "parentAPI",
        // "productStatus",
        // "category",
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

  const searchProducts = (e) => {
    searchTextRef.current = e.target.value;
    filterProducts();
  };
  const handleCategoriesSelect = (categories) => {
    selectedCategoriesList.current = categories;
    updateProductsCategory([...selectedCategoriesList.current]);
    filterProducts();
  };

  return (
    <>
      <section className="section section-shaped section-sm">
        <div className="shape products-banner">
          <div className="wrap">
            {Array(100)
              .fill()
              .map((_, i) => (
                <div key={i}></div>
              ))}
          </div>
        </div>
        <Container className="pt-lg-7 pt-sm-7 pt-xs-7">
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
                  value={searchTextRef.current}
                />
              </FormGroup>
            </Col>
            <Col lg="4">
              <Button>Search</Button>
            </Col>
          </Row>

          <Row className="pt-4">
            <Col lg="10">
              <div className="d-flex align-items-center">
                <h5 className="mb-0">Selected Category: </h5>
                &nbsp;
                <Multiselect
                  options={categoriesList} // Options to display in the dropdown
                  selectedValues={selectedCategoriesList.current} // Preselected value to persist in dropdown
                  onSelect={handleCategoriesSelect} // Function will trigger on select event
                  onRemove={handleCategoriesSelect} // Function will trigger on remove event
                  displayValue="name" // Property name to display in the dropdown options
                  isObject={false}
                />
              </div>
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
