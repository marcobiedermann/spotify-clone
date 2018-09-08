import {
  FETCH_CATEGORY_FULFILLED,
  FETCH_CATEGORY_REJECTED,
  FETCH_CATEGORIES_FULFILLED,
  FETCH_CATEGORIES_REJECTED,
  FETCH_FEATURED_PLAYLISTS_FULFILLED,
  FETCH_FEATURED_PLAYLISTS_REJECTED,
  FETCH_NEW_RELEASES_FULFILLED,
  FETCH_NEW_RELEASES_REJECTED,
  FETCH_CATEGORY_PLAYLISTS_FULFILLED,
  FETCH_CATEGORY_PLAYLISTS_REJECTED,
} from '../constants/browse';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchCategorySuccess = category => ({
  type: FETCH_CATEGORY_FULFILLED,
  payload: {
    category,
  },
});

export const fetchCategoryError = error => ({
  type: FETCH_CATEGORY_REJECTED,
  payload: {
    error,
  },
  error: true,
});

export const fetchCategory = (accessToken, categoryId) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/browse/categories/${categoryId}.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchCategorySuccess(result));
  } catch (error) {
    dispatch(fetchCategoryError(error));
  }
};

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_FULFILLED,
  payload: {
    categories,
  },
});

export const fetchCategoriesError = error => ({
  type: FETCH_CATEGORIES_REJECTED,
  payload: {
    error,
  },
  error: true,
});

export const fetchCategories = accessToken => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/browse/categories.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchCategoriesSuccess(result.categories));
  } catch (error) {
    dispatch(fetchCategoriesError(error));
  }
};

export const fetchFeaturedPlaylistsSuccess = playlists => ({
  type: FETCH_FEATURED_PLAYLISTS_FULFILLED,
  payload: {
    playlists,
  },
});

export const fetchFeaturedPlaylistsError = error => ({
  type: FETCH_FEATURED_PLAYLISTS_REJECTED,
  payload: {
    error,
  },
  error: true,
});

export const fetchFeaturedPlaylists = accessToken => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/browse/featured-playlists.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchFeaturedPlaylistsSuccess(result.playlists));
  } catch (error) {
    dispatch(fetchFeaturedPlaylistsError(error));
  }
};

export const fetchNewReleasesSuccess = albums => ({
  type: FETCH_NEW_RELEASES_FULFILLED,
  payload: {
    albums,
  },
});

export const fetchNewReleasesError = error => ({
  type: FETCH_NEW_RELEASES_REJECTED,
  payload: {
    error,
  },
  error: true,
});

export const fetchNewReleases = accessToken => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/browse/new-releases.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchNewReleasesSuccess(result.albums));
  } catch (error) {
    dispatch(fetchNewReleasesError(error));
  }
};

export const fetchCategoryPlaylistsSuccess = playlists => ({
  type: FETCH_CATEGORY_PLAYLISTS_FULFILLED,
  payload: {
    playlists,
  },
});

export const fetchCategoryPlaylistsError = error => ({
  type: FETCH_CATEGORY_PLAYLISTS_REJECTED,
  payload: {
    error,
  },
  error: true,
});

export const fetchCategoryPlaylists = (accessToken, categoryId) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/browse/categories/${categoryId}/playlists.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchCategoryPlaylistsSuccess(result.playlists));
  } catch (error) {
    dispatch(fetchCategoryPlaylistsError(error));
  }
};
