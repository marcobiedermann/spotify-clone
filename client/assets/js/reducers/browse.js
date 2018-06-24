import {
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  FETCH_FEATURED_PLAYLISTS_SUCCESS,
  FETCH_FEATURED_PLAYLISTS_ERROR,
} from '../constants/browse';

const initialState = {
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
        category: action.category,
      };
    }
    case FETCH_CATEGORY_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.categories,
      };
    }
    case FETCH_CATEGORIES_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case FETCH_FEATURED_PLAYLISTS_SUCCESS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case FETCH_FEATURED_PLAYLISTS_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default browseReducer;
