import { LOGIN_SUCCESS } from '../types/LoginTypes';

const INITIAL_STATE = {
  data: [],
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
