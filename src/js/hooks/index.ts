import axios from 'axios';
import { z } from 'zod';

const token = import.meta.env.SPOTIFY_ACCESS_TOKEN;

const instance = axios.create({
  baseURL: 'https://api.spotify.com',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

interface Error {
  message: string;
}

const imageObjectSchema = z.object({
  url: z.string(),
  height: z.number().int().nullable(),
  width: z.number().int().nullable(),
});

const artistObjectSchema = z.object({
  external_urls: z
    .object({
      spotify: z.string().optional(),
    })
    .optional(),
  followers: z
    .object({
      href: z.string().url().nullable().optional(),
      total: z.number().int().optional(),
    })
    .optional(),
  genres: z.array(z.string()).optional(),
  href: z.string().url().optional(),
  id: z.string().optional(),
  images: z.array(imageObjectSchema).optional(),
  name: z.string().optional(),
  popularity: z.number().int().optional(),
  type: z.literal('artist').optional(),
  uri: z.string().optional(),
});

const copyrightObjectSchema = z.object({
  text: z.string().optional(),
  type: z.string().optional(),
});

const episodeObjectSchema = z.object({
  audio_preview_url: z.string(),
  description: z.string(),
  html_description: z.string(),
  duration_ms: z.number().int(),
  explicit: z.boolean(),
  external_urls: z.object({
    spotify: z.string(),
  }),
  href: z.string().url(),
  id: z.string(),
  images: z.array(imageObjectSchema),
  is_externally_hosted: z.boolean(),
  is_playable: z.string(),
  languages: z.array(z.string()),
  name: z.string(),
  release_date: z.string(),
  release_date_precision: z.enum(['year', 'month', 'day']),
  resume_point: z.object({
    fully_played: z.boolean(),
    resume_position_ms: z.number().int(),
  }),
  type: z.literal('episode'),
  uri: z.string(),
});

const trackObjectSchema = z.object({
  album: z
    .object({
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
      album_group: z.enum(['album', 'single', 'compilation']).optional(),
    })
    .optional(),
  artists: z.array(artistObjectSchema).optional(),
  available_markets: z.array(z.string()).optional(),
  disc_number: z.number().int().optional(),
  duration_ms: z.number().int().optional(),
  explicit: z.boolean().optional(),
  external_ids: z
    .object({
      isrc: z.string().optional(),
      ean: z.string().optional(),
      upc: z.string().optional(),
    })
    .optional(),
  external_urls: z
    .object({
      spotify: z.string().optional(),
    })
    .optional(),
  href: z.string().url().optional(),
  id: z.string().optional(),
  id_playable: z.boolean().optional(),
  linked_from: z.object({}).optional(),
  restrictions: z
    .object({
      reason: z.enum(['market', 'product', 'explicit']).optional(),
    })
    .optional(),
  name: z.string().optional(),
  popularity: z.number().int().optional(),
  preview_url: z.string().nullable().optional(),
  track_number: z.number().int().optional(),
  type: z.literal('track').optional(),
  uri: z.string().optional(),
  is_local: z.boolean().optional(),
});

const playlistTrackObjectSchema = z.object({
  added_at: z.string().datetime().optional(),
  added_by: z
    .object({
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
      type: z.literal('user').optional(),
      uri: z.string().optional(),
    })
    .optional(),
  is_local: z.boolean().optional(),
  // track: z.union([trackObjectSchema, episodeObjectSchema]),
  track: trackObjectSchema.optional(),
});

const simplifiedArtistObjectSchema = z.object({
  external_urls: z
    .object({
      spotify: z.string().optional(),
    })
    .optional(),
  href: z.string().url().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  type: z.literal('artist').optional(),
  uri: z.string().optional(),
});

const simplifiedAlbumObjectSchema = z.object({
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
  album_group: z.enum(['album', 'single', 'compilation', 'appears_on']).optional(),
  artists: z.array(simplifiedArtistObjectSchema),
});

const simplifiedCategoryObjectSchema = z.object({
  href: z.string().url(),
  icons: z.array(imageObjectSchema),
  id: z.string(),
  name: z.string(),
});

const simplifiedPlaylistObjectSchema = z.object({
  collaborative: z.boolean().optional(),
  description: z.string().optional(),
  external_urls: z
    .object({
      spotify: z.string().optional(),
    })
    .optional(),
  href: z.string().url().optional(),
  id: z.string().optional(),
  images: z.array(imageObjectSchema).optional(),
  name: z.string().optional(),
  owner: z
    .object({
      external_urls: z
        .object({
          spotify: z.string().optional(),
        })
        .optional(),
      followers: z
        .object({
          href: z.string().url().nullable().optional(),
          total: z.number().int().optional(),
        })
        .optional(),
      href: z.string().url().optional(),
      id: z.string().optional(),
      type: z.literal('user').optional(),
      uri: z.string().optional(),
      display_name: z.string().nullable().optional(),
    })
    .optional(),
  public: z.boolean().nullable().optional(),
  snapshot_id: z.string().optional(),
  tracks: z
    .object({
      href: z.string().url().optional(),
      total: z.number().int().optional(),
    })
    .optional(),
  type: z.literal('playlist').optional(),
  uri: z.string().optional(),
});

const simplifiedTrackObject = z.object({
  artists: z.array(simplifiedArtistObjectSchema).optional(),
  available_markets: z.array(z.string()).optional(),
  disc_number: z.number().int().optional(),
  duration_ms: z.number().int().optional(),
  explicit: z.boolean().optional(),
  external_urls: z
    .object({
      spotify: z.string().optional(),
    })
    .optional(),
  href: z.string().url().optional(),
  id: z.string().optional(),
  is_playable: z.boolean().optional(),
  linked_from: z
    .object({
      external_urls: z
        .object({
          spotify: z.string().optional(),
        })
        .optional(),
      href: z.string().url().optional(),
      id: z.string().optional(),
      type: z.literal('track').optional(),
      uri: z.string().optional(),
    })
    .optional(),
  restrictions: z
    .object({
      reason: z.enum(['market', 'product', 'explicit']).optional(),
    })
    .optional(),
  name: z.string().optional(),
  preview_url: z.string().optional(),
  track_number: z.number().int().optional(),
  type: z.literal('track').optional(),
  uri: z.string().optional(),
  is_local: z.boolean().optional(),
});

export type { Error };
export {
  artistObjectSchema,
  copyrightObjectSchema,
  imageObjectSchema,
  instance,
  playlistTrackObjectSchema,
  simplifiedAlbumObjectSchema,
  simplifiedCategoryObjectSchema,
  simplifiedPlaylistObjectSchema,
  simplifiedTrackObject,
  trackObjectSchema,
};
