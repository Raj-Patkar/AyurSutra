import React from "react";
import "./Signup.css";
import signupImage from "../assets/ayurveda.png"; // your right side background image
import logo from "../assets/Ayurlogo.png"; // your logo
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="signup-header">
          <img src={logo} alt="AyurSutra Logo" className="logo" />
          {/* <h1 className="brand-name">AyurSutra</h1> */}
        </div>

        <h2 className="title"><Link to="/signupdr">-- Signup as a Medical Professional</Link></h2>
        <h3 className="subtitle">Get Started Now</h3>

        <form className="signup-form">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="checkbox-container">
            <input type="checkbox" />
            <span>
              I agree to the <a href="#">terms & policy</a>
            </span>
          </div>

          <button type="submit" className="btn">
            Signup
          </button>
        </form>

        <div className="divider">Or</div>

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
          Have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      <div className="signup-right">
        <img src={signupImage} alt="Ayurveda" />
      </div>
    </div>
  );
}

export default Signup;
