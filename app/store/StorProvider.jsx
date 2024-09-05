"use client";

import React from "react";
import { Provider } from "react-redux";
import store from ".";

export const StorProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
