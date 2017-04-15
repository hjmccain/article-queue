import * as actions from './actions';

const state = (state = {
  sortedByCategory: null,
  wordsLowToHigh: null,
  submittedLowToHigh: null
}, action) => {
  switch (action.type) {
    case actions.SET_SORT:
      return action.category === 'Words' ?
      state = Object.assign({}, state, {
        sortedByCategory: action.category,
        wordsLowToHigh: !state.wordsLowToHigh,
        submittedLowToHigh: null
      }):
      state = Object.assign({}, state, {
        sortedByCategory: action.category,
        wordsLowToHigh: null,
        submittedLowToHigh: !state.submittedLowToHigh
      });
    default:
      return state;
  }
}

export default state;
