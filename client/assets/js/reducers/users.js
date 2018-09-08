import {
  USER_FETCH,
  USER_PLAYLISTS_FETCH,
  USER_PLAYLIST_FETCH,
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
    case `${USER_FETCH}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
      };
    }

    case `${USER_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${USER_FETCH}_REJECTED`: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    case `${USER_PLAYLISTS_FETCH}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        playlists: action.payload.playlists,
      };
    }

    case `${USER_PLAYLISTS_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${USER_PLAYLISTS_FETCH}_REJECTED`: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    case `${USER_PLAYLIST_FETCH}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        playlist: action.payload.playlist,
      };
    }

    case `${USER_PLAYLIST_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${USER_PLAYLIST_FETCH}_REJECTED`: {
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
