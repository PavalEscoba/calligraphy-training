import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <h1 className='title'>List of made tasks:</h1>
      <Link to='/counter' className='link'>Counter</Link>
      <Link to='/songs' className='link'>Songs</Link>
      <Link to='/calligraphy' className='link'>Calligraphy</Link>
    </>
  );
};

export default Home;