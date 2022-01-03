import React from 'react';
import { connect } from 'react-redux';
import { resetDetails } from '../actions/index'

const SongDetails = (props) => {
  const getFullInfo = (song) => {
    return (
      <>
      <h4 className="song__details-header">
        Song's details <button type="button" className="close" aria-label="Close" onClick={()=>{props.resetDetails()}}>
          <span aria-hidden="true">&times;</span>
        </button>
      </h4> 
        <p>Author: <span className="song__title">{song.author}</span></p>
        <p>Title: <span className="song__title">{song.title}</span></p>
        <p>Duration: <span className="song__title">{song.duration}</span></p>
      </>
    )
  }
  return (
    <div>{!props.selectedSong ? <span>Please select a song</span>: getFullInfo(props.selectedSong)}</div>
  );
};

const mapStateToProps = (state) => {
  return {selectedSong: state.selectedSong}
}
export default connect(mapStateToProps, {resetDetails})(SongDetails);