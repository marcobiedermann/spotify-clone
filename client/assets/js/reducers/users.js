import {
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USER_PLAYLISTS_SUCCESS,
  FETCH_USER_PLAYLISTS_ERROR,
} from '../constants/users';

const initialState = {
  error: null,
  playlists: [],
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
      };
    }
    case FETCH_USER_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case FETCH_USER_PLAYLISTS_SUCCESS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case FETCH_USER_PLAYLISTS_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
