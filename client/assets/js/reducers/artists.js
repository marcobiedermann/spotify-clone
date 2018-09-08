import {
  ARTIST_FETCH_FULFILLED,
  ARTIST_FETCH_REJECTED,
  ARTIST_ALBUMS_FETCH_FULFILLED,
  ARTIST_ALBUMS_FETCH_REJECTED,
  ARTIST_RELATED_ARTISTS_FETCH_FULFILLED,
  ARTIST_RELATED_ARTISTS_FETCH_REJECTED,
  ARTIST_TOP_TRACKS_FETCH_FULFILLED,
  ARTIST_TOP_TRACKS_FETCH_REJECTED,
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
    case ARTIST_FETCH_FULFILLED: {
      return {
        ...state,
        artist: action.payload.artist,
      };
    }
    case ARTIST_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case ARTIST_ALBUMS_FETCH_FULFILLED: {
      return {
        ...state,
        albums: action.payload.albums,
      };
    }
    case ARTIST_ALBUMS_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case ARTIST_RELATED_ARTISTS_FETCH_FULFILLED: {
      return {
        ...state,
        artists: action.payload.artists,
      };
    }
    case ARTIST_RELATED_ARTISTS_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case ARTIST_TOP_TRACKS_FETCH_FULFILLED: {
      return {
        ...state,
        tracks: action.payload.tracks,
      };
    }
    case ARTIST_TOP_TRACKS_FETCH_REJECTED: {
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
