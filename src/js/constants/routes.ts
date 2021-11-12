import AlbumPage from '../pages/Albums/Album';
import TracksPage from '../pages/Albums/Album/Tracks';
import ArtistPage from '../pages/Artists/Artist';
import ArtistAlbumsPage from '../pages/Artists/Artist/Albums';
import ArtistRelatedArtistsPage from '../pages/Artists/Artist/RelatedArtists';
import ArtistTopTracksPage from '../pages/Artists/Artist/TopTracks';
import BrowsePage from '../pages/Browse';
import CategoriesPage from '../pages/Browse/Categories';
import CategoryPage from '../pages/Browse/Categories/Category';
import CategoryPlaylistsPage from '../pages/Browse/Categories/Category/Playlists';
import FeaturedPlaylistsPage from '../pages/Browse/FeaturedPlaylists';
import NewReleasesPage from '../pages/Browse/NewReleases';
import CallbackPage from '../pages/Callback';
import LoginPage from '../pages/Login';
import MePage from '../pages/Me';
import PlaylistsPage from '../pages/Me/Playlists';
import PlaylistPage from '../pages/Playlists/Playlist';
import UserPage from '../pages/Users/User';
import UserPlaylistsPage from '../pages/Users/User/Playlists';

const routes = [
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
  {
    component: ArtistPage,
    path: '/artists/:artistId',
    routes: [
      {
        component: ArtistAlbumsPage,
        path: '/artists/:artistId/albums',
      },
      {
        component: ArtistRelatedArtistsPage,
        path: '/artists/:artistId/related-artists',
      },
      {
        component: ArtistTopTracksPage,
        path: '/artists/:artistId/top-tracks',
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
        routes: [
          {
            component: CategoryPage,
            path: '/browse/categories/:categoryId',
            routes: [
              {
                component: CategoryPlaylistsPage,
                path: '/browse/categories/:categoryId/playlists',
              },
            ],
          },
        ],
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
    component: CallbackPage,
    path: '/callback',
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
    component: PlaylistPage,
    path: '/playlists/:playlistId',
  },
  {
    component: UserPage,
    path: '/users/:userId',
    routes: [
      {
        component: UserPlaylistsPage,
        path: '/users/:userId/playlists',
      },
    ],
  },
];

export default routes;
