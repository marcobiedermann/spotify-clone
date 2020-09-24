import {
  ARTIST_FETCH,
  ARTIST_ALBUMS_FETCH,
  ARTIST_RELATED_ARTISTS_FETCH,
  ARTIST_TOP_TRACKS_FETCH,
} from '../constants/action-types';

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
    case `${ARTIST_FETCH}_FULFILLED`: {
      return {
        ...state,
        artist: action.payload,
        isLoading: false,
      };
    }

    case `${ARTIST_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${ARTIST_FETCH}_REJECTED`: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case `${ARTIST_ALBUMS_FETCH}_FULFILLED`: {
      return {
        ...state,
        albums: action.payload,
        isLoading: false,
      };
    }

    case `${ARTIST_ALBUMS_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${ARTIST_ALBUMS_FETCH}_REJECTED`: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case `${ARTIST_RELATED_ARTISTS_FETCH}_FULFILLED`: {
      return {
        ...state,
        artists: action.payload,
        isLoading: false,
      };
    }

    case `${ARTIST_RELATED_ARTISTS_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${ARTIST_RELATED_ARTISTS_FETCH}_REJECTED`: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case `${ARTIST_TOP_TRACKS_FETCH}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        tracks: action.payload,
      };
    }

    case `${ARTIST_TOP_TRACKS_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${ARTIST_TOP_TRACKS_FETCH}_REJECTED`: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default artistsReducer;
