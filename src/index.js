import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import DisplayPage from './components/DisplayPage';

ReactDOM.render(
  <Provider store={store}><DisplayPage /></Provider>,
  document.getElementById('root')
);
