/* eslint-disable import/prefer-default-export */

import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { Error, imageObjectSchema, instance, playlistTrackObjectSchema } from '.';

const playlistSchema = z.object({
  collaborative: z.boolean().optional(),
  description: z.string().nullable().optional(),
  external_urls: z
    .object({
      spotify: z.string().optional(),
    })
    .optional(),
  followers: z
    .object({
      href: z.string().nullable().optional(),
      total: z.number().int().optional(),
    })
    .optional(),
  href: z.string().url().optional(),
  id: z.string().optional(),
  images: z.array(imageObjectSchema).optional(),
  name: z.string().optional(),
  owner: z
    .object({
      external_urls: z
        .object({
          spotify: z.string().optional(),
        })
        .optional(),
      followers: z
        .object({
          href: z.string().nullable().optional(),
          total: z.number().int().optional(),
        })
        .optional(),
      href: z.string().url().optional(),
      id: z.string().optional(),
      type: z.literal('user').optional(),
      uri: z.string().optional(),
      display_name: z.string().nullable().optional(),
    })
    .optional(),
  public: z.boolean().optional(),
  snapshot_id: z.string().optional(),
  tracks: z
    .object({
      href: z.string().url(),
      limit: z.number().int(),
      next: z.string().nullable(),
      offset: z.number().int(),
      previous: z.string().nullable(),
      total: z.number().int(),
      items: z.array(playlistTrackObjectSchema),
    })
    .optional(),
  type: z.literal('playlist').optional(),
  uri: z.string().optional(),
});

type Playlist = z.infer<typeof playlistSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-playlist
 */
async function getPlaylist(playlistId: string): Promise<Playlist> {
  const { data } = await instance.get(`/v1/playlists/${playlistId}`);

  return playlistSchema.parse(data);
}

function usePlaylist(playlistId: string): UseQueryResult<Playlist, Error> {
  return useQuery<Playlist, Error>({
    queryKey: ['playlists', playlistId],
    queryFn: () => getPlaylist(playlistId),
  });
}

export { usePlaylist };
