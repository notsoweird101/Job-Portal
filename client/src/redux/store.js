import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { jobsReducer } from "./reducers/jobsReducer";
import { loaderReducer } from './reducers/loaderReducer';
import { usersReducer } from './reducers/usersReducer';

const rootReducer = combineReducers({
  jobsReducer: jobsReducer,
  loaderReducer:loaderReducer,
  usersReducer : usersReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk], 
});

export default store;