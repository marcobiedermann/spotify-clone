import {
  ARTIST_FETCH,
  ARTIST_ALBUMS_FETCH,
  ARTIST_RELATED_ARTISTS_FETCH,
  ARTIST_TOP_TRACKS_FETCH,
} from '../constants/action-types';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchArtistFulfilled = artist => ({
  type: `${ARTIST_FETCH}_FULFILLED`,
  payload: artist,
});

export const fetchArtistPending = () => ({
  type: `${ARTIST_FETCH}_PENDING`,
});

export const fetchArtistRejected = error => ({
  type: `${ARTIST_FETCH}_REJECTED`,
  payload: error,
  error: true,
});

export const fetchArtist = (accessToken, id) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/artists/${id}.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  dispatch(fetchArtistPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchArtistFulfilled(result));
  } catch (error) {
    dispatch(fetchArtistRejected(new Error(error)));
  }
};

export const fetchArtistAlbumsFulfilled = albums => ({
  type: `${ARTIST_ALBUMS_FETCH}_FULFILLED`,
  payload: albums,
});

export const fetchArtistAlbumsPending = () => ({
  type: `${ARTIST_ALBUMS_FETCH}_PENDING`,
});

export const fetchArtistAlbumsRejected = error => ({
  type: `${ARTIST_ALBUMS_FETCH}_REJECTED`,
  payload: error,
  error: true,
});

export const fetchArtistAlbums = (accessToken, id) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/artists/${id}/albums.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  dispatch(fetchArtistAlbumsPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchArtistAlbumsFulfilled(result.items));
  } catch (error) {
    dispatch(fetchArtistAlbumsRejected(new Error(error)));
  }
};

export const fetchArtistRelatedArtistsFulfilled = artists => ({
  type: `${ARTIST_RELATED_ARTISTS_FETCH}_FULFILLED`,
  payload: artists,
});

export const fetchArtistRelatedArtistsPending = () => ({
  type: `${ARTIST_RELATED_ARTISTS_FETCH}_PENDING`,
});

export const fetchArtistRelatedArtistsRejected = error => ({
  type: `${ARTIST_RELATED_ARTISTS_FETCH}_REJECTED`,
  payoad: error,
  error: true,
});

export const fetchArtistRelatedArtists = (accessToken, id) => async (dispatch) => {
  const request = new Request(`${baseUrl}/v1/artists/${id}/related-artists.json`, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  });

  dispatch(fetchArtistRelatedArtistsPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchArtistRelatedArtistsFulfilled(result.artists));
  } catch (error) {
    dispatch(fetchArtistRelatedArtistsRejected(new Error(error)));
  }
};

export const fetchArtistTopTracksFulfilled = tracks => ({
  type: `${ARTIST_TOP_TRACKS_FETCH}_FULFILLED`,
  payload: tracks,
});

export const fetchArtistTopTracksPending = () => ({
  type: `${ARTIST_TOP_TRACKS_FETCH}_PENDING`,
});

export const fetchArtistTopTracksRejected = error => ({
  type: `${ARTIST_TOP_TRACKS_FETCH}_REJECTED`,
  payload: error,
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

    dispatch(fetchArtistTopTracksFulfilled(result.tracks));
  } catch (error) {
    dispatch(fetchArtistTopTracksRejected(new Error(error)));
  }
};
