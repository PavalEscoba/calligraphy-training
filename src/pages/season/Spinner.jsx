import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <span className="spinner-text text-primary">
        {" "}
        Please accept location request
      </span>
    </div>
  );
};

export default Spinner;
