import {
  ALBUM_FETCH_FULFILLED,
  ALBUM_FETCH_REJECTED,
} from '../constants/albums';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchAlbumSuccess = album => ({
  type: ALBUM_FETCH_FULFILLED,
  payload: {
    album,
  },
});

export const fetchAlbumError = error => ({
  type: ALBUM_FETCH_REJECTED,
  payload: {
    error,
  },
  error: true,
});

export const fetchAlbum = (accessToken, albumId) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/albums/${albumId}.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchAlbumSuccess(result));
  } catch (error) {
    dispatch(fetchAlbumError(error));
  }
};
