import {
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_ERROR,
} from '../constants/artists';

const initialState = {
  artist: {},
  error: null,
};

const browseReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default browseReducer;
