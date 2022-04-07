/* eslint-disable import/prefer-default-export */

import useSWR, { SWRResponse } from 'swr';

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

interface Error {
  message: string;
}

function useBrowseNewReleases(): SWRResponse<NewReleasesData, Error> {
  return useSWR<NewReleasesData, Error>('/v1/browse/new-releases');
}

export { useBrowseNewReleases };
