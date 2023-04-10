/* eslint-disable import/prefer-default-export */

import useSWR, { SWRResponse } from 'swr';
import { z } from 'zod';
import { Error, instance, simplifiedAlbumObjectSchema } from '..';

const newReleasesSchema = z.object({
  albums: z.object({
    href: z.string().url(),
    limit: z.number().int(),
    next: z.string().nullable(),
    offset: z.number().int(),
    previous: z.string().nullable(),
    total: z.number().int(),
    items: z.array(simplifiedAlbumObjectSchema),
  }),
});

type NewReleases = z.infer<typeof newReleasesSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-new-releases
 */
async function getBrowseNewReleases(): Promise<NewReleases> {
  const { data } = await instance.get('/v1/browse/new-releases');

  return newReleasesSchema.parse(data);
}

function useBrowseNewReleases(): SWRResponse<NewReleases, Error> {
  return useSWR<NewReleases, Error>('/v1/browse/new-releases');
}

export { useBrowseNewReleases };
