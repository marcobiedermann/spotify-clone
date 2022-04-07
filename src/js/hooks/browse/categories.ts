import useSWR, { SWRResponse } from 'swr';

interface Categories {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

interface Icon {
  height: number;
  url: string;
  width: number;
}

interface Item {
  href: string;
  icons: Icon[];
  id: string;
  name: string;
}

interface CategoriesData {
  categories: Categories;
}

interface Error {
  message: string;
}

function useBrowseCategories(): SWRResponse<CategoriesData, Error> {
  return useSWR<CategoriesData, Error>('/v1/browse/categories');
}

interface Icon {
  height: number;
  url: string;
  width: number;
}

interface CategoryData {
  href: string;
  icons: Icon[];
  id: string;
  name: string;
}

function useBrowseCategory(categoryId: string): SWRResponse<CategoryData, Error> {
  return useSWR<CategoryData, Error>(`/v1/browse/categories/${categoryId}`);
}

interface ExternalUrls {
  spotify: string;
}

interface Image {
  height: null;
  url: string;
  width: null;
}

interface Item {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: null;
  public: null;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

interface Owner {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface Playlists {
  href: string;
  items: Item[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}

interface Tracks {
  href: string;
  total: number;
}

interface PlaylistsData {
  playlists: Playlists;
}

function useBrowseCategoryPlaylists(categoryId: string): SWRResponse<PlaylistsData, Error> {
  return useSWR<PlaylistsData, Error>(`/v1/browse/categories/${categoryId}/playlists`);
}

export { useBrowseCategories, useBrowseCategory, useBrowseCategoryPlaylists };
