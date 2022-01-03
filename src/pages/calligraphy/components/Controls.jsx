import React from "react";
import { connect } from "react-redux";
import { setNibWidth } from "../actions";

const Controls = ({ setNibWidth }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <label>Choose a pen to write:</label>
        <select
          className="custom-select"
          onChange={(e) => {
            setNibWidth(e.target.value);
          }}
        >
          <option value="3.6">Parallel Pen 3.6mm (recommended)</option>
          <option value="2.4">Parallel Pen 2.4mm</option>
          <option value="1.5">Parallel Pen 1.5mm</option>
        </select>
      </div>
    </div>
  );
};

export default connect(null, { setNibWidth })(Controls);
