import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';

const IndexPage: FC<RouteChildrenProps> = () => (
  <>
    <Helmet>
      <title>Index</title>
    </Helmet>
    Hello, world!
  </>
);

export default IndexPage;
