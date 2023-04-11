/* eslint-disable import/prefer-default-export */

import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { Error, instance, simplifiedPlaylistObjectSchema } from '.';

const mePlaylistsSchema = z.object({
  href: z.string().url(),
  limit: z.number().int(),
  next: z.string().nullable(),
  offset: z.number().int(),
  previous: z.string().nullable(),
  total: z.number().int(),
  items: z.array(simplifiedPlaylistObjectSchema),
});

type MePlaylists = z.infer<typeof mePlaylistsSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-a-list-of-current-users-playlists
 */
async function getMePlaylists(): Promise<MePlaylists> {
  const { data } = await instance.get('/v1/me/playlists');

  return mePlaylistsSchema.parse(data);
}

function useMePlaylists(): UseQueryResult<MePlaylists, Error> {
  return useQuery<MePlaylists, Error>({
    queryKey: ['me', 'playlists'],
    queryFn: () => getMePlaylists(),
  });
}

export { useMePlaylists };
