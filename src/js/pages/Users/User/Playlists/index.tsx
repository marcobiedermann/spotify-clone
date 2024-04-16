import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Error, Loader, Playlists } from '../../../../components';
import { useUsersPlaylists } from '../../../../hooks/users';

function PlaylistsPage(): JSX.Element {
  const { userId } = useParams();
  const { data, error, isError, isPending } = useUsersPlaylists(userId!);

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isPending) {
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
