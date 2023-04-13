import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Album, Error, Loader } from '../../../components';
import { useAlbum } from '../../../hooks/albums';

function AlbumPage(): JSX.Element {
  const { albumId } = useParams();
  const { data, error, isError, isLoading } = useAlbum(albumId!);

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isLoading) {
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
}

export default AlbumPage;
