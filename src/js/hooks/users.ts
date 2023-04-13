import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { Error, imageObjectSchema, instance, simplifiedPlaylistObjectSchema } from '.';

const usersProfileSchema = z.object({
  display_name: z.string().nullable().optional(),
  external_urls: z
    .object({
      spotify: z.string().optional(),
    })
    .optional(),
  followers: z
    .object({
      href: z.string().nullable().optional(),
      total: z.number().int().optional(),
    })
    .optional(),
  href: z.string().url().optional(),
  id: z.string().optional(),
  images: z.array(imageObjectSchema).optional(),
  type: z.literal('user').optional(),
  uri: z.string().optional(),
});

type UsersProfile = z.infer<typeof usersProfileSchema>;

/**
 * @link https://developer.spotify.com/documentation/web-api/reference/get-users-profile
 */
async function getUsersProfile(userId: string): Promise<UsersProfile> {
  const { data } = await instance.get(`/v1/users/${userId}`);

  return usersProfileSchema.parse(data);
}

function useUsersProfile(userId: string): UseQueryResult<UsersProfile, Error> {
  return useQuery<UsersProfile, Error>({
    queryKey: ['users', userId],
    queryFn: () => getUsersProfile(userId),
  });
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

function useUsersPlaylists(userId: string): UseQueryResult<UsersPlaylists, Error> {
  return useQuery<UsersPlaylists, Error>({
    queryKey: ['users', userId, 'playlists'],
    queryFn: () => getUsersPlaylists(userId),
  });
}

export { useUsersProfile, useUsersPlaylists };
