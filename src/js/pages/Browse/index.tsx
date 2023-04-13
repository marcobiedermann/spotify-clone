import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { Navigation } from '../../components';

function BrowsePage(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>Browse</title>
      </Helmet>
      <Navigation
        items={[
          {
            id: 'categories',
            name: 'Genres & Moods',
            path: `${pathname}/categories`,
          },
          {
            id: 'featured-playlists',
            name: 'Featured Playlists',
            path: `${pathname}/featured-playlists`,
          },
          {
            id: 'new-releases',
            name: 'New Releases',
            path: `${pathname}/new-releases`,
          },
        ]}
      />
    </>
  );
}

export default BrowsePage;
