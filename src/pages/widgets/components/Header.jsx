import React from 'react';
import Link from './Link'

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">

    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" href="/widgets">Accordion</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/widgets/wiki">Wikipedia</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/widgets/dropdown">Dropdown</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/widgets/translate">Translation</Link>
      </li>

    </ul>
</nav>
  )
};

export default Header;