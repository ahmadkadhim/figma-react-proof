import * as actionTypes from '../utils/actionTypes';
import update from '../utils/update';

const initialState = {
  payload: null,
  error: false,
  errorMsg: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PAYLOAD:
      return update(state, {
        error: action.error,
        payload: action.payload
      });

    case actionTypes.SET_PAYLOAD_FAIL:
      return update(state, {
        error: action.error,
        errorMsg: action.errorMsg
      });

    default:
      return state;
  }
};

export default reducer;
