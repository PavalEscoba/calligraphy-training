import {combineReducers} from 'redux';

const songsListReducer = () => {
  return [
    {title: "Majo Pakalenne", author: "NRM"},
    {title: "Sluckaja Brama", author: "Krama"},
    {title: "Pakul spiavaju", author: "Ulis"},
    {title: "Na Kaliady", author: "Aliaksandr Pamidorau"}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "SELECT_SONG":
      return action.payload
    default:
      return selectedSong
  };
};

export default combineReducers(
  {
    songsList: songsListReducer,
    song: selectedSongReducer
  }
);
