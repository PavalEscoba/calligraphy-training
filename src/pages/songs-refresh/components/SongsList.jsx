import React from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions/index";

class SongList extends React.Component {
  render() {
    const renderedListItems = this.props.songs.map((song) => {
      return (
        <li
          className="list-group-item list-group-item-action"
          key={song.title}
          onClick={() => this.props.selectSong(song)}
        >
          <span className="song__title">{song.author}</span> -{" "}
          <span>{song.title}</span>
        </li>
      );
    });
    return <ul className="list-group">{renderedListItems}</ul>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};
export default connect(mapStateToProps, {
  selectSong,
})(SongList);
