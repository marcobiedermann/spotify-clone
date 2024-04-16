/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useArtistTopTracks } from '../../../hooks/artists';
import { AlbumTracks, Error, Loader, Section } from '../../../components';

function TopTracks() {
  const { pathname } = useLocation();
  const { artistId } = useParams();
  const { data, error, isError, isPending } = useArtistTopTracks(artistId!);

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isPending) {
    return <Loader />;
  }

  const { tracks } = data;

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
        <h2>Popular</h2>
        <p>
          <Link to={`${pathname}/top-tracks`}>See more</Link>
        </p>
      </div>
      <AlbumTracks items={tracks} />
    </Section>
  );
}

export default TopTracks;
