import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(): JSX.Element {
  return (
    <nav>
      <ul>
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
