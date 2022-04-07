import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Albums from '../../../../components/Albums';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import { useArtistAlbums } from '../../../../hooks/artists';

function AlbumsPage(): JSX.Element {
  const { artistId } = useParams();
  const { data, error } = useArtistAlbums(artistId);

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
}

export default AlbumsPage;
