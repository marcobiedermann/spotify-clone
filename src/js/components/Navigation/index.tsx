import React from 'react';
import { Link } from 'react-router-dom';
import { navigation__list } from './style.module.css';

function Navigation(): JSX.Element {
  return (
    <nav>
      <ul className={navigation__list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/browse">Browse</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
