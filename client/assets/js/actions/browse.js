import {
  CATEGORY_FETCH,
  CATEGORIES_FETCH,
  FEATURED_PLAYLISTS_FETCH,
  NEW_RELEASES_FETCH,
  CATEGORY_PLAYLISTS_FETCH,
} from '../constants/browse';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchCategoryFulfilled = category => ({
  type: `${CATEGORY_FETCH}_FULFILLED`,
  payload: {
    category,
  },
});

export const fetchCategoryPending = () => ({
  type: `${CATEGORY_FETCH}_PENDING`,
});

export const fetchCategoryRejected = error => ({
  type: `${CATEGORY_FETCH}_REJECTED`,
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

  dispatch(fetchCategoryPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchCategoryFulfilled(result));
  } catch (error) {
    dispatch(fetchCategoryRejected(error));
  }
};

export const fetchCategoriesFulfilled = categories => ({
  type: `${CATEGORIES_FETCH}_FULFILLED`,
  payload: {
    categories,
  },
});

export const fetchCategoriesPending = () => ({
  type: `${CATEGORIES_FETCH}_PENDING`,
});

export const fetchCategoriesRejected = error => ({
  type: `${CATEGORIES_FETCH}_REJECTED`,
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

  dispatch(fetchCategoriesPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchCategoriesFulfilled(result.categories));
  } catch (error) {
    dispatch(fetchCategoriesRejected(error));
  }
};

export const fetchFeaturedPlaylistsFulfilled = playlists => ({
  type: `${FEATURED_PLAYLISTS_FETCH}_FULFILLED`,
  payload: {
    playlists,
  },
});

export const fetchFeaturedPlaylistsPending = () => ({
  type: `${FEATURED_PLAYLISTS_FETCH}_PENDING`,
});

export const fetchFeaturedPlaylistsRejected = error => ({
  type: `${FEATURED_PLAYLISTS_FETCH}_REJECTED`,
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

  dispatch(fetchFeaturedPlaylistsPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchFeaturedPlaylistsFulfilled(result.playlists));
  } catch (error) {
    dispatch(fetchFeaturedPlaylistsRejected(error));
  }
};

export const fetchNewReleasesFulfilled = albums => ({
  type: `${NEW_RELEASES_FETCH}_FULFILLED`,
  payload: {
    albums,
  },
});

export const fetchNewReleasesPending = () => ({
  type: `${NEW_RELEASES_FETCH}_PENDING`,
});

export const fetchNewReleasesRejected = error => ({
  type: `${NEW_RELEASES_FETCH}_REJECTED`,
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

  dispatch(fetchNewReleasesPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchNewReleasesFulfilled(result.albums));
  } catch (error) {
    dispatch(fetchNewReleasesRejected(error));
  }
};

export const fetchCategoryPlaylistsFulfilled = playlists => ({
  type: `${CATEGORY_PLAYLISTS_FETCH}_FULFILLED`,
  payload: {
    playlists,
  },
});

export const fetchCategoryPlaylistsPending = () => ({
  type: `${CATEGORY_PLAYLISTS_FETCH}_PENDING`,
});

export const fetchCategoryPlaylistsRejected = error => ({
  type: `${CATEGORY_PLAYLISTS_FETCH}_REJECTED`,
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

  dispatch(fetchCategoryPlaylistsPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchCategoryPlaylistsFulfilled(result.playlists));
  } catch (error) {
    dispatch(fetchCategoryPlaylistsRejected(error));
  }
};
