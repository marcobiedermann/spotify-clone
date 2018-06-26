import {
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_ERROR,
} from '../constants/albums';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchAlbumSuccess = album => ({
  type: FETCH_ALBUM_SUCCESS,
  album,
});

export const fetchAlbumError = error => ({
  type: FETCH_ALBUM_ERROR,
  error,
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
