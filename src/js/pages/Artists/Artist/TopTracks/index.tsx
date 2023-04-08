import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import AlbumTracks from '../../../../components/AlbumTracks';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import { useArtistTopTracks } from '../../../../hooks/artists';

function TopTracksPage(): JSX.Element {
  const { artistId } = useParams();
  const { data, error } = useArtistTopTracks(artistId!);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { tracks } = data;

  return (
    <>
      <Helmet>
        <title>Top Tracks</title>
      </Helmet>
      <AlbumTracks items={tracks} />
    </>
  );
}

export default TopTracksPage;
