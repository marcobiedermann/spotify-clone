import { ME_FETCH, ME_PLAYLISTS_FETCH } from '../constants/action-types';

const initialState = {
  error: null,
  me: null,
  isLoading: false,
  playlists: {},
};

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ME_FETCH}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        me: action.payload,
      };
    }

    case `${ME_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${ME_FETCH}_REJECTED`: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case `${ME_PLAYLISTS_FETCH}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        playlists: action.payload,
      };
    }

    case `${ME_PLAYLISTS_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${ME_PLAYLISTS_FETCH}_REJECTED`: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default meReducer;
