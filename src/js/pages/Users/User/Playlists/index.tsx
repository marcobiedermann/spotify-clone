import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import Playlists from '../../../../components/Playlists';
import { useUserPlaylists } from '../../../../hooks/users';

function PlaylistsPage(): JSX.Element {
  const { userId } = useParams();
  const { data, error } = useUserPlaylists(userId);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { items } = data;

  return (
    <>
      <Helmet>
        <title>Playlists</title>
      </Helmet>
      <Playlists items={items} />
    </>
  );
}

export default PlaylistsPage;
