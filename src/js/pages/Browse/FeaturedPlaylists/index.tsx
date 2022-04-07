import React from 'react';
import { Helmet } from 'react-helmet';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import Playlists from '../../../components/Playlists';
import { useBrowseFeaturedPlaylists } from '../../../hooks/browse/featured-playlists';

function FeaturedPlaylistsPage(): JSX.Element {
  const { data, error } = useBrowseFeaturedPlaylists();

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
}

export default FeaturedPlaylistsPage;
