import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import {
  Error,
  artistObjectSchema,
  imageObjectSchema,
  instance,
  simplifiedAlbumObjectSchema,
  trackObjectSchema,
} from '.';

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
async function getArtist(artistId: string): Promise<Artist> {
  const { data } = await instance.get(`/v1/artists/${artistId}`);

  return artistSchema.parse(data);
}

function useArtist(artistId: string): UseQueryResult<Artist, Error> {
  return useQuery<Artist, Error>({
    queryKey: ['artists', artistId],
    queryFn: () => getArtist(artistId),
  });
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
async function getArtistAlbums(artistId: string): Promise<ArtistsAlbums> {
  const { data } = await instance.get(`/v1/artists/${artistId}/albums`);

  return artistsAlbumsSchema.parse(data);
}

function useArtistAlbums(artistId: string): UseQueryResult<ArtistsAlbums, Error> {
  return useQuery<ArtistsAlbums, Error>({
    queryKey: ['artists', artistId, 'albums'],
    queryFn: () => getArtistAlbums(artistId),
  });
}

const artistsRelatedArtistsSchema = z.object({
  artists: z.array(artistObjectSchema),
});

type ArtistsRelatedArtists = z.infer<typeof artistsRelatedArtistsSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-an-artists-related-artists
 */
async function getArtistRelatedArtists(artistId: string): Promise<ArtistsRelatedArtists> {
  const { data } = await instance.get(`/v1/artists/${artistId}/related-artists`);

  return artistsRelatedArtistsSchema.parse(data);
}

function useArtistRelatedArtists(artistId: string): UseQueryResult<ArtistsRelatedArtists, Error> {
  return useQuery<ArtistsRelatedArtists, Error>({
    queryKey: ['artists', artistId, 'related-artists'],
    queryFn: () => getArtistRelatedArtists(artistId),
  });
}

const artistsTopTracksSchema = z.object({
  tracks: z.array(trackObjectSchema),
});

type ArtistsTopTracks = z.infer<typeof artistsTopTracksSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks
 */
async function getArtistTopTracks(artistId: string): Promise<ArtistsTopTracks> {
  const { data } = await instance.get(`/v1/artists/${artistId}/top-tracks`);

  return artistsTopTracksSchema.parse(data);
}

function useArtistTopTracks(artistId: string): UseQueryResult<ArtistsTopTracks, Error> {
  return useQuery<ArtistsTopTracks, Error>({
    queryKey: ['artists', artistId, 'top-tracks'],
    queryFn: () => getArtistTopTracks(artistId),
  });
}

export { useArtist, useArtistAlbums, useArtistRelatedArtists, useArtistTopTracks };
