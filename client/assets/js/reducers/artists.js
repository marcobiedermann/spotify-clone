import {
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_ERROR,
  FETCH_ARTIST_ALBUMS_SUCCESS,
  FETCH_ARTIST_ALBUMS_ERROR,
} from '../constants/artists';

const initialState = {
  artist: {},
  albums: [],
  error: null,
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTIST_SUCCESS: {
      return {
        ...state,
        artist: action.artist,
      };
    }
    case FETCH_ARTIST_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case FETCH_ARTIST_ALBUMS_SUCCESS: {
      return {
        ...state,
        albums: action.albums,
      };
    }
    case FETCH_ARTIST_ALBUMS_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default artistsReducer;
