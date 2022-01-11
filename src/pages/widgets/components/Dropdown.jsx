import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const onBodyClick = (e) => {
    if(ref.current.contains(e.target)) {
      return;
    }
    setOpen(false)
  };

  useEffect(() => {
    document.body.addEventListener('click', onBodyClick, {capture: true});

    return () => {
      document.body.removeEventListener('click', onBodyClick, {capture: true});
    }
  }, [])

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
console.log(ref.current);
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12">
          <h1 className="section-title">Dropdown</h1>
          <p className="subtitle">Dropdown using Hooks (+useRef).</p>
        </div>
        <div className="col-sm-12">
          <label>Select a color</label>
          <div className="dropdown" ref={ref}>
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
