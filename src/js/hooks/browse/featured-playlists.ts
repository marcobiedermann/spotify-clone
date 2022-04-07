/* eslint-disable import/prefer-default-export */

import useSWR, { SWRResponse } from 'swr';

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

interface Error {
  message: string;
}

function useBrowseFeaturedPlaylists(): SWRResponse<FeaturedPlaylistsData, Error> {
  return useSWR<FeaturedPlaylistsData, Error>('/v1/browse/featured-playlists');
}

export { useBrowseFeaturedPlaylists };
