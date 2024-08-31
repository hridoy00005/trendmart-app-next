"use client";


import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore, REHYDRATE } from "redux-persist";
import authSlice from "./slices/authSlices";
// import storage from "redux-persist/lib/storage";

// Persist config
// const persistAuth = {
//   key: authSlice.name,
//   storage,
//   REHYDRATE,
// };

// Combining all reducers
// const rootReducers = combineReducers({
//   [authSlice.name]: persistReducer(persistAuth, authSlice.reducer),
// });

const rootReducers = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

const store = configureStore({
  reducer: rootReducers,
  middleware: () => [],
});

export default store;
// export const persistor = persistStore(store);
