import {
  ME_FETCH_FULFILLED,
  ME_FETCH_PENDING,
  ME_FETCH_REJECTED,
  ME_PLAYLISTS_FETCH_FULFILLED,
  ME_PLAYLISTS_FETCH_PENDING,
  ME_PLAYLISTS_FETCH_REJECTED,
} from '../constants/me';

const initialState = {
  error: null,
  me: {},
  isLoading: false,
  playlists: {},
};

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case ME_FETCH_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        me: action.payload.me,
      };
    }

    case ME_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ME_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    case ME_PLAYLISTS_FETCH_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        playlists: action.payload.playlists,
      };
    }

    case ME_PLAYLISTS_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ME_PLAYLISTS_FETCH_REJECTED: {
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

export default meReducer;
