import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Album from '../../../components/Album';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

interface Params {
  albumId: string;
}

const AlbumPage: FC<RouteChildrenProps> = () => {
  const { albumId } = useParams<Params>();
  const { data, error } = useSWR(`/v1/albums/${albumId}`);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { name } = data;

  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <Album {...data} />
    </>
  );
};

export default AlbumPage;
