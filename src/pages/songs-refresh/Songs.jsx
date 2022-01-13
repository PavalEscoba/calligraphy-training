import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import { songsList, selectSongReducer } from "./reducers";
import SongList from "./components/SongsList";
import SongDetails from "./components/SongDetails";

const Songs = () => {
  const reducers = combineReducers({
    songs: songsList,
    selectedSong: selectSongReducer,
  });
  return (
    <Provider store={createStore(reducers)}>
      <div className="row">
        <div className="col-sm-7">
          <SongList />
        </div>
        <div className="col-sm-5">
          <SongDetails />
        </div>
      </div>
    </Provider>
  );
};

export default Songs;
