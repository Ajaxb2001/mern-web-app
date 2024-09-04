import React, { useState } from "react";
import axios from "axios";
import { auth, googleProvider } from "./firebase";
import "./style.css";
const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? "/login" : "/register";
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/auth${url}`,
        { email, password }
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await auth.signInWithPopup(googleProvider);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-card">
      <form onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Signup"}</h2>
        {!isLogin && <input type="text" placeholder="Name" required />}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
        <button type="button" onClick={handleGoogleLogin}>
          Login with Google
        </button>
        <p onClick={toggleMode}>
          {isLogin ? "Switch to Signup" : "Switch to Login"}
        </p>
      </form>
    </div>
  );
};

export default AuthCard;
