import {
  CATEGORY_FETCH_FULFILLED,
  CATEGORY_FETCH_PENDING,
  CATEGORY_FETCH_REJECTED,
  CATEGORIES_FETCH_FULFILLED,
  CATEGORIES_FETCH_PENDING,
  CATEGORIES_FETCH_REJECTED,
  FEATURED_PLAYLISTS_FETCH_FULFILLED,
  FEATURED_PLAYLISTS_FETCH_PENDING,
  FEATURED_PLAYLISTS_FETCH_REJECTED,
  NEW_RELEASES_FETCH_FULFILLED,
  NEW_RELEASES_FETCH_PENDING,
  NEW_RELEASES_FETCH_REJECTED,
  CATEGORY_PLAYLISTS_FETCH_FULFILLED,
  CATEGORY_PLAYLISTS_FETCH_PENDING,
  CATEGORY_PLAYLISTS_FETCH_REJECTED,
} from '../constants/browse';

const initialState = {
  albums: {},
  categories: {},
  category: {},
  isLoading: false,
  playlists: {},
  error: null,
};

const browseReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_FETCH_FULFILLED: {
      return {
        ...state,
        category: action.payload.category,
        isLoading: false,
      };
    }

    case CATEGORY_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case CATEGORY_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    case CATEGORIES_FETCH_FULFILLED: {
      return {
        ...state,
        categories: action.payload.categories,
        isLoading: false,
      };
    }

    case CATEGORIES_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case CATEGORIES_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    case FEATURED_PLAYLISTS_FETCH_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        playlists: action.payload.playlists,
      };
    }

    case FEATURED_PLAYLISTS_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case FEATURED_PLAYLISTS_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    case NEW_RELEASES_FETCH_FULFILLED: {
      return {
        ...state,
        albums: action.payload.albums,
        isLoading: false,
      };
    }

    case NEW_RELEASES_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case NEW_RELEASES_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    case CATEGORY_PLAYLISTS_FETCH_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        playlists: action.payload.playlists,
      };
    }

    case CATEGORY_PLAYLISTS_FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case CATEGORY_PLAYLISTS_FETCH_REJECTED: {
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

export default browseReducer;
