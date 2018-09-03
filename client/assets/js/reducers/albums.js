import {
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_ERROR,
} from '../constants/albums';

const initialState = {
  artist: {},
  error: null,
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUM_SUCCESS: {
      return {
        ...state,
        album: action.payload.album,
      };
    }
    case FETCH_ALBUM_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default albumsReducer;
