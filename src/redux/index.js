import { createStore, combineReducers } from 'redux';
import LoginReducer from './reducers/LoginReducers';

const reducers = combineReducers({
  LoginReducers: LoginReducer,
});

const combinedStores = createStore(reducers);

export default combinedStores;
