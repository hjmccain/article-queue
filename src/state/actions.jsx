export const getData = (currentEnd) => (dispatch) => {
  console.log(currentEnd);
  return fetch('/data/' + currentEnd)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return res.json();
  }).then(res => {
    dispatch(getDataSuccess(res, currentEnd));
  }).catch(err => {
    dispatch(getDataError(err));
  });
}

export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const getDataSuccess = (data, currentEnd) => ({
  type: GET_DATA_SUCCESS,
  data,
  currentEnd
});

export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const getDataError = err => ({
  type: GET_DATA_ERROR,
  err
});

export const SET_SORT = 'SET_SORT';
export const setSort = category => ({
  type: SET_SORT,
  category
});
