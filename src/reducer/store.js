import { configureStore, combineReducers } from '@reduxjs/toolkit';
import users from './slices/users';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  responseType: 'json',
});

const reducer = combineReducers({
  users: users,
});

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(axiosMiddleware(client)),
});
