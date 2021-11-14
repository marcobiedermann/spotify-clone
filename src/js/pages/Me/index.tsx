import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';

export type MePageProps = RouteChildrenProps;

function MePage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Me</title>
      </Helmet>
      Me
    </>
  );
}

export default MePage;
