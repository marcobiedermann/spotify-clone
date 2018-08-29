import {
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_ERROR,
  FETCH_ARTIST_ALBUMS_SUCCESS,
  FETCH_ARTIST_ALBUMS_ERROR,
} from '../constants/artists';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchArtistSuccess = artist => ({
  type: FETCH_ARTIST_SUCCESS,
  artist,
});

export const fetchArtistError = error => ({
  type: FETCH_ARTIST_ERROR,
  error,
});

export const fetchArtist = (accessToken, id) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/artists/${id}.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchArtistSuccess(result));
  } catch (error) {
    dispatch(fetchArtistError(error));
  }
};

export const fetchArtistAlbumsSuccess = albums => ({
  type: FETCH_ARTIST_ALBUMS_SUCCESS,
  albums,
});

export const fetchArtistAlbumsError = error => ({
  type: FETCH_ARTIST_ALBUMS_ERROR,
  error,
});

export const fetchArtistAlbums = (accessToken, id) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/artists/${id}/albums.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchArtistAlbumsSuccess(result.items));
  } catch (error) {
    dispatch(fetchArtistAlbumsError(error));
  }
};
