import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import albums from './albums';
import artists from './artists';
import browse from './browse';
import me from './me';
import users from './users';

const reducers = (history) =>
  combineReducers({
    albums,
    artists,
    browse,
    me,
    router: connectRouter(history),
    users,
  });

export default reducers;
