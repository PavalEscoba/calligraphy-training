import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({selectedSong}) => {
  const getFullInfo = (song) => {
    return (
      <>
      <h4 className="song__details-header">Song's details</h4>
        <p>Author: <span className="song__title">{song.author}</span></p>
        <p>Title: <span className="song__title">{song.title}</span></p>
        <p>Duration: <span className="song__title">{song.duration}</span></p>
      </>
    )
  }
  return (
    <div>{!selectedSong ? <span>Please select a song</span>: getFullInfo(selectedSong)}</div>
  );
};

const mapStateToProps = (state) => {
  return {selectedSong: state.selectedSong}
}
export default connect(mapStateToProps)(SongDetails);