import * as actions from './actions';

const state = (state = {
  sortedByCategory: null,
  wordsLowToHigh: null,
  submittedLowToHigh: null,
  data: []
}, action) => {
  switch (action.type) {
    case actions.SET_SORT:
      let sortedData;
      if (action.category === 'Words') {
        let order = !state.wordsLowToHigh;
        sortedData = order ?
        state.data.sort((a, b) => a.words - b.words):
        state.data.sort((a, b) => b.words - a.words);
        return state = Object.assign({}, state, {
          wordsLowToHigh: order,
          data: sortedData
        });
      }
      if (action.category === 'Submitted') {
        let order = !state.submittedLowToHigh;
        sortedData = order ?
        state.data.sort((a, b) => a.publish_at - b.publish_at):
        state.data.sort((a, b) => b.publish_at - a.publish_at);
        return state = Object.assign({}, state, {
          submittedLowToHigh: order,
          data: sortedData
        });
      }
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
