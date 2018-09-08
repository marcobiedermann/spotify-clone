import {
  FETCH_ME_FULFILLED,
  FETCH_ME_REJECTED,
  FETCH_ME_PLAYLISTS_FULFILLED,
  FETCH_ME_PLAYLISTS_REJECTED,
} from '../constants/me';

const initialState = {
  error: null,
  me: {},
  playlists: {},
};

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ME_FULFILLED: {
      return {
        ...state,
        me: action.payload.me,
      };
    }
    case FETCH_ME_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_ME_PLAYLISTS_FULFILLED: {
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    }
    case FETCH_ME_PLAYLISTS_REJECTED: {
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
