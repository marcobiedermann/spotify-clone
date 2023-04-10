/* eslint-disable import/prefer-default-export */

import useSWR, { SWRResponse } from 'swr';
import { z } from 'zod';
import { Error, instance, simplifiedPlaylistObjectSchema } from '..';

const featuredPlaylistsSchema = z.object({
  message: z.string(),
  playlists: z.object({
    href: z.string().url(),
    limit: z.number().int(),
    next: z.string().nullable(),
    offset: z.number().int(),
    previous: z.string().nullable(),
    total: z.number().int(),
    items: z.array(simplifiedPlaylistObjectSchema),
  }),
});

type FeaturedPlaylists = z.infer<typeof featuredPlaylistsSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-featured-playlists
 */
async function getBrowseFeaturedPlaylists(): Promise<FeaturedPlaylists> {
  const { data } = await instance.get('/v1/browse/featured-playlists');

  return featuredPlaylistsSchema.parse(data);
}

function useBrowseFeaturedPlaylists(): SWRResponse<FeaturedPlaylists, Error> {
  return useSWR<FeaturedPlaylists, Error>('/v1/browse/featured-playlists');
}

export { useBrowseFeaturedPlaylists };
