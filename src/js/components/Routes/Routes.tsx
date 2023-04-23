import React, { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import DefaultLayout from '../../layouts/Default';
import BlankLayout from '../../layouts/Blank';

const AlbumPage = lazy(() => import('../../pages/Albums/Album'));
const TracksPage = lazy(() => import('../../pages/Albums/Album/Tracks'));
const ArtistPage = lazy(() => import('../../pages/Artists/Artist'));
const ArtistAlbumsPage = lazy(() => import('../../pages/Artists/Artist/Albums'));
const ArtistRelatedArtistsPage = lazy(() => import('../../pages/Artists/Artist/RelatedArtists'));
const ArtistTopTracksPage = lazy(() => import('../../pages/Artists/Artist/TopTracks'));
const BrowsePage = lazy(() => import('../../pages/Browse'));
const CategoriesPage = lazy(() => import('../../pages/Browse/Categories'));
const CategoryPage = lazy(() => import('../../pages/Browse/Categories/Category'));
const CategoryPlaylistsPage = lazy(
  () => import('../../pages/Browse/Categories/Category/Playlists'),
);
const FeaturedPlaylistsPage = lazy(() => import('../../pages/Browse/FeaturedPlaylists'));
const NewReleasesPage = lazy(() => import('../../pages/Browse/NewReleases'));
const CallbackPage = lazy(() => import('../../pages/Callback'));
const LoginPage = lazy(() => import('../../pages/Login'));
const MePage = lazy(() => import('../../pages/Me'));
const PlaylistsPage = lazy(() => import('../../pages/Me/Playlists'));
const PlaylistPage = lazy(() => import('../../pages/Playlists/Playlist'));
const SearchPage = lazy(() => import('../../pages/Search'));
const UserPage = lazy(() => import('../../pages/Users/User'));
const UserPlaylistsPage = lazy(() => import('../../pages/Users/User/Playlists'));

const routes = [
  {
    element: <DefaultLayout />,
    children: [
      {
        element: <Navigate to="/browse" />,
        path: '/',
      },
      {
        element: <AlbumPage />,
        path: '/albums/:albumId',
      },
      {
        element: <TracksPage />,
        path: '/albums/:albumId/tracks',
      },
      {
        element: <ArtistPage />,
        path: '/artists/:artistId',
      },
      {
        element: <ArtistAlbumsPage />,
        path: '/artists/:artistId/albums',
      },
      {
        element: <ArtistRelatedArtistsPage />,
        path: '/artists/:artistId/related-artists',
      },
      {
        element: <ArtistTopTracksPage />,
        path: '/artists/:artistId/top-tracks',
      },
      {
        element: <BrowsePage />,
        path: '/browse',
      },
      {
        element: <CategoriesPage />,
        path: '/browse/categories',
      },
      {
        element: <CategoryPage />,
        path: '/browse/categories/:categoryId',
      },
      {
        element: <CategoryPlaylistsPage />,
        path: '/browse/categories/:categoryId/playlists',
      },
      {
        element: <FeaturedPlaylistsPage />,
        path: '/browse/featured-playlists',
      },
      {
        element: <NewReleasesPage />,
        path: '/browse/new-releases',
      },
      {
        element: <MePage />,
        path: '/me',
      },
      {
        element: <PlaylistsPage />,
        path: '/me/playlists',
      },
      {
        element: <PlaylistPage />,
        path: '/playlists/:playlistId',
      },
      {
        element: <SearchPage />,
        path: '/search',
      },
      {
        element: <UserPage />,
        path: '/users/:userId',
      },
      {
        element: <UserPlaylistsPage />,
        path: '/users/:userId/playlists',
      },
    ],
  },
  {
    element: <BlankLayout />,
    children: [
      {
        element: <CallbackPage />,
        path: '/callback',
      },
      {
        element: <LoginPage />,
        path: '/login',
      },
    ],
  },
];

function Routes(): JSX.Element {
  const element = useRoutes(routes)!;

  return element;
}

export default Routes;
