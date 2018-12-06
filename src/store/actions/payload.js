import * as actionTypes from '../utils/actionTypes';
import axios from 'axios';

const setNote = payload => {
  return {
    type: actionTypes.SET_PAYLOAD,
    error: false,
    payload: payload
  };
};

const setNoteFail = errorMsg => {
  return {
    type: actionTypes.SET_PAYLOAD_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const getPayload = () => {
  return async dispatch => {
    try {
      const header = {
        headers: {
          'X-FIGMA-TOKEN': '5656-8097f5a2-542e-419d-8c96-b4457e5caa0f'
        }
      };
      const res = await axios.get('/', header);
      dispatch(setNote(res.data));
    } catch (error) {
      dispatch(setNoteFail(error.message));
    }
  };
};
