import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = composeWithDevTools(applyMiddleware());

export default middleware;
