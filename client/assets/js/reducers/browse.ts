import {
  CATEGORY_FETCH,
  CATEGORIES_FETCH,
  FEATURED_PLAYLISTS_FETCH,
  NEW_RELEASES_FETCH,
  CATEGORY_PLAYLISTS_FETCH,
} from '../constants/action-types';

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
    case `${CATEGORY_FETCH}_FULFILLED`: {
      return {
        ...state,
        category: action.payload,
        isLoading: false,
      };
    }

    case `${CATEGORY_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${CATEGORY_FETCH}_REJECTED`: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case `${CATEGORIES_FETCH}_FULFILLED`: {
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    }

    case `${CATEGORIES_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${CATEGORIES_FETCH}_REJECTED`: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case `${FEATURED_PLAYLISTS_FETCH}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        playlists: action.payload,
      };
    }

    case `${FEATURED_PLAYLISTS_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${FEATURED_PLAYLISTS_FETCH}_REJECTED`: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case `${NEW_RELEASES_FETCH}_FULFILLED`: {
      return {
        ...state,
        albums: action.payload,
        isLoading: false,
      };
    }

    case `${NEW_RELEASES_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${NEW_RELEASES_FETCH}_REJECTED`: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case `${CATEGORY_PLAYLISTS_FETCH}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        playlists: action.payload,
      };
    }

    case `${CATEGORY_PLAYLISTS_FETCH}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${CATEGORY_PLAYLISTS_FETCH}_REJECTED`: {
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

export default browseReducer;