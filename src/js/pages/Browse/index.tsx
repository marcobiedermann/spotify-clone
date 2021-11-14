import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, RouteChildrenProps } from 'react-router-dom';

export type BrowsePageProps = RouteChildrenProps;

function BrowsePage(props: BrowsePageProps): JSX.Element {
  const { match } = props;

  return (
    <>
      <Helmet>
        <title>Browse</title>
      </Helmet>
      <ul>
        <li>
          <Link to={`${match.url}/categories`}>Genres & Moods</Link>
        </li>
        <li>
          <Link to={`${match.url}/featured-playlists`}>Featured Playlists</Link>
        </li>
        <li>
          <Link to={`${match.url}/new-releases`}>New Releases</Link>
        </li>
      </ul>
    </>
  );
}

export default BrowsePage;
