import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import DisplayPage from './components/DisplayPage';

ReactDOM.render(
  <Provider><DisplayPage /></Provider>,
  document.getElementById('root')
);
