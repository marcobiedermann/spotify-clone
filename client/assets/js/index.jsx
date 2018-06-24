import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from './router';
import store from './store';
import '../css/elements/figure.css';
import '../css/elements/image.css';

const Root = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

render(<Root />, document.getElementById('root'));
