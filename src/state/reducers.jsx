import * as actions from './actions';

const state = (state = {
  sortedByCategory: null,
  wordsLowToHigh: null,
  submittedLowToHigh: null,
  data: []
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
    case actions.GET_DATA_SUCCESS:
      return state = Object.assign({}, state, {
        data: [...state.data, ...action.data],
        getDataError: false
      });
    case actions.GET_DATA_ERROR:
      return state = Object.assign({}, state, { getDataError: true });
    default:
      return state;
  }
}

export default state;
