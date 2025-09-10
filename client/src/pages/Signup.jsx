import React, { useState } from "react";
import "./Signup.css";
import signupImage from "../assets/ayurveda.png";
import logo from "../assets/Ayurlogo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to the terms & policy");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      alert("Registration successful: " + res.data.name);
      navigate("/login"); // redirect to login page
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="signup-header">
          <img src={logo} alt="AyurSutra Logo" className="logo" />
        </div>

        <h2 className="title"><Link to="/signupdr">-- Signup as a Medical Professional</Link></h2>
        <h3 className="subtitle">Get Started Now</h3>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
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
