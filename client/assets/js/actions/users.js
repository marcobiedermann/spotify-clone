import {
  FETCH_USER_FULFILLED,
  FETCH_USER_REJECTED,
  FETCH_USER_PLAYLISTS_FULFILLED,
  FETCH_USER_PLAYLISTS_REJECTED,
  FETCH_USER_PLAYLIST_FULFILLED,
  FETCH_USER_PLAYLIST_REJECTED,
} from '../constants/users';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchUserSuccess = user => ({
  type: FETCH_USER_FULFILLED,
  payload: {
    user,
  },
});

export const fetchUserError = error => ({
  type: FETCH_USER_REJECTED,
  payload: {
    error,
  },
  error: true,
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
  type: FETCH_USER_PLAYLISTS_FULFILLED,
  payload: {
    playlists,
  },
});

export const fetchUserPlaylistsError = error => ({
  type: FETCH_USER_PLAYLISTS_REJECTED,
  payload: {
    error,
  },
  error: true,
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

export const fetchUserPlaylistSuccess = playlist => ({
  type: FETCH_USER_PLAYLIST_FULFILLED,
  payload: {
    playlist,
  },
});

export const fetchUserPlaylistError = error => ({
  type: FETCH_USER_PLAYLIST_REJECTED,
  payload: {
    error,
  },
  error: true,
});

export const fetchUserPlaylist = (accessToken, userId, playlistId) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/users/${userId}/playlists/${playlistId}.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchUserPlaylistSuccess(result));
  } catch (error) {
    dispatch(fetchUserPlaylistError(error));
  }
};
