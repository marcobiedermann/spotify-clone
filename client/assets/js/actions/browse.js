import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
} from '../constants/browse';

const baseUrl = 'https://api.spotify.com';

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories,
});

export const fetchCategoriesError = error => ({
  type: FETCH_CATEGORIES_ERROR,
  error,
});

export const fetchCategories = accessToken => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/browse/categories`, {
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
