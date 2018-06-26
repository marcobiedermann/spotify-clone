import { combineReducers } from 'redux';
import albums from './albums';
import artists from './artists';
import browse from './browse';

const reducers = combineReducers({
  albums,
  artists,
  browse,
});

export default reducers;
