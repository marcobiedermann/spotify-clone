import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/browse">
          Browse
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
