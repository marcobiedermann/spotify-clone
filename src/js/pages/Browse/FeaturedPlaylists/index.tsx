import React from 'react';
import { Helmet } from 'react-helmet';
import { Error, Loader, Playlists } from '../../../components';
import { useBrowseFeaturedPlaylists } from '../../../hooks/browse/featured-playlists';

function FeaturedPlaylistsPage(): JSX.Element {
  const { data, error, isError, isLoading } = useBrowseFeaturedPlaylists();

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isLoading) {
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
}

export default FeaturedPlaylistsPage;
