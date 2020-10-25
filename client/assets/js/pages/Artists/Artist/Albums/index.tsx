import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Albums from '../../../../components/Albums';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';

interface Params {
  artistId: string;
}

const AlbumsPage: FC<RouteChildrenProps> = () => {
  const { artistId } = useParams<Params>();
  const { data, error } = useSWR(`/v1/artists/${artistId}/albums`);

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
        <title>Albums</title>
      </Helmet>
      <Albums items={items} />
    </>
  );
};

export default AlbumsPage;
