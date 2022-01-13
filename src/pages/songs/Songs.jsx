import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import {songsList, selectSongReducer} from './reducers'
import SongList from './components/SongsList'

const Songs = () => {
  const reducers = combineReducers({songs: songsList, selectedSong: selectSongReducer})
  return (
    <Provider store={createStore(reducers)}>
      <p>Songs</p>
      <SongList />
    </Provider>
  )
};

export default Songs;

