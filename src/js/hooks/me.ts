/* eslint-disable import/prefer-default-export */

import useSWR, { SWRResponse } from 'swr';

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

interface Error {
  message: string;
}

function useMePlaylists(): SWRResponse<PlaylistsData, Error> {
  return useSWR<PlaylistsData, Error>('/v1/me/playlists');
}

export { useMePlaylists };
