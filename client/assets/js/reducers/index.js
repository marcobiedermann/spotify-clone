import { combineReducers } from 'redux';
import artist from './artist';
import browse from './browse';

const reducers = combineReducers({
  artist,
  browse,
});

export default reducers;
