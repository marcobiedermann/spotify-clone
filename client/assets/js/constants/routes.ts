import AlbumsPage from '../pages/Albums';
import AlbumPage from '../pages/Albums/Album';
import TracksPage from '../pages/Albums/Album/Tracks';
import ArtistsPage from '../pages/Artists';
import ArtistPage from '../pages/Artists/Artist';
import BrowsePage from '../pages/Browse';
import CategoriesPage from '../pages/Browse/Categories';
import FeaturedPlaylistsPage from '../pages/Browse/FeaturedPlaylists';
import NewReleasesPage from '../pages/Browse/NewReleases';
import IndexPage from '../pages/Index';
import LoginPage from '../pages/Login';
import MePage from '../pages/Me';
import PlaylistsPage from '../pages/Me/Playlists';
import UsersPage from '../pages/Users';
import UserPage from '../pages/Users/User';

export const ARTISTS_ARTIST_ALBUMS = '/artists/:artist_id/albums';
export const ARTISTS_ARTIST_RELATED_ARTISTS = '/artists/:artist_id/related-artists';
export const ARTISTS_ARTIST_TOP_TRACKS = '/artists/:artist_id/top-tracks';

export const BROWSE_CATEGORIES_CATEGORY = '/browse/categories/:category_id';
export const BROWSE_CATEGORIES_CATEGORY_PLAYLISTS = '/browse/categories/:category_id/playlists';

export const USERS_USER_PLAYLISTS = '/users/:user_id/playlists';
export const USERS_USER_PLAYLISTS_PLAYLIST = '/users/:user_id/playlists/:playlist_id';

const routes = [
  {
    component: IndexPage,
    exact: true,
    path: '/',
  },
  {
    component: AlbumsPage,
    path: '/albums',
    routes: [
      {
        component: AlbumPage,
        path: '/albums/:albumId',
        routes: [
          {
            component: TracksPage,
            path: '/albums/:albumId/tracks',
          },
        ],
      },
    ],
  },
  {
    component: ArtistsPage,
    path: '/artists',
    routes: [
      {
        component: ArtistPage,
        path: '/artists/:artistId',
      },
    ],
  },
  {
    component: BrowsePage,
    path: '/browse',
    routes: [
      {
        component: CategoriesPage,
        path: '/browse/categories',
      },
      {
        component: FeaturedPlaylistsPage,
        path: '/browse/featured-playlists',
      },
      {
        component: NewReleasesPage,
        path: '/browse/new-releases',
      },
    ],
  },
  {
    component: AlbumsPage,
    path: '/albums',
  },
  {
    component: LoginPage,
    path: '/login',
  },
  {
    component: MePage,
    path: '/me',
    routes: [
      {
        component: PlaylistsPage,
        path: '/me/playlists',
      },
    ],
  },
  {
    component: UsersPage,
    path: '/users',
    routes: [
      {
        component: UserPage,
        path: '/users/:userId',
      },
    ],
  },
];

export default routes;
