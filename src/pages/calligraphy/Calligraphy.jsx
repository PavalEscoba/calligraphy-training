import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers";
import Controls from "./components/Controls";
import Sheet from "./components/Sheet";

const Calligraphy = () => {
  return (
    <Provider store={createStore(reducers)}>
      <React.StrictMode>
        <Controls />
        <Sheet />
      </React.StrictMode>
    </Provider>
  );
};

export default Calligraphy;
