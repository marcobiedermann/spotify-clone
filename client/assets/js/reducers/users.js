import {
  USER_FETCH_FULFILLED,
  USER_FETCH_PENDING,
  USER_FETCH_REJECTED,
  USER_PLAYLISTS_FETCH_FULFILLED,
  USER_PLAYLISTS_FETCH_PENDING,
  USER_PLAYLISTS_FETCH_REJECTED,
  USER_PLAYLIST_FETCH_FULFILLED,
  USER_PLAYLIST_FETCH_PENDING,
  USER_PLAYLIST_FETCH_REJECTED,
} from '../constants/users';

const initialState = {
  error: null,
  isLoading: false,
  playlist: {},
  playlists: [],
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
      };
    }

    case USER_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case USER_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    case USER_PLAYLISTS_FETCH_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        playlists: action.payload.playlists,
      };
    }

    case USER_PLAYLISTS_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case USER_PLAYLISTS_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    case USER_PLAYLIST_FETCH_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        playlist: action.payload.playlist,
      };
    }

    case USER_PLAYLIST_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case USER_PLAYLIST_FETCH_REJECTED: {
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

export default usersReducer;
