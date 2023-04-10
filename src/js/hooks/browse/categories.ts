import useSWR, { SWRResponse } from 'swr';
import { z } from 'zod';
import {
  Error,
  imageObjectSchema,
  instance,
  simplifiedCategoryObjectSchema,
  simplifiedPlaylistObjectSchema,
} from '..';

const browseCategoriesSchema = z.object({
  categories: z.object({
    href: z.string().url(),
    limit: z.number().int(),
    next: z.string().nullable(),
    offset: z.number().int(),
    previous: z.string().nullable(),
    total: z.number().int(),
    items: z.array(simplifiedCategoryObjectSchema),
  }),
});

type BrowseCategories = z.infer<typeof browseCategoriesSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-categories
 */
async function getBrowseCategories(): Promise<BrowseCategories> {
  const { data } = await instance.get('/v1/browse/categories');

  return browseCategoriesSchema.parse(data);
}

function useBrowseCategories(): SWRResponse<BrowseCategories, Error> {
  return useSWR<BrowseCategories, Error>('/v1/browse/categories');
}

const browseCategorySchema = z.object({
  href: z.string().url(),
  icons: z.array(imageObjectSchema),
  id: z.string(),
  name: z.string(),
});

type BrowseCategory = z.infer<typeof browseCategorySchema>;

/**
 * @https://developer.spotify.com/documentation/web-api/reference/get-a-category
 */
async function getBrowseCategory(categoryId: string): Promise<BrowseCategory> {
  const { data } = await instance.get(`/v1/browse/categories/${categoryId}`);

  return browseCategorySchema.parse(data);
}

function useBrowseCategory(categoryId: string): SWRResponse<BrowseCategory, Error> {
  return useSWR<BrowseCategory, Error>(`/v1/browse/categories/${categoryId}`);
}

const browseCategoryPlaylistsSchema = z.object({
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

type BrowseCategoryPlaylists = z.infer<typeof browseCategoryPlaylistsSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-a-categories-playlists
 */
async function getBrowseCategoryPlaylists(categoryId: string): Promise<BrowseCategoryPlaylists> {
  const { data } = await instance.get(`/v1/browse/categories/${categoryId}/playlists`);

  return browseCategoryPlaylistsSchema.parse(data);
}

function useBrowseCategoryPlaylists(
  categoryId: string,
): SWRResponse<BrowseCategoryPlaylists, Error> {
  return useSWR<BrowseCategoryPlaylists, Error>(`/v1/browse/categories/${categoryId}/playlists`);
}

export { useBrowseCategories, useBrowseCategory, useBrowseCategoryPlaylists };
