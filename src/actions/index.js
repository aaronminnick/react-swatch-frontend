import * as a from './ActionTypes';

const requestColors = () => ({
  type: a.REQUEST_COLORS
});
const getColorsSuccess = colors => ({
  type: a.GET_COLORS_SUCCESS,
  colors
});
const getColorsFailure = error => ({
  type: a.GET_COLORS_FAILURE,
  error
});

export const updateMode = mode => ({
  type: a.UPDATE_MODE,
  mode
});

export const makeApiCall = (steps, ...args) => {
  const colors = [...args];
  let url = (colors.length = 2) ? 
    "http://localhost:5000/api/swatch/two?" :// use chained ternaries if we add more options
    "http://localhost:5000/api/swatch/four?";
  for (let i = 1; i <= colors.length; i++) {
    url += `color${i}=${colors[i-1]}&`;
  }
  url += `steps=${steps}`;
  console.log("request url: ", url);
  return dispatch => {
    dispatch(requestColors);
    return fetch(url)
      .then(response => response.json())
      .then(jsonifiedResponse => {
        console.log("API call results: ", jsonifiedResponse);
        dispatch(getColorsSuccess(jsonifiedResponse));
      })
      .catch(error => {
        console.log("there was an error: ", error)
        dispatch(getColorsFailure(error))
      });
  }
}