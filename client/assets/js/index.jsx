import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from './router';
import store from './store';
import '../css/elements/anchor.css';
import '../css/elements/button.css';
import '../css/elements/figure.css';
import '../css/elements/image.css';
import '../css/elements/input.css';
import '../css/elements/list.css';
import '../css/elements/paragraph.css';
import '../css/elements/table.css';
import '../css/layout/base.css';

const Root = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

render(<Root />, document.getElementById('root'));
