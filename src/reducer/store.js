import { configureStore, combineReducers } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import ui from './slices/ui';
import users from './slices/users';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  responseType: 'json',
});

const reducer = combineReducers({
  ui,
  users,
});

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(axiosMiddleware(client)),
});
