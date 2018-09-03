import {
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  FETCH_FEATURED_PLAYLISTS_SUCCESS,
  FETCH_FEATURED_PLAYLISTS_ERROR,
  FETCH_NEW_RELEASES_SUCCESS,
  FETCH_NEW_RELEASES_ERROR,
  FETCH_CATEGORY_PLAYLISTS_SUCCESS,
  FETCH_CATEGORY_PLAYLISTS_ERROR,
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
    case FETCH_CATEGORY_SUCCESS: {
      return {
        ...state,
        category: action.payload.category,
      };
    }
    case FETCH_CATEGORY_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.payload.categories,
      };
    }
    case FETCH_CATEGORIES_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_FEATURED_PLAYLISTS_SUCCESS: {
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    }
    case FETCH_FEATURED_PLAYLISTS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_NEW_RELEASES_SUCCESS: {
      return {
        ...state,
        albums: action.payload.albums,
      };
    }
    case FETCH_NEW_RELEASES_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case FETCH_CATEGORY_PLAYLISTS_SUCCESS: {
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    }
    case FETCH_CATEGORY_PLAYLISTS_ERROR: {
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
