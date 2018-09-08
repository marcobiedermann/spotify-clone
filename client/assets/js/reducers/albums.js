import {
  FETCH_ALBUM_FULFILLED,
  FETCH_ALBUM_REJECTED,
} from '../constants/albums';

const initialState = {
  artist: {},
  error: null,
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUM_FULFILLED: {
      return {
        ...state,
        album: action.payload.album,
      };
    }
    case FETCH_ALBUM_REJECTED: {
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
