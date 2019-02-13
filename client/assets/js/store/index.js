import { createStore } from 'redux';
import middleware from './middleware';
import reducers from '../reducers';
import history from '../router/history';

const store = createStore(
  reducers(history),
  middleware,
);

export default store;
