import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { RouteChildrenProps, useParams } from 'react-router-dom';
import useSWR from 'swr';
import Error from '../../../../components/Error';
import Loader from '../../../../components/Loader';
import Playlists from '../../../../components/Playlists';

interface Params {
  userId: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

interface Item {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

interface Owner {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface Tracks {
  href: string;
  total: number;
}

interface PlaylistsData {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

const PlaylistsPage: FC<RouteChildrenProps> = () => {
  const { userId } = useParams<Params>();
  const { data, error } = useSWR<PlaylistsData>(`/v1/users/${userId}/playlists`);

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
        <title>Playlists</title>
      </Helmet>
      <Playlists items={items} />
    </>
  );
};

export default PlaylistsPage;
