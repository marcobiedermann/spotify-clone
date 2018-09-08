import {
  CATEGORY_FETCH_FULFILLED,
  CATEGORY_FETCH_REJECTED,
  CATEGORIES_FETCH_FULFILLED,
  CATEGORIES_FETCH_REJECTED,
  FEATURED_PLAYLISTS_FETCH_FULFILLED,
  FEATURED_PLAYLISTS_FETCH_REJECTED,
  NEW_RELEASES_FETCH_FULFILLED,
  NEW_RELEASES_FETCH_REJECTED,
  CATEGORY_PLAYLISTS_FETCH_FULFILLED,
  CATEGORY_PLAYLISTS_FETCH_REJECTED,
} from '../constants/browse';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchCategorySuccess = category => ({
  type: CATEGORY_FETCH_FULFILLED,
  payload: {
    category,
  },
});

export const fetchCategoryError = error => ({
  type: CATEGORY_FETCH_REJECTED,
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
  type: CATEGORIES_FETCH_FULFILLED,
  payload: {
    categories,
  },
});

export const fetchCategoriesError = error => ({
  type: CATEGORIES_FETCH_REJECTED,
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
  type: FEATURED_PLAYLISTS_FETCH_FULFILLED,
  payload: {
    playlists,
  },
});

export const fetchFeaturedPlaylistsError = error => ({
  type: FEATURED_PLAYLISTS_FETCH_REJECTED,
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
  type: NEW_RELEASES_FETCH_FULFILLED,
  payload: {
    albums,
  },
});

export const fetchNewReleasesError = error => ({
  type: NEW_RELEASES_FETCH_REJECTED,
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
  type: CATEGORY_PLAYLISTS_FETCH_FULFILLED,
  payload: {
    playlists,
  },
});

export const fetchCategoryPlaylistsError = error => ({
  type: CATEGORY_PLAYLISTS_FETCH_REJECTED,
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
