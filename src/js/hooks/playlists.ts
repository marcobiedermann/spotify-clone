/* eslint-disable import/prefer-default-export */

import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { Error, imageObjectSchema, instance, playlistTrackObjectSchema } from '.';

const playlistSchema = z.object({
  collaborative: z.boolean(),
  description: z.string().nullable(),
  external_urls: z.object({
    spotify: z.string(),
  }),
  followers: z.object({
    href: z.string().nullable(),
    total: z.number().int(),
  }),
  href: z.string().url(),
  id: z.string(),
  images: z.array(imageObjectSchema),
  name: z.string(),
  owner: z.object({
    external_urls: z.object({
      spotify: z.string(),
    }),
    followers: z.object({
      href: z.string().nullable(),
      total: z.number().int(),
    }),
    href: z.string().url(),
    id: z.string(),
    type: z.literal('user'),
    uri: z.string(),
    display_name: z.string(),
  }),
  public: z.boolean(),
  snapshot_id: z.string(),
  tracks: z.object({
    href: z.string().url(),
    limit: z.number().int(),
    next: z.string().nullable(),
    offset: z.number().int(),
    previous: z.string().nullable(),
    total: z.number().int(),
    items: z.array(playlistTrackObjectSchema),
  }),
  type: z.literal('playlist'),
  uri: z.string(),
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
