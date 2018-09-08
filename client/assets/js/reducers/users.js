import {
  FETCH_USER_FULFILLED,
  FETCH_USER_REJECTED,
  FETCH_USER_PLAYLISTS_FULFILLED,
  FETCH_USER_PLAYLISTS_REJECTED,
  FETCH_USER_PLAYLIST_FULFILLED,
  FETCH_USER_PLAYLIST_REJECTED,
} from '../constants/users';

const initialState = {
  error: null,
  playlist: {},
  playlists: [],
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_FULFILLED: {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    case FETCH_USER_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_USER_PLAYLISTS_FULFILLED: {
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    }
    case FETCH_USER_PLAYLISTS_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_USER_PLAYLIST_FULFILLED: {
      return {
        ...state,
        playlist: action.payload.playlist,
      };
    }
    case FETCH_USER_PLAYLIST_REJECTED: {
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
