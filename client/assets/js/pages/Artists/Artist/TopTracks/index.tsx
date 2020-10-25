import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import Tracks from '../../../../components/Tracks';

interface Params {
  artistId: string;
}

const TopTracksPage: FC<RouteChildrenProps> = () => {
  const { artistId } = useParams<Params>();
  const { data, error } = useSWR(`/v1/artists/${artistId}/top-tracks?market=DE`);

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
      <Tracks tracks={tracks} />
    </>
  );
};

export default TopTracksPage;
