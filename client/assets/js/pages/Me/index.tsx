import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';

const MePage: FC<RouteChildrenProps> = () => {
  return (
    <>
      <Helmet>
        <title>Me</title>
      </Helmet>
      Me
    </>
  );
};

export default MePage;
