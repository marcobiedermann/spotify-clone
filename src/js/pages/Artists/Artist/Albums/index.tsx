import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Albums from '../../../../components/Albums';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';

interface Params {
  artistId: string;
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
  album_group: string;
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

interface AlbumsData {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

const AlbumsPage: FC<RouteChildrenProps> = () => {
  const { artistId } = useParams<Params>();
  const { data, error } = useSWR<AlbumsData>(`/v1/artists/${artistId}/albums`);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { items } = data;

  return (
    <>
      <Helmet>
        <title>Albums</title>
      </Helmet>
      <Albums items={items} />
    </>
  );
};

export default AlbumsPage;
