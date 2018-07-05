import { combineReducers } from 'redux';
import albums from './albums';
import artists from './artists';
import browse from './browse';
import me from './me';
import users from './users';

const reducers = combineReducers({
  albums,
  artists,
  browse,
  me,
  users,
});

export default reducers;
