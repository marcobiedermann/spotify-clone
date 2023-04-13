import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Artists, Error, Loader } from '../../../../components';
import { useArtistRelatedArtists } from '../../../../hooks/artists';

function RelatedArtistsPage(): JSX.Element {
  const { artistId } = useParams();
  const { data, error, isError, isLoading } = useArtistRelatedArtists(artistId!);

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isLoading) {
    return <Loader />;
  }

  const { artists } = data;

  return (
    <>
      <Helmet>
        <title>Related Artists</title>
      </Helmet>
      <Artists artists={artists} />
    </>
  );
}

export default RelatedArtistsPage;
