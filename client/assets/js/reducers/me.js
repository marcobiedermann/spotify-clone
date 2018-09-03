import {
  FETCH_ME_SUCCESS,
  FETCH_ME_ERROR,
  FETCH_ME_PLAYLISTS_SUCCESS,
  FETCH_ME_PLAYLISTS_ERROR,
} from '../constants/me';

const initialState = {
  error: null,
  me: {},
  playlists: {},
};

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ME_SUCCESS: {
      return {
        ...state,
        me: action.payload.me,
      };
    }
    case FETCH_ME_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_ME_PLAYLISTS_SUCCESS: {
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    }
    case FETCH_ME_PLAYLISTS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default meReducer;
