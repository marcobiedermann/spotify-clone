import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';

export type PlaylistsPageProps = RouteChildrenProps;

function PlaylistsPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Playlists</title>
      </Helmet>
      Playlists
    </>
  );
}

export default PlaylistsPage;
