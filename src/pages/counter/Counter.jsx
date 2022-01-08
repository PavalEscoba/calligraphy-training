import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducer";
import Btns from "./components/Btns";
import Output from "./components/Output";

const Counter = () => {
  return (
    <Provider store={createStore(reducer)}>
      <div className="counter">
        <div className="row align-items-center">
          <div className="col-12">
            <h1 className="section-title">Counter.</h1>
            <p className="subtitle">Use buttons to count:</p>
          </div>
          <div className="col-3">
            <Btns />
          </div>
          <div className="col-6">
            <Output />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default Counter;
