import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Link to='/home'>Home</Link>
      <Link to='/counter'>Counter</Link>
      <Link to='/calligraphy'>Calligraphy</Link>
    </>
  )
};

export default Header;