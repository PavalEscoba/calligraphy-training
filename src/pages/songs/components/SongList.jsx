import {connect} from 'react-redux';
import selectSong from '../actions';

const SongsList = (props) => {
  const list = props.songs.map(song => {
    return ( 
    <li className='list-group-item list-group-item-action' onClick={()=> props.selectSong(song)} key={song.title}> 
      <span className='song__title'>{song.author}</span> - <span>{song.title}</span>
    </li>);
  });

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