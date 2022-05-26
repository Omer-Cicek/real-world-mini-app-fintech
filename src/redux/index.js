import { createStore, combineReducers } from 'redux';
import LoginReducer from './reducers/LoginReducers';

const reducers = combineReducers({
  LoginReducers: LoginReducer,
});

export const combinedStores = createStore(reducers);
