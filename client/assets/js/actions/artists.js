import {
  FETCH_ARTIST_FULFILLED,
  FETCH_ARTIST_REJECTED,
  FETCH_ARTIST_ALBUMS_FULFILLED,
  FETCH_ARTIST_ALBUMS_REJECTED,
  FETCH_ARTIST_RELATED_ARTISTS_FULFILLED,
  FETCH_ARTIST_RELATED_ARTISTS_REJECTED,
  FETCH_ARTIST_TOP_TRACKS_FULFILLED,
  FETCH_ARTIST_TOP_TRACKS_REJECTED,
} from '../constants/artists';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchArtistSuccess = artist => ({
  type: FETCH_ARTIST_FULFILLED,
  payload: {
    artist,
  },
});

export const fetchArtistError = error => ({
  type: FETCH_ARTIST_REJECTED,
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
  type: FETCH_ARTIST_ALBUMS_FULFILLED,
  payload: {
    albums,
  },
});

export const fetchArtistAlbumsError = error => ({
  type: FETCH_ARTIST_ALBUMS_REJECTED,
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
  type: FETCH_ARTIST_RELATED_ARTISTS_FULFILLED,
  payload: {
    artists,
  },
});

export const fetchArtistRelatedArtistsError = error => ({
  type: FETCH_ARTIST_RELATED_ARTISTS_REJECTED,
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
  type: FETCH_ARTIST_TOP_TRACKS_FULFILLED,
  payload: {
    tracks,
  },
});

export const fetchArtistTopTracksError = error => ({
  type: FETCH_ARTIST_TOP_TRACKS_REJECTED,
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
