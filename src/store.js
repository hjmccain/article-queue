import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './state/reducers';
import { createLogger } from 'redux-logger';
import { loadState, saveState } from './state/localStorage'

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const persistedState = loadState();
export const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(
  applyMiddleware(thunk, logger)
));

store.subscribe(() => {
  saveState({
    wordsLowToHigh: store.getState().wordsLowToHigh,
    submittedLowToHigh: store.getState().wordsLowToHigh,
    data: []
  });
});
