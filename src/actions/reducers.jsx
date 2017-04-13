import * as actions from './actions';
import { combineReducers } from 'redux';

function immutableSplice(arr, start, deleteCount, ...items) {
  return [ ...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount) ]
}

export const state = (state = {}) => {
  switch (action.type) {
    case actions.SET_SORT:
    return state = Object.assign({}, state, { sortedBy: action.sortBy });
    default:
    return state;
  }
}
