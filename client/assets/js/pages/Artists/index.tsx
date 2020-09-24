import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';

const ArtistsPage: FC<RouteChildrenProps> = () => {
  return (
    <>
      <Helmet>
        <title>Artists</title>
      </Helmet>
      Artists
    </>
  );
};

export default ArtistsPage;
