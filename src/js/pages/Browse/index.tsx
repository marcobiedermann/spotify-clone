import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function BrowsePage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Browse</title>
      </Helmet>
      <ul>
        <li>
          <Link to="/browse/categories">Genres & Moods</Link>
        </li>
        <li>
          <Link to="/browse/featured-playlists">Featured Playlists</Link>
        </li>
        <li>
          <Link to="/browse/new-releases">New Releases</Link>
        </li>
      </ul>
    </>
  );
}

export default BrowsePage;
