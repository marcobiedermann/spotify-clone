import {
  FETCH_ME_SUCCESS,
  FETCH_ME_ERROR,
} from '../constants/me';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchMeSuccess = me => ({
  type: FETCH_ME_SUCCESS,
  me,
});

export const fetchMeError = error => ({
  type: FETCH_ME_ERROR,
  error,
});

export const fetchMe = accessToken => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/me.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchMeSuccess(result));
  } catch (error) {
    dispatch(fetchMeError(error));
  }
};
