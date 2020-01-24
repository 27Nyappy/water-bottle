import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header}>
    <h1>Water Bucket Challenge</h1>
    <nav>
      <Link to="/">Challenge</Link>
      <Link to="/solution">Solution</Link>
    </nav>
  </header>
);

export default Header;