import {
  USER_FETCH_FULFILLED,
  USER_FETCH_REJECTED,
  USER_PLAYLISTS_FETCH_FULFILLED,
  USER_PLAYLISTS_FETCH_REJECTED,
  USER_PLAYLIST_FETCH_FULFILLED,
  USER_PLAYLIST_FETCH_REJECTED,
} from '../constants/users';

const initialState = {
  error: null,
  playlist: {},
  playlists: [],
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_FULFILLED: {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    case USER_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case USER_PLAYLISTS_FETCH_FULFILLED: {
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    }
    case USER_PLAYLISTS_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case USER_PLAYLIST_FETCH_FULFILLED: {
      return {
        ...state,
        playlist: action.payload.playlist,
      };
    }
    case USER_PLAYLIST_FETCH_REJECTED: {
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
