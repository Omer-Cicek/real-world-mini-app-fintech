import { combineReducers } from 'redux';
import LoginReducer from './reducers/LoginReducers';

const rootReducer = combineReducers({
  LoginReducer,
});

export default rootReducer;
