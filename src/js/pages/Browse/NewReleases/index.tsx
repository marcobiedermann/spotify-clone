import React from 'react';
import { Helmet } from 'react-helmet';
import { Albums, Error, Loader } from '../../../components';
import { useBrowseNewReleases } from '../../../hooks/browse/new-releases';

function NewReleasesPage(): JSX.Element {
  const { data, error, isError, isPending } = useBrowseNewReleases();

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isPending) {
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
