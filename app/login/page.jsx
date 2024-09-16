"use client";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/slices/authSlices";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { loginSuccess } from '../store/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    if (token) {
      router.push('/');
    }else {
      setIsLoading(false); // Allow rendering the page when no token
    }
  }, [token, router]);


  if(isLoading)return null; 
  
  return (
    <>
      <button onClick={handleLogin}>Login</button><br />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Login;
