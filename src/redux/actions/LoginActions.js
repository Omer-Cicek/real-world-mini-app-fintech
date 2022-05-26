import { LOGIN_SUCCESS } from '../types/LoginTypes';

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
