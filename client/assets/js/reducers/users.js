import {
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USER_PLAYLISTS_SUCCESS,
  FETCH_USER_PLAYLISTS_ERROR,
  FETCH_USER_PLAYLIST_SUCCESS,
  FETCH_USER_PLAYLIST_ERROR,
} from '../constants/users';

const initialState = {
  error: null,
  playlist: {},
  playlists: [],
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    case FETCH_USER_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_USER_PLAYLISTS_SUCCESS: {
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    }
    case FETCH_USER_PLAYLISTS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_USER_PLAYLIST_SUCCESS: {
      return {
        ...state,
        playlist: action.payload.playlist,
      };
    }
    case FETCH_USER_PLAYLIST_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
