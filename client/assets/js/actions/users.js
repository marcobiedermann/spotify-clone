import {
  USER_FETCH,
  USER_PLAYLISTS_FETCH,
  USER_PLAYLIST_FETCH,
} from '../constants/action-types';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchUserFulfilled = user => ({
  type: `${USER_FETCH}_FULFILLED`,
  payload: user,
});

export const fetchUserPending = () => ({
  type: `${USER_FETCH}_PENDING`,
});

export const fetchUserRejected = error => ({
  type: `${USER_FETCH}_REJECTED`,
  payload: error,
  error: true,
});

export const fetchUser = (accessToken, userId) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/users/${userId}.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  dispatch(fetchUserPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchUserFulfilled(result));
  } catch (error) {
    dispatch(fetchUserRejected(new Error(error)));
  }
};

export const fetchUserPlaylistsFulfilled = playlists => ({
  type: `${USER_PLAYLISTS_FETCH}_FULFILLED`,
  payload: playlists,
});

export const fetchUserPlaylistsPending = () => ({
  type: `${USER_PLAYLISTS_FETCH}_PENDING`,
});

export const fetchUserPlaylistsRejected = error => ({
  type: `${USER_PLAYLISTS_FETCH}_REJECTED`,
  payload: error,
  error: true,
});

export const fetchUserPlaylists = (accessToken, userId) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/users/${userId}/playlists.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  dispatch(fetchUserPlaylistsPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchUserPlaylistsFulfilled(result.items));
  } catch (error) {
    dispatch(fetchUserPlaylistsRejected(new Error(error)));
  }
};

export const fetchUserPlaylistFulfilled = playlist => ({
  type: `${USER_PLAYLIST_FETCH}_FULFILLED`,
  payload: playlist,
});

export const fetchUserPlaylistPending = () => ({
  type: `${USER_PLAYLIST_FETCH}_PENDING`,
});

export const fetchUserPlaylistRejected = error => ({
  type: `${USER_PLAYLIST_FETCH}_REJECTED`,
  payload: error,
  error: true,
});

export const fetchUserPlaylist = (accessToken, userId, playlistId) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/users/${userId}/playlists/${playlistId}.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  dispatch(fetchUserPlaylistPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchUserPlaylistFulfilled(result));
  } catch (error) {
    dispatch(fetchUserPlaylistRejected(new Error(error)));
  }
};
