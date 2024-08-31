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
    loginReducer: (state, action) => {
      const { user, token } = action.payload;
      state.token = token;
      state.user = user;
      state.isAuthenticate = true;
      sessionStorage.setItem("auth", JSON.stringify(state));
    },

    logoutreducer: (state) => {
      state.token = "";
      state.user = {};
      state.isAuthenticate = false;
      sessionStorage.removeItem("auth");
    },
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      sessionStorage.setItem("auth", JSON.stringify(state));
    },
    loadAuth(state) {
      const storedAuth = sessionStorage.getItem("auth");
      if (storedAuth) {
        const authData = JSON.parse(storedAuth);
        state.user = { ...state, ...authData };
      }
    },
  },
});

export const { loginReducer, logoutreducer, updateProfile, loadAuth } =
  authSlice.actions;
export default authSlice;
