import React from "react";
import { connect } from "react-redux";

const SongDetails = (props) => {
  // if (song) {
  //   return (
  //     <p>
  //       {" "}
  //       {song.title} {song.author}{" "}
  //     </p>
  //   );
  // } else {
  //   return;
  // }
  return !props.selectedSong ? (
    <p>Choose a song</p>
  ) : (
    <p>You've chosen {props.selectedSong.title}</p>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetails);
