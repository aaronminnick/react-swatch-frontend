import * as a from './ActionTypes';

const requestColors = () => ({
  type: a.REQUEST_COLORS
});
const getColorsSuccess = userInfo => ({
  type: a.GET_COLORS_SUCCESS,
  userInfo
});
const getColorsFailure = error => ({
  type: a.GET_COLORS_FAILURE,
  error
});

export const makeApiCall = (...args, steps) => {
  const colors = [...args];
  let url = "localhost:5001//api/swatch?";
  for (let i = 1; i <= colors.length; i++) {
    url += `color${i}=${colors[i]}&`;
  }
  url += `steps=${steps}`;
  return dispatch => {
    dispatch(requestColors);
    return fetch(url)
      .then(response => response.json())
      .then(jsonifiedResponse => {
        dispatch(getColorsSuccess(jsonifiedResponse.results));
      })
      .catch(error => dispatch(getColorsFailure(error)));
  }
}