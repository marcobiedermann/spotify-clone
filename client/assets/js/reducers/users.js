import {
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from '../constants/users';

const initialState = {
  user: {},
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
      };
    }
    case FETCH_USER_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
