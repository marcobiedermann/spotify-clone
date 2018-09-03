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

const initialState = {
  artist: {},
  artists: [],
  albums: [],
  error: null,
  tracks: [],
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTIST_SUCCESS: {
      return {
        ...state,
        artist: action.payload.artist,
      };
    }
    case FETCH_ARTIST_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_ARTIST_ALBUMS_SUCCESS: {
      return {
        ...state,
        albums: action.payload.albums,
      };
    }
    case FETCH_ARTIST_ALBUMS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_ARTIST_RELATED_ARTISTS_SUCCESS: {
      return {
        ...state,
        artists: action.payload.artists,
      };
    }
    case FETCH_ARTIST_RELATED_ARTISTS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_ARTIST_TOP_TRACKS_SUCCESS: {
      return {
        ...state,
        tracks: action.payload.tracks,
      };
    }
    case FETCH_ARTIST_TOP_TRACKS_ERROR: {
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
