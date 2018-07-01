import { combineReducers } from 'redux';
import albums from './albums';
import artists from './artists';
import browse from './browse';
import me from './me';

const reducers = combineReducers({
  albums,
  artists,
  browse,
  me,
});

export default reducers;
