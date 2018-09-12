import {
  ALBUM_FETCH,
} from '../constants/action-types';
import handleError from '../utilities/error';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchAlbumFulfilled = album => ({
  type: `${ALBUM_FETCH}_FULFILLED`,
  payload: album,
});

export const fetchAlbumPending = () => ({
  type: `${ALBUM_FETCH}_PENDING`,
});

export const fetchAlbumRejected = error => ({
  type: `${ALBUM_FETCH}_REJECTED`,
  payload: error,
  error: true,
});

export const fetchAlbum = (accessToken, albumId) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/albums/${albumId}.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  dispatch(fetchAlbumFulfilled());

  try {
    const response = await fetch(request);
    const result = await handleError(response).json();

    dispatch(fetchAlbumFulfilled(result));
  } catch (error) {
    dispatch(fetchAlbumRejected(new Error(error)));
  }
};
