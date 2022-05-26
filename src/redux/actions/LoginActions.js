import { LOGIN_SUCCESS } from '../types/LoginTypes';

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload: payload,
});
