export const songsList = () => {
  return [
    { title: "Majo Pakalenne", author: "NRM", duration: "4:09" },
    { title: "Sluckaja Brama", author: "Krama", duration: "3:28" },
    { title: "Pakul spiavaju", author: "Ulis", duration: "4:43" },
    { title: "Na Kaliady", author: "Aliaksandr Pamidorau", duration: "4:49" },
  ];
};

export const selectSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;
    default:
      return selectedSong;
  }
};
