import {
  CATEGORY_FETCH_FULFILLED,
  CATEGORY_FETCH_REJECTED,
  CATEGORIES_FETCH_FULFILLED,
  CATEGORIES_FETCH_REJECTED,
  FEATURED_PLAYLISTS_FETCH_FULFILLED,
  FEATURED_PLAYLISTS_FETCH_REJECTED,
  NEW_RELEASES_FETCH_FULFILLED,
  NEW_RELEASES_FETCH_REJECTED,
  CATEGORY_PLAYLISTS_FETCH_FULFILLED,
  CATEGORY_PLAYLISTS_FETCH_REJECTED,
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
    case CATEGORY_FETCH_FULFILLED: {
      return {
        ...state,
        category: action.payload.category,
      };
    }
    case CATEGORY_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case CATEGORIES_FETCH_FULFILLED: {
      return {
        ...state,
        categories: action.payload.categories,
      };
    }
    case CATEGORIES_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FEATURED_PLAYLISTS_FETCH_FULFILLED: {
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    }
    case FEATURED_PLAYLISTS_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case NEW_RELEASES_FETCH_FULFILLED: {
      return {
        ...state,
        albums: action.payload.albums,
      };
    }
    case NEW_RELEASES_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case CATEGORY_PLAYLISTS_FETCH_FULFILLED: {
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    }
    case CATEGORY_PLAYLISTS_FETCH_REJECTED: {
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
