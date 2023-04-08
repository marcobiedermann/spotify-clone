import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Album from '../../../components/Album';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import { useAlbum } from '../../../hooks/albums';

function AlbumPage(): JSX.Element {
  const { albumId } = useParams();
  const { data, error } = useAlbum(albumId!);

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
}

export default AlbumPage;
