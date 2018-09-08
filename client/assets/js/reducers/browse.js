import {
  FETCH_CATEGORY_FULFILLED,
  FETCH_CATEGORY_REJECTED,
  FETCH_CATEGORIES_FULFILLED,
  FETCH_CATEGORIES_REJECTED,
  FETCH_FEATURED_PLAYLISTS_FULFILLED,
  FETCH_FEATURED_PLAYLISTS_REJECTED,
  FETCH_NEW_RELEASES_FULFILLED,
  FETCH_NEW_RELEASES_REJECTED,
  FETCH_CATEGORY_PLAYLISTS_FULFILLED,
  FETCH_CATEGORY_PLAYLISTS_REJECTED,
} from '../constants/browse';

const initialState = {
  albums: {},
  categories: {},
  category: {},
  playlists: {},
  error: null,
};

const browseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_FULFILLED: {
      return {
        ...state,
        category: action.payload.category,
      };
    }
    case FETCH_CATEGORY_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_CATEGORIES_FULFILLED: {
      return {
        ...state,
        categories: action.payload.categories,
      };
    }
    case FETCH_CATEGORIES_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_FEATURED_PLAYLISTS_FULFILLED: {
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    }
    case FETCH_FEATURED_PLAYLISTS_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_NEW_RELEASES_FULFILLED: {
      return {
        ...state,
        albums: action.payload.albums,
      };
    }
    case FETCH_NEW_RELEASES_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_CATEGORY_PLAYLISTS_FULFILLED: {
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    }
    case FETCH_CATEGORY_PLAYLISTS_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default browseReducer;
