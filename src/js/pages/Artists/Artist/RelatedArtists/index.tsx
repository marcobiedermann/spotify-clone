import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Artists from '../../../../components/Artists';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import { useArtistRelatedArtists } from '../../../../hooks/artists';

function RelatedArtistsPage(): JSX.Element {
  const { artistId } = useParams();
  const { data, error } = useArtistRelatedArtists(artistId!);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
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
