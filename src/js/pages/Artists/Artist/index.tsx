import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, RouteChildrenProps, useLocation, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Artist from '../../../components/Artist';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

interface Params {
  artistId: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Followers {
  href: null;
  total: number;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

export interface ArtistData {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export type ArtistPageProps = RouteChildrenProps;

function ArtistPage(): JSX.Element {
  const { pathname } = useLocation();
  const { artistId } = useParams<Params>();
  const { data, error } = useSWR<ArtistData>(`/v1/artists/${artistId}`);

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
