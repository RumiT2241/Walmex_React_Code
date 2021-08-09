import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { Provider } from "react-redux";
import store from './store/Store';
ReactDOM.render(
  <Provider store={store} key="state-management">
  <App />
  </Provider>,
  document.getElementById('root')
);

