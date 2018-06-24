import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import history from '../router/history';

const middleware = composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
    thunk,
  ),
);

export default middleware;
