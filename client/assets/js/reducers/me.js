import {
  ME_FETCH_FULFILLED,
  ME_FETCH_REJECTED,
  ME_PLAYLISTS_FETCH_FULFILLED,
  ME_PLAYLISTS_FETCH_REJECTED,
} from '../constants/me';

const initialState = {
  error: null,
  me: {},
  playlists: {},
};

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case ME_FETCH_FULFILLED: {
      return {
        ...state,
        me: action.payload.me,
      };
    }
    case ME_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case ME_PLAYLISTS_FETCH_FULFILLED: {
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    }
    case ME_PLAYLISTS_FETCH_REJECTED: {
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
