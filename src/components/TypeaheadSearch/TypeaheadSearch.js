import React, { useState, useRef } from "react";
import { Typeahead, Menu, useItem, withItem } from "react-bootstrap-typeahead";
import { Button } from "reactstrap";
import "./TypeaheadSearch.scss";
import { Link } from "react-router-dom";
import products from "./../../assets/data/products.json";

export const TypeaheadSearch = () => {
  const [selected, setSelected] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [options, setOptions] = useState(products);
  const inputRef = useRef(null);

  const handleLetterClick = (letter) => {
    setSelectedLetters((prevSelectedLetters) =>
      prevSelectedLetters.includes(letter)
        ? prevSelectedLetters.filter((l) => l !== letter)
        : [...prevSelectedLetters, letter]
    );
  };

  const handleSearch = (searchTxt) => {
    const filteredProducts = products.filter((product) =>
      product.impurityName.toLowerCase().includes(searchTxt.toLowerCase())
    );
    setOptions(filteredProducts);
  };

  const clearSelection = () => {
    setSelectedLetters([]);
  };
  const clearFilter = () => {
    if (inputRef.current) {
      inputRef.current.clear();
    }
  };

  return (
    <>
      <Typeahead
        className="typeaheadSearch"
        onChange={setSelected}
        options={options}
        placeholder="Search for a Product"
        selected={selected}
        ref={inputRef}
        id="typeahead"
        // onSearch={handleSearch}
        filterBy={["impurityName"]}
        renderMenu={(results, menuProps) => (
          <>
            <Menu {...menuProps}>
              <div className="responsive-blocks px-2 pb-2 mb-2 border-bottom">
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
              </div>
              {results.map((result, index) => (
                <li option={result} position={index}>
                  <Link className="dropdown-item" to="/products">
                    {result.impurityName}
                  </Link>
                </li>
              ))}
            </Menu>
          </>
        )}
      />
      <Button
        className="clearButton"
        color="link"
        onClick={() => clearFilter()}
      >
        &times;
      </Button>
    </>
  );
};
