import * as actions from './actions';
import moment from 'moment';

const state = (state = {
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
        state.data.sort((a, b) => {
          return +moment(a.publish_at, "YYYY-M-DD h:mm:ss") - +moment(b.publish_at, "YYYY-M-DD h:mm:ss");
        }):
        state.data.sort((a, b) => {
          return +moment(b.publish_at, "YYYY-M-DD h:mm:ss") - +moment(a.publish_at, "YYYY-M-DD h:mm:ss");
        });
        return state = Object.assign({}, state, {
          submittedLowToHigh: order,
          data: sortedData
        });
      }
    case actions.GET_DATA_SUCCESS:
      return state = Object.assign({}, state, {
        data: [...state.data, ...action.data],
        currentEnd: action.currentEnd,
        getDataError: false
      });
    case actions.GET_DATA_ERROR:
      return state = Object.assign({}, state, { getDataError: true });
    default:
      return state;
  }
}

export default state;
