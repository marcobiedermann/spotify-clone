import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useParams } from 'react-router-dom';
import Artist from '../../../components/Artist';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import { useArtist } from '../../../hooks/artists';

function ArtistPage(): JSX.Element {
  const { pathname } = useLocation();
  const { artistId } = useParams();
  const { data, error } = useArtist(artistId!);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { name } = data;

  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <Artist {...data} />
      <ul>
        <li>
          <Link to={`${pathname}/albums`}>Albums</Link>
        </li>
        <li>
          <Link to={`${pathname}/related-artists`}>Related Artists</Link>
        </li>
        <li>
          <Link to={`${pathname}/top-tracks`}>Top Tracks</Link>
        </li>
      </ul>
    </>
  );
}

export default ArtistPage;
