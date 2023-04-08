import React from 'react';
import { useRoutes } from 'react-router-dom';
import AlbumPage from '../../pages/Albums/Album';
import TracksPage from '../../pages/Albums/Album/Tracks';
import ArtistPage from '../../pages/Artists/Artist';
import ArtistAlbumsPage from '../../pages/Artists/Artist/Albums';
import ArtistRelatedArtistsPage from '../../pages/Artists/Artist/RelatedArtists';
import ArtistTopTracksPage from '../../pages/Artists/Artist/TopTracks';
import BrowsePage from '../../pages/Browse';
import CategoriesPage from '../../pages/Browse/Categories';
import CategoryPage from '../../pages/Browse/Categories/Category';
import CategoryPlaylistsPage from '../../pages/Browse/Categories/Category/Playlists';
import FeaturedPlaylistsPage from '../../pages/Browse/FeaturedPlaylists';
import NewReleasesPage from '../../pages/Browse/NewReleases';
import CallbackPage from '../../pages/Callback';
import LoginPage from '../../pages/Login';
import MePage from '../../pages/Me';
import PlaylistsPage from '../../pages/Me/Playlists';
import PlaylistPage from '../../pages/Playlists/Playlist';
import UserPage from '../../pages/Users/User';
import UserPlaylistsPage from '../../pages/Users/User/Playlists';

const routes = [
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
    element: <CallbackPage />,
    path: '/callback',
  },
  {
    element: <LoginPage />,
    path: '/login',
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
    element: <UserPage />,
    path: '/users/:userId',
  },
  {
    element: <UserPlaylistsPage />,
    path: '/users/:userId/playlists',
  },
];

function Routes(): JSX.Element {
  const element = useRoutes(routes)!;

  return element;
}

export default Routes;
