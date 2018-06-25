import {
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_ERROR,
} from '../constants/artist';

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
