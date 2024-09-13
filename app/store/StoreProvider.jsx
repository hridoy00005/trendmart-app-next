"use client";

import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from ".";
import { PersistGate } from "redux-persist/integration/react";

export const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
