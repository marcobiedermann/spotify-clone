import {
  ARTIST_FETCH_FULFILLED,
  ARTIST_FETCH_PENDING,
  ARTIST_FETCH_REJECTED,
  ARTIST_ALBUMS_FETCH_FULFILLED,
  ARTIST_ALBUMS_FETCH_PENDING,
  ARTIST_ALBUMS_FETCH_REJECTED,
  ARTIST_RELATED_ARTISTS_FETCH_FULFILLED,
  ARTIST_RELATED_ARTISTS_FETCH_PENDING,
  ARTIST_RELATED_ARTISTS_FETCH_REJECTED,
  ARTIST_TOP_TRACKS_FETCH_FULFILLED,
  ARTIST_TOP_TRACKS_FETCH_PENDING,
  ARTIST_TOP_TRACKS_FETCH_REJECTED,
} from '../constants/artists';

// const baseUrl = 'https://api.spotify.com';
const baseUrl = 'http://localhost:8080/data';

export const fetchArtistFulfilled = artist => ({
  type: ARTIST_FETCH_FULFILLED,
  payload: {
    artist,
  },
});

export const fetchArtistPending = () => ({
  type: ARTIST_FETCH_PENDING,
});

export const fetchArtistRejected = error => ({
  type: ARTIST_FETCH_REJECTED,
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

  dispatch(fetchArtistPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchArtistFulfilled(result));
  } catch (error) {
    dispatch(fetchArtistRejected(error));
  }
};

export const fetchArtistAlbumsFulfilled = albums => ({
  type: ARTIST_ALBUMS_FETCH_FULFILLED,
  payload: {
    albums,
  },
});

export const fetchArtistAlbumsPending = () => ({
  type: ARTIST_ALBUMS_FETCH_PENDING,
});

export const fetchArtistAlbumsRejected = error => ({
  type: ARTIST_ALBUMS_FETCH_REJECTED,
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

  dispatch(fetchArtistAlbumsPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchArtistAlbumsFulfilled(result.items));
  } catch (error) {
    dispatch(fetchArtistAlbumsRejected(error));
  }
};

export const fetchArtistRelatedArtistsFulfilled = artists => ({
  type: ARTIST_RELATED_ARTISTS_FETCH_FULFILLED,
  payload: {
    artists,
  },
});

export const fetchArtistRelatedArtistsPending = () => ({
  type: ARTIST_RELATED_ARTISTS_FETCH_PENDING,
});

export const fetchArtistRelatedArtistsRejected = error => ({
  type: ARTIST_RELATED_ARTISTS_FETCH_REJECTED,
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

  dispatch(fetchArtistRelatedArtistsPending());

  try {
    const response = await fetch(request);
    const result = await response.json();

    dispatch(fetchArtistRelatedArtistsFulfilled(result.artists));
  } catch (error) {
    dispatch(fetchArtistRelatedArtistsRejected(error));
  }
};

export const fetchArtistTopTracksFulfilled = tracks => ({
  type: ARTIST_TOP_TRACKS_FETCH_FULFILLED,
  payload: {
    tracks,
  },
});

export const fetchArtistTopTracksPending = () => ({
  type: ARTIST_TOP_TRACKS_FETCH_PENDING,
});

export const fetchArtistTopTracksRejected = error => ({
  type: ARTIST_TOP_TRACKS_FETCH_REJECTED,
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

    dispatch(fetchArtistTopTracksFulfilled(result.tracks));
  } catch (error) {
    dispatch(fetchArtistTopTracksRejected(error));
  }
};
