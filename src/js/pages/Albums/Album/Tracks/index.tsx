import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';

export type TracksPageProps = RouteChildrenProps;

function TracksPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Tracks</title>
      </Helmet>
      Tracks
    </>
  );
}

export default TracksPage;
