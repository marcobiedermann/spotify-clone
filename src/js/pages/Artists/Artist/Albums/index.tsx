import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Albums from '../../../../components/Albums';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import { useArtistAlbums } from '../../../../hooks/artists';

function AlbumsPage(): JSX.Element {
  const { artistId } = useParams();
  const { data, error, isError, isLoading } = useArtistAlbums(artistId!);

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isLoading) {
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
}

export default AlbumsPage;
