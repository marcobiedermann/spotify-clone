import useSWR, { SWRResponse } from 'swr';
import { z } from 'zod';
import {
  Error,
  artistObjectSchema,
  imageObjectSchema,
  simplifiedAlbumObjectSchema,
  trackObjectSchema,
} from './common';

const artistSchema = z.object({
  external_urls: z.object({
    spotify: z.string(),
  }),
  followers: z.object({
    href: z.string().url(),
    total: z.number().int(),
  }),
  genres: z.array(z.string()),
  href: z.string().url(),
  id: z.string(),
  images: z.array(imageObjectSchema),
  name: z.string(),
  popularity: z.number().int(),
  type: z.literal('artist'),
  uri: z.string(),
});

type Artist = z.infer<typeof artistSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-an-artist
 */
function useArtist(artistId: string): SWRResponse<Artist, Error> {
  return useSWR<Artist, Error>(`/v1/artists/${artistId}`);
}

const artistsAlbumsSchema = z.object({
  href: z.string().url(),
  limit: z.number().int(),
  next: z.string().nullable(),
  offset: z.number().int(),
  previous: z.string().nullable(),
  total: z.number().int(),
  items: z.array(simplifiedAlbumObjectSchema),
});

type ArtistsAlbums = z.infer<typeof artistsAlbumsSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums
 */
function useArtistAlbums(artistId: string): SWRResponse<ArtistsAlbums, Error> {
  return useSWR<ArtistsAlbums, Error>(`/v1/artists/${artistId}/albums`);
}

const artistsRelatedArtistsSchema = z.object({
  artists: z.array(artistObjectSchema),
});

type ArtistsRelatedArtists = z.infer<typeof artistsRelatedArtistsSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-an-artists-related-artists
 */
function useArtistRelatedArtists(artistId: string): SWRResponse<ArtistsRelatedArtists, Error> {
  return useSWR<ArtistsRelatedArtists, Error>(`/v1/artists/${artistId}/related-artists`);
}

const artistsTopTracksSchema = z.object({
  tracks: z.array(trackObjectSchema),
});

type ArtistsTopTracks = z.infer<typeof artistsTopTracksSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks
 */
function useArtistTopTracks(artistId: string): SWRResponse<ArtistsTopTracks, Error> {
  return useSWR<ArtistsTopTracks, Error>(`/v1/artists/${artistId}/top-tracks`);
}

export { useArtist, useArtistAlbums, useArtistRelatedArtists, useArtistTopTracks };
