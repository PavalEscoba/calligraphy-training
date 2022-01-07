import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducer";
import SongsList from "./components/SongList.jsx";
import SongDetails from "./components/SongDetails.jsx";

const Songs = () => {
  return (
    <Provider store={createStore(reducers)}>
      <div className="song">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="title">Songs</h1>
              <p>Click on a song to see details.</p>
            </div>
            <div className="col-5">{<SongsList />}</div>
            <div className="col-7">{<SongDetails />}</div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default Songs;
