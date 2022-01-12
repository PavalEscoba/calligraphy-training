import React, { useState, useEffect, useRef } from "react";

const DropdownInput = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const onBodyClick = (e) => {
    // if (ref.current.contains(e.target)) {
    //   return;
    // }
    setOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

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
    <div className="col-sm-12">
      <div className="dropdown-wrapper form-group">
        <label>{label}</label>
        <div className="dropdown" ref={ref}>
          <button
            className="btn btn-info dropdown-toggle"
            type="button"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {selected.label}
          </button>
          <div className={`dropdown-menu ${open ? "show" : ""}`}>
            {renderedItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownInput;
