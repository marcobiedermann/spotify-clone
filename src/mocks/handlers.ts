/* eslint-disable */
/* tslint:disable */

import { rest } from 'msw';
import albums from './__fixtures__/v1/albums.json';
import album from './__fixtures__/v1/albums/4aawyAB9vmqN3uQ7FjRGTy.json';
import albumTracks from './__fixtures__/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks.json';
import artists from './__fixtures__/v1/artists.json';
import artist from './__fixtures__/v1/artists/0TnOYISbd1XYRBk9myaseg.json';
import artistAlbums from './__fixtures__/v1/artists/0TnOYISbd1XYRBk9myaseg/albums.json';
import relatedArtists from './__fixtures__/v1/artists/0TnOYISbd1XYRBk9myaseg/related-artists.json';
import topTracks from './__fixtures__/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks.json';
import categories from './__fixtures__/v1/browse/categories.json';
import category from './__fixtures__/v1/browse/categories/dinner.json';
import categoryPlaylists from './__fixtures__/v1/browse/categories/dinner/playlists.json';
import featuredPlaylists from './__fixtures__/v1/browse/featured-playlists.json';
import newReleases from './__fixtures__/v1/browse/new-releases.json';
import me from './__fixtures__/v1/me.json';
import myFollowing from './__fixtures__/v1/me/following.json';
import myPlaylists from './__fixtures__/v1/me/playlists.json';
import playlist from './__fixtures__/v1/playlists/3cEYpjA9oz9GiPac4AsH4n.json';
import user from './__fixtures__/v1/users/smedjan.json';
import userPlaylists from './__fixtures__/v1/users/smedjan/playlists.json';

const handlers = [
  rest.get('https://api.spotify.com/v1/albums', (_request, response, context) => {
    return response(context.status(200), context.json(albums));
  }),
  rest.get('https://api.spotify.com/v1/albums/:albumId', (_request, response, context) => {
    return response(context.status(200), context.json(album));
  }),
  rest.get('https://api.spotify.com/v1/albums/:albumId/tracks', (_request, response, context) => {
    return response(context.status(200), context.json(albumTracks));
  }),
  rest.get('https://api.spotify.com/v1/artists', (_request, response, context) => {
    return response(context.status(200), context.json(artists));
  }),
  rest.get('https://api.spotify.com/v1/artists/:artistId', (_request, response, context) => {
    return response(context.status(200), context.json(artist));
  }),
  rest.get('https://api.spotify.com/v1/artists/:artistId/albums', (_request, response, context) => {
    return response(context.status(200), context.json(artistAlbums));
  }),
  rest.get(
    'https://api.spotify.com/v1/artists/:artistId/related-artists',
    (_request, response, context) => {
      return response(context.status(200), context.json(relatedArtists));
    },
  ),
  rest.get(
    'https://api.spotify.com/v1/artists/:artistId/top-tracks',
    (_request, response, context) => {
      return response(context.status(200), context.json(topTracks));
    },
  ),
  rest.get('https://api.spotify.com/v1/browse/categories', (_request, response, context) => {
    return response(context.status(200), context.json(categories));
  }),
  rest.get(
    'https://api.spotify.com/v1/browse/categories/:categoryId',
    (_request, response, context) => {
      return response(context.status(200), context.json(category));
    },
  ),
  rest.get(
    'https://api.spotify.com/v1/browse/categories/:categoryId/playlists',
    (_request, response, context) => {
      return response(context.status(200), context.json(categoryPlaylists));
    },
  ),
  rest.get(
    'https://api.spotify.com/v1/browse/featured-playlists',
    (_request, response, context) => {
      return response(context.status(200), context.json(featuredPlaylists));
    },
  ),
  rest.get('https://api.spotify.com/v1/browse/new-releases', (_request, response, context) => {
    return response(context.status(200), context.json(newReleases));
  }),
  rest.get('https://api.spotify.com/v1/me', (_request, response, context) => {
    return response(context.status(200), context.json(me));
  }),
  rest.get('https://api.spotify.com/v1/me/following', (_request, response, context) => {
    return response(context.status(200), context.json(myFollowing));
  }),
  rest.get('https://api.spotify.com/v1/me/playlists', (_request, response, context) => {
    return response(context.status(200), context.json(myPlaylists));
  }),
  rest.get('https://api.spotify.com/v1/playlists/:playlistId', (_request, response, context) => {
    return response(context.status(200), context.json(playlist));
  }),
  rest.get('https://api.spotify.com/v1/users/:userId', (_request, response, context) => {
    return response(context.status(200), context.json(user));
  }),
  rest.get('https://api.spotify.com/v1/users/:userId/playlists', (_request, response, context) => {
    return response(context.status(200), context.json(userPlaylists));
  }),
];

export { handlers };
