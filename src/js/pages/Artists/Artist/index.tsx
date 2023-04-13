import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useParams } from 'react-router-dom';
import { Artist, Error, Loader, Navigation } from '../../../components';
import { useArtist } from '../../../hooks/artists';

function ArtistPage(): JSX.Element {
  const { pathname } = useLocation();
  const { artistId } = useParams();
  const { data, error, isError, isLoading } = useArtist(artistId!);

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
      <Artist {...data} />
      <Navigation
        items={[
          {
            id: 'albums',
            name: 'Albums',
            path: `${pathname}/albums`,
          },
          {
            id: 'related-artists',
            name: 'Related Artists',
            path: `${pathname}/related-artists`,
          },
          {
            id: 'top-tracks',
            name: 'Top Tracks',
            path: `${pathname}/top-tracks`,
          },
        ]}
      />
    </>
  );
}

export default ArtistPage;
