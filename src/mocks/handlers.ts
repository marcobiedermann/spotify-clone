/* eslint-disable */
/* tslint:disable */

import { HttpResponse, http } from 'msw';
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
import search from './__fixtures__/v1/search.json';
import user from './__fixtures__/v1/users/smedjan.json';
import userPlaylists from './__fixtures__/v1/users/smedjan/playlists.json';

const BASE_URL = 'https://api.spotify.com/v1';

const handlers = [
  http.get(`${BASE_URL}/albums`, () => HttpResponse.json(albums)),
  http.get(`${BASE_URL}/albums/:albumId`, () => HttpResponse.json(album)),
  http.get(`${BASE_URL}/albums/:albumId/tracks`, () => HttpResponse.json(albumTracks)),
  http.get(`${BASE_URL}/artists`, () => HttpResponse.json(artists)),
  http.get(`${BASE_URL}/artists/:artistId`, () => HttpResponse.json(artist)),
  http.get(`${BASE_URL}/artists/:artistId/albums`, () => HttpResponse.json(artistAlbums)),
  http.get(`${BASE_URL}/artists/:artistId/related-artists`, () =>
    HttpResponse.json(relatedArtists),
  ),
  http.get(`${BASE_URL}/artists/:artistId/top-tracks`, () => HttpResponse.json(topTracks)),
  http.get(`${BASE_URL}/browse/categories`, () => HttpResponse.json(categories)),
  http.get(`${BASE_URL}/browse/categories/:categoryId`, () => HttpResponse.json(category)),
  http.get(`${BASE_URL}/browse/categories/:categoryId/playlists`, () =>
    HttpResponse.json(categoryPlaylists),
  ),
  http.get(`${BASE_URL}/browse/featured-playlists`, () => HttpResponse.json(featuredPlaylists)),
  http.get(`${BASE_URL}/browse/new-releases`, () => HttpResponse.json(newReleases)),
  http.get(`${BASE_URL}/me`, () => HttpResponse.json(me)),
  http.get(`${BASE_URL}/me/following`, () => HttpResponse.json(myFollowing)),
  http.get(`${BASE_URL}/me/playlists`, () => HttpResponse.json(myPlaylists)),
  http.get(`${BASE_URL}/playlists/:playlistId`, () => HttpResponse.json(playlist)),
  http.get(`${BASE_URL}/search`, () => HttpResponse.json(search)),
  http.get(`${BASE_URL}/users/:userId`, () => HttpResponse.json(user)),
  http.get(`${BASE_URL}/users/:userId/playlists`, () => HttpResponse.json(userPlaylists)),
];

export { handlers };
