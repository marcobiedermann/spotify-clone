import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Error from '../../../../../components/Error';
import Loader from '../../../../../components/Loader';
import Playlists from '../../../../../components/Playlists';

interface Params {
  categoryId: string;
}

const PlaylistsPage: FC<RouteChildrenProps> = () => {
  const { categoryId } = useParams<Params>();
  const { data, error } = useSWR(`/v1/browse/categories/${categoryId}/playlists`);

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
        <title>Playlists</title>
      </Helmet>
      <Playlists items={playlists.items} />
    </>
  );
};

export default PlaylistsPage;
