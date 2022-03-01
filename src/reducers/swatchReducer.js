import * as a from '../actions/ActionTypes';

const initialState = {
  isLoading: false,
  colors: [],
  error: null,
  mode: 2
}

function swatchReducer(state = initialState, action) {
  switch (action.type) {
    case a.REQUEST_COLORS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case a.GET_COLORS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        colors: action.colors
      });
    case a.GET_COLORS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error.message
      });
    case a.UPDATE_MODE:
      return Object.assign({}, state, {
        mode: action.mode
      });
    default:
      return state;
  }
}

export default swatchReducer;