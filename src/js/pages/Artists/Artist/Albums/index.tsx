import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Albums, Error, Loader } from '../../../../components';
import { useArtistAlbums } from '../../../../hooks/artists';

function AlbumsPage(): JSX.Element {
  const { artistId } = useParams();
  const { data, error, isError, isPending } = useArtistAlbums(artistId!);

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
        <title>Albums</title>
      </Helmet>
      <Albums items={items} />
    </>
  );
}

export default AlbumsPage;
