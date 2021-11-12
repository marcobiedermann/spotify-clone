import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';

const PlaylistsPage: FC<RouteChildrenProps> = () => (
  <>
    <Helmet>
      <title>Playlists</title>
    </Helmet>
    Playlists
  </>
);

export default PlaylistsPage;
