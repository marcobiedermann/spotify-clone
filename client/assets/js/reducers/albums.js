import {
  ALBUM_FETCH_FULFILLED,
  ALBUM_FETCH_REJECTED,
} from '../constants/albums';

const initialState = {
  artist: {},
  error: null,
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALBUM_FETCH_FULFILLED: {
      return {
        ...state,
        album: action.payload.album,
      };
    }
    case ALBUM_FETCH_REJECTED: {
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
