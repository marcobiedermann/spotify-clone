import React from 'react';
import { Helmet } from 'react-helmet';
import Albums from '../../../components/Albums';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import { useBrowseNewReleases } from '../../../hooks/browse/new-releases';

function NewReleasesPage(): JSX.Element {
  const { data, error } = useBrowseNewReleases();

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
}

export default NewReleasesPage;
