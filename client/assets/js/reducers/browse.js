import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
} from '../constants/browse';

const initialState = {
  categories: {},
  error: null,
};

const browseReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default browseReducer;
