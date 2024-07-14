import React, { useState, useRef } from "react";
import { Typeahead, Menu, useItem, withItem } from "react-bootstrap-typeahead";
import { Button } from "reactstrap";
import "./TypeaheadSearch.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import products from "./../../assets/data/products.json";
import useGlobalStore from "./../../store/global";

export const TypeaheadSearch = (props) => {
  const { onSubmit, onInputChange } = props;
  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState(products);
  const inputRef = useRef(null);
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const handleSelectionChange = (selectedOptions) => {
    if (selectedOptions) {
      navigate(`productDetails/${selectedOptions.Sno}`);
    }
  };

  const handleInputChange = (text) => {
    setInputText(text);
    onInputChange(text);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Typed text:", inputText);
      onSubmit(inputText);
      // Perform any action you want with the input text here
    }
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
        onInputChange={handleInputChange}
        options={options}
        placeholder="Enter #CAS No, Name, Category, Molecular Formula"
        selected={selected}
        ref={inputRef}
        id="typeahead"
        filterBy={"impurityName"}
        labelKey={(option) =>
          `${option.impurityName} ${option.parentAPI} ${option.casNo} ${option.category} ${option.molecularFormula} ${option.synonym}`
        }
        renderMenu={(results, menuProps) => (
          <>
            <Menu {...menuProps}>
              {results.map((result, index) => (
                <li
                  key={index}
                  className="dropdown-item cursor-pointer"
                  option={result}
                  position={index}
                  onClick={() => handleSelectionChange(result)}
                >
                  <strong>{result.impurityName}</strong>,{" "}
                  <span>{result.parentAPI}</span>{" "}
                  <small>{`(${result.category})`}</small>
                  <br />
                  <span>{result.casNo}</span>,{" "}
                  <span>{result.productDetails?.molecularFormula}</span>,{" "}
                  <span>{result.productDetails?.synonym}</span>
                </li>
              ))}
            </Menu>
          </>
        )}
        onKeyDown={handleKeyDown}
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
