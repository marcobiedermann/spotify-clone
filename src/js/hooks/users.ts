import useSWR, { SWRResponse } from 'swr';

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

interface UserData {
  display_name: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  type: string;
  uri: string;
}

interface Error {
  message: string;
}

function useUser(userId: string): SWRResponse<UserData, Error> {
  return useSWR<UserData, Error>(`/v1/users/${userId}`);
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

function useUserPlaylists(userId: string): SWRResponse<PlaylistsData, Error> {
  return useSWR<PlaylistsData, Error>(`/v1/users/${userId}/playlists`);
}

export { useUser, useUserPlaylists };
