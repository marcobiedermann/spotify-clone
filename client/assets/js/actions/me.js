import { ME_FETCH, ME_PLAYLISTS_FETCH } from '../constants/action-types';
import handleError from '../utilities/error';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchMeFulfilled = (me) => ({
  type: `${ME_FETCH}_FULFILLED`,
  payload: me,
});

export const fetchMePending = () => ({
  type: `${ME_FETCH}_PENDING`,
});

export const fetchMeRejected = (error) => ({
  type: `${ME_FETCH}_REJECTED`,
  payload: error,
  error: true,
});

export const fetchMe = (accessToken) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/me.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  dispatch(fetchMePending());

  try {
    const response = await fetch(request);
    const result = await handleError(response).json();

    dispatch(fetchMeFulfilled(result));
  } catch (error) {
    dispatch(fetchMeRejected(new Error(error)));
  }
};

export const fetchMePlaylistsFulfilled = (playlists) => ({
  type: `${ME_PLAYLISTS_FETCH}_FULFILLED`,
  payload: playlists,
});

export const fetchMePlaylistsPending = () => ({
  type: `${ME_PLAYLISTS_FETCH}_PENDING`,
});

export const fetchMePlaylistsRejected = (error) => ({
  type: `${ME_PLAYLISTS_FETCH}_REJECTED`,
  payload: error,
  error: true,
});

export const fetchMePlaylists = (accessToken) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/me/playlists.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  dispatch(fetchMePlaylistsPending());

  try {
    const response = await fetch(request);
    const result = await handleError(response).json();

    dispatch(fetchMePlaylistsFulfilled(result));
  } catch (error) {
    dispatch(fetchMePlaylistsRejected(new Error(error)));
  }
};
