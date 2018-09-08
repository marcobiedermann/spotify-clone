import {
  FETCH_ME_FULFILLED,
  FETCH_ME_REJECTED,
  FETCH_ME_PLAYLISTS_FULFILLED,
  FETCH_ME_PLAYLISTS_REJECTED,
} from '../constants/me';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchMeSuccess = me => ({
  type: FETCH_ME_FULFILLED,
  payload: {
    me,
  },
});

export const fetchMeError = error => ({
  type: FETCH_ME_REJECTED,
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
  type: FETCH_ME_PLAYLISTS_FULFILLED,
  payload: {
    playlists,
  },
});

export const fetchMePlaylistsError = error => ({
  type: FETCH_ME_PLAYLISTS_REJECTED,
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
