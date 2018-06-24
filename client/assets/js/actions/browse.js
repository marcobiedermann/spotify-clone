import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
} from '../constants/browse';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories,
});

export const fetchCategoriesError = error => ({
  type: FETCH_CATEGORIES_ERROR,
  error,
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

export const fetchCategorySuccess = category => ({
  type: FETCH_CATEGORY_SUCCESS,
  category,
});

export const fetchCategoryError = error => ({
  type: FETCH_CATEGORY_ERROR,
  error,
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
