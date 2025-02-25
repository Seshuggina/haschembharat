import React, { useEffect, useRef, useState } from "react";
import { Product } from "./../../components/product/product";
import products from "./../../assets/data/products.json";
import { Container, Row, Col, Button, FormGroup, Input } from "reactstrap";
import "./Products.scss";
import useGlobalStore from "./../../store/global";
import Multiselect from "multiselect-react-dropdown";

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
    if (productsCategory.length > 0 && !productsCategory.includes("All")) {
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
    if (selectedLetter) {
      setSelectedLetters([selectedLetter]);
    }
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

  // function filterObjectsByCharacters(productsList, characters) {
  //   return productsList.filter((obj) => {
  //     const propertiesToCheck = [
  //       // "casNo",
  //       "impurityName",
  //       // "parentAPI",
  //       // "productStatus",
  //       // "category",
  //     ];
  //     const combinedString = propertiesToCheck
  //       .map((prop) => obj[prop] || "")
  //       .join(" ");
  //     return characters.some((char) => combinedString.includes(char));
  //   });
  // }

  function filterObjectsByCharacters(productsList, selectedCharacters) {
    // Return all objects if selectedCharacters is empty or not provided
    if (!selectedCharacters || selectedCharacters.length === 0) {
      return productsList;
    }

    return productsList.filter((obj) => {
      const propertiesToCheck = [
        "impurityName",
        // Add other properties if needed
      ];

      // Extract the first alphabetic character from impurityName (ignoring numbers and special characters)
      const impurityName = obj.impurityName || "";
      const firstAlphabeticChar = impurityName
        .split("")
        .find((char) => /^[a-zA-Z]$/.test(char)); // Find the first alphabetic character

      // Normalize case for comparison
      const normalizedFirstChar = firstAlphabeticChar?.toLowerCase();
      const normalizedCharacters = selectedCharacters.map((char) =>
        char.toLowerCase()
      );

      // Return true if the first alphabet matches any of the selected characters
      return (
        normalizedFirstChar &&
        normalizedCharacters.includes(normalizedFirstChar)
      );
    });
  }

  const clearSelection = () => {
    setSelectedLetters([]);
  };

  const searchProducts = (value) => {
    searchTextRef.current = value;
    filterProducts();
  };
  const handleCategoriesSelect = (categories) => {
    selectedCategoriesList.current = categories;
    updateProductsCategory([...selectedCategoriesList.current]);
    filterProducts();
  };

  const clearCategory = () => {
    handleCategoriesSelect([]);
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
            <Col lg="12">
              <div className="d-flex align-items-center position-relative">
                <Input
                  placeholder="Search Products"
                  onChange={(event) => searchProducts(event.target.value)}
                  type="text"
                  value={searchTextRef.current}
                />
                <Button className="position-within-input" disabled={!searchTextRef.current} color="danger" onClick={() => searchProducts("")}>
                  x
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="pt-4">
            <Col lg="10">
              <div className="d-flex align-items-center">
                <h5 className="mb-0 text-nowrap">Selected Category: </h5>
                &nbsp;
                <Multiselect
                  options={categoriesList} // Options to display in the dropdown
                  selectedValues={selectedCategoriesList.current} // Preselected value to persist in dropdown
                  onSelect={handleCategoriesSelect} // Function will trigger on select event
                  onRemove={handleCategoriesSelect} // Function will trigger on remove event
                  displayValue="name" // Property name to display in the dropdown options
                  isObject={false}
                />
                <Button color="danger" disabled={selectedCategoriesList.current.length ===0} className="ml-4" onClick={clearCategory}>
                  CLEAR
                </Button>
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
