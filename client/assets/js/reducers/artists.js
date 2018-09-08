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

const initialState = {
  artist: {},
  artists: [],
  albums: [],
  error: null,
  tracks: [],
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTIST_FULFILLED: {
      return {
        ...state,
        artist: action.payload.artist,
      };
    }
    case FETCH_ARTIST_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_ARTIST_ALBUMS_FULFILLED: {
      return {
        ...state,
        albums: action.payload.albums,
      };
    }
    case FETCH_ARTIST_ALBUMS_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_ARTIST_RELATED_ARTISTS_FULFILLED: {
      return {
        ...state,
        artists: action.payload.artists,
      };
    }
    case FETCH_ARTIST_RELATED_ARTISTS_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_ARTIST_TOP_TRACKS_FULFILLED: {
      return {
        ...state,
        tracks: action.payload.tracks,
      };
    }
    case FETCH_ARTIST_TOP_TRACKS_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default artistsReducer;
