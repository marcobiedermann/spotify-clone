import {
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USER_PLAYLISTS_SUCCESS,
  FETCH_USER_PLAYLISTS_ERROR,
} from '../constants/users';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  user,
});

export const fetchUserError = error => ({
  type: FETCH_USER_ERROR,
  error,
});

export const fetchUser = (accessToken, userId) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/users/${userId}.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchUserSuccess(result));
  } catch (error) {
    dispatch(fetchUserError(error));
  }
};

export const fetchUserPlaylistsSuccess = playlists => ({
  type: FETCH_USER_PLAYLISTS_SUCCESS,
  playlists,
});

export const fetchUserPlaylistsError = error => ({
  type: FETCH_USER_PLAYLISTS_ERROR,
  error,
});

export const fetchUserPlaylists = (accessToken, userId) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/users/${userId}/playlists.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchUserPlaylistsSuccess(result.items));
  } catch (error) {
    dispatch(fetchUserPlaylistsError(error));
  }
};
