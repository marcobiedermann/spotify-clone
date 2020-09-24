import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';

const AlbumsPage: FC<RouteChildrenProps> = (props) => {
  return (
    <>
      <Helmet>
        <title>Albums</title>
      </Helmet>
      Albums
    </>
  );
};

export default AlbumsPage;
