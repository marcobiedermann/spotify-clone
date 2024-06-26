import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import {
  Error,
  artistObjectSchema,
  copyrightObjectSchema,
  imageObjectSchema,
  instance,
  simplifiedTrackObject,
} from '.';

const albumSchema = z.object({
  album_type: z.enum(['album', 'single', 'compilation']),
  total_tracks: z.number().int(),
  available_markets: z.array(z.string()),
  external_urls: z.object({
    spotify: z.string().optional(),
  }),
  href: z.string().url(),
  id: z.string(),
  images: z.array(imageObjectSchema),
  name: z.string(),
  release_date: z.string(),
  release_date_precision: z.enum(['year', 'month', 'day']),
  restrictions: z
    .object({
      reason: z.enum(['market', 'product', 'explicit']).optional(),
    })
    .optional(),
  type: z.literal('album'),
  uri: z.string(),
  copyrights: z.array(copyrightObjectSchema).optional(),
  external_ids: z
    .object({
      isrc: z.string().optional(),
      ean: z.string().optional(),
      upc: z.string().optional(),
    })
    .optional(),
  genres: z.array(z.string()).optional(),
  label: z.string().optional(),
  popularity: z.number().int().optional(),
  artists: z.array(artistObjectSchema).optional(),
  tracks: z
    .object({
      href: z.string().url(),
      limit: z.number().int(),
      next: z.string().nullable(),
      offset: z.number().int(),
      previous: z.string().nullable(),
      total: z.number().int(),
      items: z.array(simplifiedTrackObject),
    })
    .optional(),
});

type Album = z.infer<typeof albumSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-an-album
 */
async function getAlbum(albumId: string): Promise<Album> {
  const { data } = await instance.get(`/v1/albums/${albumId}`);

  return albumSchema.parse(data);
}

function useAlbum(albumId: string): UseQueryResult<Album, Error> {
  return useQuery<Album, Error>({
    queryKey: ['albums', albumId],
    queryFn: () => getAlbum(albumId),
  });
}

export { useAlbum };
