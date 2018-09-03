import {
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_ERROR,
  FETCH_ARTIST_ALBUMS_SUCCESS,
  FETCH_ARTIST_ALBUMS_ERROR,
  FETCH_ARTIST_RELATED_ARTISTS_SUCCESS,
  FETCH_ARTIST_RELATED_ARTISTS_ERROR,
  FETCH_ARTIST_TOP_TRACKS_SUCCESS,
  FETCH_ARTIST_TOP_TRACKS_ERROR,
} from '../constants/artists';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchArtistSuccess = artist => ({
  type: FETCH_ARTIST_SUCCESS,
  payload: {
    artist,
  },
});

export const fetchArtistError = error => ({
  type: FETCH_ARTIST_ERROR,
  payload: {
    error,
  },
  error: true,
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
  payload: {
    albums,
  },
});

export const fetchArtistAlbumsError = error => ({
  type: FETCH_ARTIST_ALBUMS_ERROR,
  payload: {
    error,
  },
  error: true,
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

export const fetchArtistRelatedArtistsSuccess = artists => ({
  type: FETCH_ARTIST_RELATED_ARTISTS_SUCCESS,
  payload: {
    artists,
  },
});

export const fetchArtistRelatedArtistsError = error => ({
  type: FETCH_ARTIST_RELATED_ARTISTS_ERROR,
  payoad: {
    error,
  },
  error: true,
});

export const fetchArtistRelatedArtists = (accessToken, id) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/artists/${id}/related-artists.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchArtistRelatedArtistsSuccess(result.artists));
  } catch (error) {
    dispatch(fetchArtistRelatedArtistsError(error));
  }
};

export const fetchArtistTopTracksSuccess = tracks => ({
  type: FETCH_ARTIST_TOP_TRACKS_SUCCESS,
  payload: {
    tracks,
  },
});

export const fetchArtistTopTracksError = error => ({
  type: FETCH_ARTIST_TOP_TRACKS_ERROR,
  payload: {
    error,
  },
  error: true,
});

export const fetchArtistTopTracks = (accessToken, id) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/artists/${id}/top-tracks.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchArtistTopTracksSuccess(result.tracks));
  } catch (error) {
    dispatch(fetchArtistTopTracksError(error));
  }
};
