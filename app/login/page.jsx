"use client";

import { useDispatch } from "react-redux";
import { login, logout } from "../store/slices/authSlices";
// import { loginSuccess } from '../store/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log("Logined");
    const userData = {
      user: { name: "John Doe" },
      token: "abc123",
    };

    dispatch(login(userData)); // This will store the token in both Redux state and cookies
  };

  const handleLogout = () => {
    console.log("Logouted");

    dispatch(logout());
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button><br />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Login;
