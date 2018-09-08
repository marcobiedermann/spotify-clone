import {
  ALBUM_FETCH_FULFILLED,
  ALBUM_FETCH_PENDING,
  ALBUM_FETCH_REJECTED,
} from '../constants/albums';

const initialState = {
  artist: {},
  error: null,
  isLoading: false,
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALBUM_FETCH_FULFILLED: {
      return {
        ...state,
        album: action.payload.album,
        isLoading: false,
      };
    }

    case ALBUM_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ALBUM_FETCH_REJECTED: {
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

export default albumsReducer;
