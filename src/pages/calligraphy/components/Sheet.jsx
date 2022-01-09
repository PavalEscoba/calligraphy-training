import React from "react";
import { connect } from "react-redux";

const Sheet = ({ nibWidth }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="sheet">
          <p>You've chosen nib width: {nibWidth.toString()}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { nibWidth: state.nibWidth };
};

export default connect(mapStateToProps)(Sheet);
