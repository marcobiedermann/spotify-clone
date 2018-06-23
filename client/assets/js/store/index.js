import { connectRouter } from 'connected-react-router';
import { createStore } from 'redux';
import middleware from './middleware';
import reducers from '../reducers';
import history from '../router/history';

const store = createStore(
  connectRouter(history)(reducers),
  middleware,
);

export default store;
