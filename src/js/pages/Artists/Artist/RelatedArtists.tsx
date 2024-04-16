/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useArtistRelatedArtists } from '../../../hooks/artists';
import { Artists, Error, Loader, Section } from '../../../components';

function RelatedArtists() {
  const { pathname } = useLocation();
  const { artistId } = useParams();
  const { data, error, isError, isPending } = useArtistRelatedArtists(artistId!, {
    limit: 9,
  });

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isPending) {
    return <Loader />;
  }

  const { artists } = data;

  return (
    <Section>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: '1em',
          justifyContent: 'space-between',
        }}
      >
        <h2>Fans also like</h2>
        <p>
          <Link to={`${pathname}/related-artists`}>Show all</Link>
        </p>
      </div>
      <Artists artists={artists} />
    </Section>
  );
}

export default RelatedArtists;
