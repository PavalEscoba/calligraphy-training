import {connect} from 'react-redux';
import selectSong from '../actions';

const SongsList = (props) => {
  console.log(props);
  const list = props.songs.map(song => {
    return ( <li className='list-group-item'> {song.title}</li>)
  })
  return(
    <ul className="list-group">
      {list}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {songs: state.songsList};
};

export default connect(mapStateToProps, {selectSong})(SongsList);