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

const initialState = {
  artist: {},
  artists: [],
  albums: [],
  error: null,
  isLoading: false,
  tracks: [],
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTIST_FETCH_FULFILLED: {
      return {
        ...state,
        artist: action.payload.artist,
        isLoading: false,
      };
    }

    case ARTIST_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ARTIST_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    case ARTIST_ALBUMS_FETCH_FULFILLED: {
      return {
        ...state,
        albums: action.payload.albums,
        isLoading: false,
      };
    }

    case ARTIST_ALBUMS_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ARTIST_ALBUMS_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    case ARTIST_RELATED_ARTISTS_FETCH_FULFILLED: {
      return {
        ...state,
        artists: action.payload.artists,
        isLoading: false,
      };
    }

    case ARTIST_RELATED_ARTISTS_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ARTIST_RELATED_ARTISTS_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    case ARTIST_TOP_TRACKS_FETCH_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        tracks: action.payload.tracks,
      };
    }

    case ARTIST_TOP_TRACKS_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ARTIST_TOP_TRACKS_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default artistsReducer;
