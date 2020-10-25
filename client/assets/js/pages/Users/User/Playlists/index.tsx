import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import Playlists from '../../../../components/Playlists';

interface Params {
  userId: string;
}

const PlaylistsPage: FC<RouteChildrenProps> = () => {
  const { userId } = useParams<Params>();
  const { data, error } = useSWR(`/v1/users/${userId}/playlists`);

  console.log({ data });

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
};

export default PlaylistsPage;
