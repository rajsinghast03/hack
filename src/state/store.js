// store.js

import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from 'redux';
import authReducer from "./index.js"; // Import your authSlice reducer

// const rootReducer = combineReducers({
//   auth: authReducer, // Add other reducers if you have them
// });

const store = configureStore({
  reducer: authReducer,
  // You can configure middleware, devTools, etc. here if needed
});

export default store;
