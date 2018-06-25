import { combineReducers } from 'redux';
import artists from './artists';
import browse from './browse';

const reducers = combineReducers({
  artists,
  browse,
});

export default reducers;
