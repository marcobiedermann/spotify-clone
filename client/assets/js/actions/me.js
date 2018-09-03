import {
  FETCH_ME_SUCCESS,
  FETCH_ME_ERROR,
  FETCH_ME_PLAYLISTS_SUCCESS,
  FETCH_ME_PLAYLISTS_ERROR,
} from '../constants/me';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchMeSuccess = me => ({
  type: FETCH_ME_SUCCESS,
  payload: {
    me,
  },
});

export const fetchMeError = error => ({
  type: FETCH_ME_ERROR,
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
  type: FETCH_ME_PLAYLISTS_SUCCESS,
  payload: {
    playlists,
  },
});

export const fetchMePlaylistsError = error => ({
  type: FETCH_ME_PLAYLISTS_ERROR,
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
