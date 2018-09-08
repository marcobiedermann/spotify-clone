import {
  ME_FETCH_FULFILLED,
  ME_FETCH_REJECTED,
  ME_PLAYLISTS_FETCH_FULFILLED,
  ME_PLAYLISTS_FETCH_REJECTED,
} from '../constants/me';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchMeSuccess = me => ({
  type: ME_FETCH_FULFILLED,
  payload: {
    me,
  },
});

export const fetchMeError = error => ({
  type: ME_FETCH_REJECTED,
  payload: {
    error,
  },
  error: true,
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

export const fetchMePlaylistsSuccess = playlists => ({
  type: ME_PLAYLISTS_FETCH_FULFILLED,
  payload: {
    playlists,
  },
});

export const fetchMePlaylistsError = error => ({
  type: ME_PLAYLISTS_FETCH_REJECTED,
  payload: {
    error,
  },
  error: true,
});

export const fetchMePlaylists = accessToken => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/me/playlists.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchMePlaylistsSuccess(result));
  } catch (error) {
    dispatch(fetchMePlaylistsError(error));
  }
};
