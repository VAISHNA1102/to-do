// src/store/index.js
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import taskReducer from './taskReducer';

const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
});

export default store;
