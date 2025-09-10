import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/Ayurlogo.png";
import ayurvedaImg from "../assets/ayurveda.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      alert("Login successful: " + res.data.name);
      // later: save token → localStorage, redirect user
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-header">
          <img src={logo} alt="AyurSutra Logo" className="logo" />
        </div>

        <h2 className="title">Welcome back!</h2>
        <p className="subtitle">Enter your credentials to access your account</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-row">
            <label>Password</label>
            <a href="#">Forgot password</a>
          </div>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember-row">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember for 30 days</label>
          </div>

          <button type="submit" className="btn">Login</button>
        </form>

        <p className="signup-link">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>

      <div className="login-right">
        <img src={ayurvedaImg} alt="Ayurveda" />
      </div>
    </div>
  );
};

export default Login;
