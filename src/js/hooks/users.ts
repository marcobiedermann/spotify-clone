import useSWR, { SWRResponse } from 'swr';
import { z } from 'zod';
import { Error, imageObjectSchema, instance, simplifiedPlaylistObjectSchema } from '.';

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
async function getUsersProfile(userId: string): Promise<UsersProfile> {
  const { data } = await instance.get(`/v1/users/${userId}`);

  return usersProfileSchema.parse(data);
}

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
async function getUsersPlaylists(userId: string): Promise<UsersPlaylists> {
  const { data } = await instance.get(`/v1/users/${userId}/playlists`);

  return usersPlaylistsSchema.parse(data);
}

function useUsersPlaylists(userId: string): SWRResponse<UsersPlaylists, Error> {
  return useSWR<UsersPlaylists, Error>(`/v1/users/${userId}/playlists`);
}

export { useUsersProfile, useUsersPlaylists };
