import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps } from 'react-router-dom';
import useSWR from 'swr';
import Albums from '../../../components/Albums';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';

interface Albums {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface Item {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface NewReleasesData {
  albums: Albums;
}

const NewReleasesPage: FC<RouteChildrenProps> = () => {
  const { data, error } = useSWR<NewReleasesData>('/v1/browse/new-releases');

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { albums } = data;

  return (
    <>
      <Helmet>
        <title>New Releases</title>
      </Helmet>
      <Albums items={albums.items} />
    </>
  );
};

export default NewReleasesPage;
