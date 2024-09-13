"use client";

// app/components/AuthButton.js
import {
  login,
  logout,
} from "@/app/store/slices/authSlices";
import { useDispatch, useSelector } from "react-redux";

function AuthButton() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    const user = { name: "Jane Doe" };
    const token = "abcdef";
    dispatch(login({  user, token  }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  console.log(isAuthenticated);
  return (
    <div className="mt-5">
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default AuthButton;
