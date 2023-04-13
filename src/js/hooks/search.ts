/* eslint-disable import/prefer-default-export */

import { UseMutationResult, UseQueryResult, useMutation, useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import {
  Error,
  artistObjectSchema,
  instance,
  simplifiedAlbumObjectSchema,
  simplifiedPlaylistObjectSchema,
  trackObjectSchema,
} from '.';

const searchSchema = z.object({
  tracks: z
    .object({
      href: z.string().url(),
      limit: z.number().int(),
      next: z.string().nullable(),
      offset: z.number().int(),
      previous: z.string().nullable(),
      total: z.number().int(),
      items: z.array(trackObjectSchema),
    })
    .optional(),
  artists: z
    .object({
      href: z.string().url(),
      limit: z.number().int(),
      next: z.string().nullable(),
      offset: z.number().int(),
      previous: z.string().nullable(),
      total: z.number().int(),
      items: z.array(artistObjectSchema),
    })
    .optional(),
  albums: z
    .object({
      href: z.string().url(),
      limit: z.number().int(),
      next: z.string().nullable(),
      offset: z.number().int(),
      previous: z.string().nullable(),
      total: z.number().int(),
      items: z.array(simplifiedAlbumObjectSchema),
    })
    .optional(),
  playlists: z
    .object({
      href: z.string().url(),
      limit: z.number().int(),
      next: z.string().nullable(),
      offset: z.number().int(),
      previous: z.string().nullable(),
      total: z.number().int(),
      items: z.array(simplifiedPlaylistObjectSchema),
    })
    .optional(),
  // shows: z.object({}).optional(),
  // episodes: z.object({}).optional(),
  // audiobooks: z.object({}).optional(),
});

type Search = z.infer<typeof searchSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/search
 */
interface FormData {
  q: string;
}

async function getSearch(formData: FormData): Promise<Search> {
  const { q } = formData;
  const type = [
    'album',
    'artist',
    'playlist',
    'track',
    // 'show',
    // 'episode',
    // 'audiobook',
  ];

  const { data } = await instance.get('/v1/search', {
    params: {
      q,
      type,
    },
  });

  return searchSchema.parse(data);
}

function useSearch() {
  return useMutation<Search, Error, { q: string }>({
    mutationFn: (formData) => getSearch(formData),
  });
}

export type { FormData };
export { useSearch };
