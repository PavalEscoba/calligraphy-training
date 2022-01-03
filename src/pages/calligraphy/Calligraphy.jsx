import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers";
import BackBtn from "../../components/BackBtn";
import Controls from "./components/Controls";
import Sheet from "./components/Sheet";

const Calligraphy = () => {
  return (
    <Provider store={createStore(reducers)}>
      <React.StrictMode>
        <BackBtn />
        <Controls />
        <Sheet />
      </React.StrictMode>
    </Provider>
  );
};

export default Calligraphy;
