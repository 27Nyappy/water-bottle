import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Water Bottle Challenge</h1>
    <nav>
      <Link to="/">Challenge</Link>
      <Link to="/solution">Solution</Link>
    </nav>
  </header>
);

export default Header;