import * as types from '../constants';

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem('currentUser')),
  fetching: false,
  error: {}
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.LOGIN:
      return {
        ...state,
        fetching: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.res.user,
        fetching: false
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        fetching: false
      };
    case types.LOGOUT:
      return {
        ...state,
        currentUser: null
      }
    default:
      return state;
  }
}

export default reducer;
