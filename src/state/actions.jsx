export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const getDataSuccess = (data, currentEnd) => ({
  type: GET_DATA_SUCCESS,
  data,
  currentEnd
});

export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const getDataError = err => ({
  type: GET_DATA_ERROR
});

export const GET_LENGTH_SUCCESS = 'GET_LENGTH_SUCCESS';
export const getLengthSuccess = length => ({
  type: GET_LENGTH_SUCCESS,
  length
});

export const GET_LENGTH_ERROR = 'GET_LENGTH_ERROR';
export const getLengthError = err => ({
  type: GET_LENGTH_ERROR
});

export const SET_SORT = 'SET_SORT';
export const setSort = category => ({
  type: SET_SORT,
  category
});

export const getData = (currentEnd) => (dispatch) => {
  return fetch(`/data/${currentEnd}`)
  .then(res => {
    if (!res.ok) { throw new Error(res.statusText) }
    return res.json();
  }).then(res => dispatch(getDataSuccess(res, currentEnd))
  ).catch(err => dispatch(getDataError(err))
  );
}

export const getLength = () => (dispatch) => {
  return fetch('/length')
  .then(res => {
    if (!res.ok) { throw new Error(res.statusText) }
    return res.json();
  }).then(res => {
    dispatch(getLengthSuccess(res))}
  ).catch(err => dispatch(getLengthError(err))
  );
}
