import React, { useState, ref } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import options from "./data";
import { Button } from 'reactstrap';
import "./TypeaheadSearch.scss";

export const TypeaheadSearch = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Typeahead
        className="typeaheadSearch"
        onChange={setSelected}
        options={options}
        placeholder="Search for a Product"
        selected={selected}
        ref={ref}
        id="typeahead"
      />
      <Button className="clearButton" color="link" onClick={() => ref.current?.clear()}>&times;</Button>
    </>
  );
};
