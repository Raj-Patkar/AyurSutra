import React from "react";
import "./Login.css";
import logo from "../assets/Ayurlogo.png";
import ayurvedaImg from "../assets/ayurveda.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      {/* Left side form */}
      <div className="login-left">
        <div className="login-header">
          <img src={logo} alt="AyurSutra Logo" className="logo" />
          {/* <h1 className="brand">AyurSutra</h1> */}
        </div>

        <h2 className="title">Welcome back!</h2>
        <p className="subtitle">
          Enter your credentials to access your account
        </p>

        <form className="login-form">
          <label>Email address</label>
          <input type="email" placeholder="Enter your email" />

          <div className="password-row">
            <label>Password</label>
            <a href="#">Forgot password</a>
          </div>
          <input type="password" placeholder="Enter your password" />

          <div className="remember-row">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember for 30 days</label>
          </div>

          <button type="submit" className="btn">
            Login
          </button>
        </form>

        <div className="divider">
          <span>Or</span>
        </div>

        <div className="social-buttons">
          <button className="social-btn">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
            />
            Sign in with Google
          </button>
          <button className="social-btn">
            <img
              src="https://www.svgrepo.com/show/303128/apple-logo.svg"
              alt="Apple"
            />
            Sign in with Apple
          </button>
        </div>

        <p className="signup-link">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>

      {/* Right side image */}
      <div className="login-right">
        <img src={ayurvedaImg} alt="Ayurveda" />
      </div>
    </div>
  );
};

export default Login;
