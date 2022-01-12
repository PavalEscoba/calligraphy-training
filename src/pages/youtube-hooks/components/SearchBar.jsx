import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onSearchInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onTermSubmit(term);
  };

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <label htmlFor="search-input">Video search:</label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="search-input"
          value={term}
          onChange={onSearchInputChange}
        />
      </div>
    </form>
  );
};

export default SearchBar;
