import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to={routes.INDEX}>
          Home
        </Link>
      </li>
      <li>
        <Link to={routes.BROWSE}>
          Browse
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
