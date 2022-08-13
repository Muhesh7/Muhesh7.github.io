import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import sectionReducer from './reducers';

const rootReducer = combineReducers({ sectionReducer });
const store = configureStore({ middleware: [thunk], reducer: rootReducer });

export default store;
