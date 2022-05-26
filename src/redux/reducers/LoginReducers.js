import { LOGIN_SUCCESS } from '../types/LoginTypes';

const INITIAL_STATE = {
  data: {},
};

const LoginReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
