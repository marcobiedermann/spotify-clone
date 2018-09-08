import {
  ALBUM_FETCH,
} from '../constants/action-types';

const initialState = {
  artist: {},
  error: null,
  isLoading: false,
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ALBUM_FETCH}_FULFILLED`: {
      return {
        ...state,
        album: action.payload,
        isLoading: false,
      };
    }

    case `${ALBUM_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${ALBUM_FETCH}_REJECTED`: {
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

export default albumsReducer;
