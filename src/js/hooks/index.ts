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
  external_urls: z.object({
    spotify: z.string(),
  }),
  followers: z.object({
    href: z.string().url(),
    total: z.number().int(),
  }),
  genres: z.array(z.string()),
  href: z.string().url(),
  id: z.string(),
  images: z.array(imageObjectSchema),
  name: z.string(),
  popularity: z.number().int(),
  type: z.literal('artist'),
  uri: z.string(),
});

const copyrightObjectSchema = z.object({
  text: z.string(),
  type: z.string(),
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
  album: z.object({
    album_type: z.enum(['album', 'single', 'compilation']),
    total_tracks: z.number().int(),
    available_markets: z.array(z.string()),
    external_urls: z.object({
      spotify: z.string(),
    }),
    href: z.string().url(),
    id: z.string(),
    images: z.array(imageObjectSchema),
    name: z.string(),
    release_date: z.string(),
    release_date_precision: z.enum(['year', 'month', 'day']),
    restrictions: z.object({
      reason: z.enum(['market', 'product', 'explicit']),
    }),
    type: z.literal('album'),
    uri: z.string(),
    copyrights: z.array(copyrightObjectSchema),
    external_ids: z.object({
      isrc: z.string(),
      ean: z.string(),
      upc: z.string(),
    }),
    genres: z.array(z.string()),
    label: z.string(),
    popularity: z.number().int(),
    album_group: z.enum(['album', 'single', 'compilation']),
  }),
  artists: z.array(artistObjectSchema),
  available_markets: z.array(z.string()),
  disc_number: z.number().int(),
  duration_ms: z.number().int(),
  explicit: z.boolean(),
  external_ids: z.object({
    isrc: z.string(),
    ean: z.string(),
    upc: z.string(),
  }),
  external_urls: z.object({
    spotify: z.string(),
  }),
  href: z.string().url(),
  id: z.string(),
  id_playable: z.boolean(),
  linked_from: z.object({}),
  restrictions: z.object({
    reason: z.enum(['market', 'product', 'explicit']),
  }),
  name: z.string(),
  popularity: z.number().int(),
  preview_url: z.string(),
  track_number: z.number().int(),
  type: z.literal('track'),
  uri: z.string(),
  is_local: z.boolean(),
});

const playlistTrackObjectSchema = z.object({
  added_at: z.string().datetime(),
  added_by: z.object({
    external_urls: z.object({
      spotify: z.string(),
    }),
    followers: z.object({
      href: z.string().nullable(),
      total: z.number().int(),
    }),
    href: z.string().url(),
    id: z.string(),
    type: z.literal('user'),
    uri: z.string(),
  }),
  is_local: z.boolean(),
  // track: z.union([trackObjectSchema, episodeObjectSchema]),
  track: trackObjectSchema,
});

const simplifiedArtistObjectSchema = z.object({
  external_urls: z.object({
    spotify: z.string(),
  }),
  href: z.string().url(),
  id: z.string(),
  name: z.string(),
  type: z.literal('artist'),
  uri: z.string(),
});

const simplifiedAlbumObjectSchema = z.object({
  album_type: z.enum(['album', 'single', 'compilation']),
  total_tracks: z.number().int(),
  available_markets: z.array(z.string()),
  external_urls: z.object({
    spotify: z.string(),
  }),
  href: z.string().url(),
  id: z.string(),
  images: z.array(imageObjectSchema),
  name: z.string(),
  release_date: z.string(),
  release_date_precision: z.enum(['year', 'month', 'day']),
  restrictions: z.object({
    reason: z.enum(['market', 'product', 'explicit']),
  }),
  type: z.literal('album'),
  uri: z.string(),
  copyrights: z.array(copyrightObjectSchema),
  external_ids: z.object({
    isrc: z.string(),
    ean: z.string(),
    upc: z.string(),
  }),
  genres: z.array(z.string()),
  label: z.string(),
  popularity: z.number().int(),
  album_group: z.enum(['album', 'single', 'compilation', 'appears_on']),
  artists: z.array(simplifiedArtistObjectSchema),
});

const simplifiedCategoryObjectSchema = z.object({
  href: z.string().url(),
  icons: z.array(imageObjectSchema),
  id: z.string(),
  name: z.string(),
});

const simplifiedPlaylistObjectSchema = z.object({
  collaborative: z.boolean(),
  description: z.string(),
  external_urls: z.object({
    spotify: z.string(),
  }),
  href: z.string().url(),
  id: z.string(),
  images: z.array(imageObjectSchema),
  name: z.string(),
  owner: z.object({
    external_urls: z.object({
      spotify: z.string(),
    }),
    followers: z.object({
      href: z.string().url(),
      total: z.number().int(),
    }),
    href: z.string().url(),
    id: z.string(),
    type: z.literal('user'),
    uri: z.string(),
    display_name: z.string().nullable(),
  }),
  public: z.boolean(),
  snapshot_id: z.string(),
  tracks: z.object({
    href: z.string().url(),
    total: z.number().int(),
  }),
  type: z.literal('playlist'),
  uri: z.string(),
});

const simplifiedTrackObject = z.object({
  artists: z.array(simplifiedArtistObjectSchema),
  available_markets: z.array(z.string()),
  disc_number: z.number().int(),
  duration_ms: z.number().int(),
  explicit: z.boolean(),
  external_urls: z.object({
    spotify: z.string(),
  }),
  href: z.string().url(),
  id: z.string(),
  is_playable: z.boolean(),
  linked_from: z.object({
    external_urls: z.object({
      spotify: z.string(),
    }),
    href: z.string().url(),
    id: z.string(),
    type: z.literal('track'),
    uri: z.string(),
  }),
  restrictions: z.object({
    reason: z.enum(['market', 'product', 'explicit']),
  }),
  name: z.string(),
  preview_url: z.string(),
  track_number: z.number().int(),
  type: z.literal('track'),
  uri: z.string(),
  is_local: z.boolean(),
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
