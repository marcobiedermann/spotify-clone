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

interface ArtistData {
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

interface Error {
  message: string;
}

function useArtist(artistId: string): SWRResponse<ArtistData, Error> {
  return useSWR<ArtistData, Error>(`/v1/artists/${artistId}`);
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

function useArtistAlbums(artistId: string): SWRResponse<AlbumsData, Error> {
  return useSWR<AlbumsData, Error>(`/v1/artists/${artistId}/albums`);
}

interface Artist {
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

interface RelatedArtistsData {
  artists: Artist[];
}

function useArtistRelatedArtists(artistId: string): SWRResponse<RelatedArtistsData, Error> {
  return useSWR<RelatedArtistsData, Error>(`/v1/artists/${artistId}/related-artists`);
}

interface Album {
  album_type: string;
  artists: Artist[];
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

interface ExternalIds {
  isrc: string;
}

interface Track {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

interface TopTracksData {
  tracks: Track[];
}

function useArtistTopTracks(artistId: string): SWRResponse<TopTracksData, Error> {
  return useSWR<TopTracksData, Error>(`/v1/artists/${artistId}/top-tracks`);
}

export { useArtist, useArtistAlbums, useArtistRelatedArtists, useArtistTopTracks };
