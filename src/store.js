import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './state/reducers';
import { loadState, saveState } from './state/localStorage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const persistedState = loadState();
export const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(
  applyMiddleware(thunk)
));

store.subscribe(() => {
  saveState(store.getState())
});
