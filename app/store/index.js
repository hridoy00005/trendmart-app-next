"use client";


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import authSlice from "./slices/authSlices";
import cookieStorage from "./cookieStorage";

// Persist config
const persistAuth = {
  key: authSlice.name,
  storage: cookieStorage
};

// Combining all reducers
const rootReducers = combineReducers({
  [authSlice.name]: persistReducer(persistAuth, authSlice.reducer),
});

// const rootReducers = combineReducers({
//   [authSlice.name]: authSlice.reducer,
// });

const store = configureStore({
  reducer: rootReducers,
  middleware: () => [],
});

export default store;
export const persistor = persistStore(store);
