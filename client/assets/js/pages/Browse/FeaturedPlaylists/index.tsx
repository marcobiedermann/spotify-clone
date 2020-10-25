import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';
import useSWR from 'swr';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import Playlists from '../../../components/Playlists';

const FeaturedPlaylistsPage: FC<RouteChildrenProps> = () => {
  const { data, error } = useSWR('/v1/browse/featured-playlists');

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { playlists } = data;

  return (
    <>
      <Helmet>
        <title>Featured Playlists</title>
      </Helmet>
      <Playlists items={playlists.items} />
    </>
  );
};

export default FeaturedPlaylistsPage;
