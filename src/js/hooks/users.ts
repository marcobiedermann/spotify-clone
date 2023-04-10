import useSWR, { SWRResponse } from 'swr';
import { z } from 'zod';
import { imageObjectSchema, simplifiedPlaylistObjectSchema, Error } from './common';

const usersProfileSchema = z.object({
  display_name: z.string(),
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
  type: z.literal('user'),
  uri: z.string(),
});

type UsersProfile = z.infer<typeof usersProfileSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-users-profile
 */
function useUsersProfile(userId: string): SWRResponse<UsersProfile, Error> {
  return useSWR<UsersProfile, Error>(`/v1/users/${userId}`);
}

const usersPlaylistsSchema = z.object({
  href: z.string().url(),
  limit: z.number().int(),
  next: z.string().nullable(),
  offset: z.number().int(),
  previous: z.string().nullable(),
  total: z.number().int(),
  items: z.array(simplifiedPlaylistObjectSchema),
});

type UsersPlaylists = z.infer<typeof usersPlaylistsSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-list-users-playlists
 */
function useUsersPlaylists(userId: string): SWRResponse<UsersPlaylists, Error> {
  return useSWR<UsersPlaylists, Error>(`/v1/users/${userId}/playlists`);
}

export { useUsersProfile, useUsersPlaylists };
