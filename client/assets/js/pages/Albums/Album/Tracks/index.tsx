import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';

const TracksPage: FC<RouteChildrenProps> = () => (
  <>
    <Helmet>
      <title>Tracks</title>
    </Helmet>
    Tracks
  </>
);

export default TracksPage;
