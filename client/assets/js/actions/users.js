import {
  USER_FETCH_FULFILLED,
  USER_FETCH_REJECTED,
  USER_PLAYLISTS_FETCH_FULFILLED,
  USER_PLAYLISTS_FETCH_REJECTED,
  USER_PLAYLIST_FETCH_FULFILLED,
  USER_PLAYLIST_FETCH_REJECTED,
} from '../constants/users';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchUserSuccess = user => ({
  type: USER_FETCH_FULFILLED,
  payload: {
    user,
  },
});

export const fetchUserError = error => ({
  type: USER_FETCH_REJECTED,
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
  type: USER_PLAYLISTS_FETCH_FULFILLED,
  payload: {
    playlists,
  },
});

export const fetchUserPlaylistsError = error => ({
  type: USER_PLAYLISTS_FETCH_REJECTED,
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
  type: USER_PLAYLIST_FETCH_FULFILLED,
  payload: {
    playlist,
  },
});

export const fetchUserPlaylistError = error => ({
  type: USER_PLAYLIST_FETCH_REJECTED,
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
