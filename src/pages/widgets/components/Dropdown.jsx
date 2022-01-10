import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const renderedItems = options.map((option) => {
    if (option === selected) {
      return null;
    }

    return (
      <button
        key={option.value}
        className="dropdown-item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </button>
    );
  });

  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12">
          <h1 className="section-title">Dropdown</h1>
          <p className="subtitle">Dropdown using Hooks (+useRef).</p>
        </div>
        <div className="col-sm-12">
          <label>Select a color</label>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              onClick={() => {
                setOpen(!open);
              }}
            >
              selected: {selected.label}
            </button>
            <div className={`dropdown-menu ${open ? "show" : ""}`}>
              {renderedItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
