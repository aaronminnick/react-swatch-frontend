import * as a from '../actions/ActionTypes';

const initialState = {
  isLoading: false,
  colors: [],
  error: null
}

export default(state = initialState, action) => {
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
        error: action.error
      });
    default:
      return state;
  }
}