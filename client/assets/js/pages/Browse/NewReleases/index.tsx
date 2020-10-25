import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';
import useSWR from 'swr';
import Albums, { AlbumsProps } from '../../../components/Albums';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

export interface NewReleasesPageProps extends RouteChildrenProps {
  accessToken: string;
  albums: AlbumsProps;
  error: {
    message: string;
  };
  fetchNewReleases: any;
  isLoading: boolean;
}

const NewReleasesPage: FC<RouteChildrenProps> = () => {
  const { data, error } = useSWR('/v1/browse/new-releases');

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { albums } = data;

  return (
    <>
      <Helmet>
        <title>New Releases</title>
      </Helmet>
      <Albums items={albums.items} />
    </>
  );
};

export default NewReleasesPage;
