"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: {},
  isAuthenticate: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      state.token = token;
      state.user = user;
      state.isAuthenticate = true;
    },

    logout: (state) => {
      state.token = "";
      state.user = {};
      state.isAuthenticate = false;
    },

    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

// Export the actions
export const { login, logout, updateProfile } = authSlice.actions;

export default authSlice;
