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
  external_urls: z
    .object({
      spotify: z.string().optional(),
    })
    .optional(),
  followers: z
    .object({
      href: z.string().url().nullable().optional(),
      total: z.number().int().optional(),
    })
    .optional(),
  genres: z.array(z.string()).optional(),
  href: z.string().url().optional(),
  id: z.string().optional(),
  images: z.array(imageObjectSchema).optional(),
  name: z.string().optional(),
  popularity: z.number().int().optional(),
  type: z.literal('artist').optional(),
  uri: z.string().optional(),
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

interface ArtistsAlbumsParams {
  limit?: number;
  include_groups: string[];
}

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums
 */
async function getArtistAlbums(
  artistId: string,
  params?: ArtistsAlbumsParams,
): Promise<ArtistsAlbums> {
  const { data } = await instance.get(`/v1/artists/${artistId}/albums`, {
    params,
  });

  return artistsAlbumsSchema.parse(data);
}

function useArtistAlbums(
  artistId: string,
  params?: ArtistsAlbumsParams,
): UseQueryResult<ArtistsAlbums, Error> {
  return useQuery<ArtistsAlbums, Error>({
    queryKey: ['artists', artistId, 'albums', params],
    queryFn: () => getArtistAlbums(artistId, params),
  });
}

const artistsRelatedArtistsSchema = z.object({
  artists: z.array(artistObjectSchema),
});

type ArtistsRelatedArtists = z.infer<typeof artistsRelatedArtistsSchema>;

interface ArtistRelatedArtistsParams {
  limit?: number;
}

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-an-artists-related-artists
 */
async function getArtistRelatedArtists(
  artistId: string,
  params?: ArtistRelatedArtistsParams,
): Promise<ArtistsRelatedArtists> {
  const { data } = await instance.get(`/v1/artists/${artistId}/related-artists`, {
    params,
  });

  return artistsRelatedArtistsSchema.parse(data);
}

function useArtistRelatedArtists(
  artistId: string,
  params?: ArtistRelatedArtistsParams,
): UseQueryResult<ArtistsRelatedArtists, Error> {
  return useQuery<ArtistsRelatedArtists, Error>({
    queryKey: ['artists', artistId, 'related-artists'],
    queryFn: () => getArtistRelatedArtists(artistId, params),
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
