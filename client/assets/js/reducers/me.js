import {
  FETCH_ME_SUCCESS,
  FETCH_ME_ERROR,
} from '../constants/me';

const initialState = {
  me: {},
  error: null,
};

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ME_SUCCESS: {
      return {
        ...state,
        me: action.me,
      };
    }
    case FETCH_ME_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default meReducer;
