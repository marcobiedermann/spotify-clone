import React from 'react';
import { Helmet } from 'react-helmet';
import useSWR from 'swr';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader';
import Playlists from '../../../components/Playlists';

interface ExternalUrls {
  spotify: string;
}

interface Image {
  height: null;
  url: string;
  width: null;
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
  public: null;
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

interface Playlists {
  href: string;
  items: Item[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}

interface Tracks {
  href: string;
  total: number;
}
interface FeaturedPlaylistsData {
  message: string;
  playlists: Playlists;
}

function FeaturedPlaylistsPage(): JSX.Element {
  const { data, error } = useSWR<FeaturedPlaylistsData>('/v1/browse/featured-playlists');

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (!data) {
    return <Loader />;
  }

  const { playlists } = data;

  return (
    <>
      <Helmet>
        <title>Featured Playlists</title>
      </Helmet>
      <Playlists items={playlists.items} />
    </>
  );
}

export default FeaturedPlaylistsPage;
