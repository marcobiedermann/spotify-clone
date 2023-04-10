/* eslint-disable import/prefer-default-export */

import useSWR, { SWRResponse } from 'swr';
import { z } from 'zod';
import { simplifiedPlaylistObjectSchema, Error } from './common';

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
function useMePlaylists(): SWRResponse<MePlaylists, Error> {
  return useSWR<MePlaylists, Error>('/v1/me/playlists');
}

export { useMePlaylists };
