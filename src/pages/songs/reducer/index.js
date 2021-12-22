import {combineReducers} from 'redux';

const songsListReducer = () => {
  return [
    {title: "Majo Pakalenne", author: "NRM", duration: "4:09"},
    {title: "Sluckaja Brama", author: "Krama", duration: "3:28"},
    {title: "Pakul spiavaju", author: "Ulis", duration: "4:43"},
    {title: "Na Kaliady", author: "Aliaksandr Pamidorau", duration: "4:49"}
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
    selectedSong: selectedSongReducer
  }
);
