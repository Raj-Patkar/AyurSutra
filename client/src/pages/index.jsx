import "./index.css";
import logo from "../assets/Ayurlogo.png";
import hero from "../assets/hero.png";
import drkavita from "../assets/doctor-kavita.png";
import drrohit from "../assets/doctor-rohit.png";
import drshinde from "../assets/doctor-shinde.png";
import drshreeya from "../assets/doctor-shreeya.png";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="AyurSutra Logo" />
          <h1></h1>
        </div>
        <ul className="nav-links">
          <li>Contact</li>
          <li>About</li>
          <button><Link to="/login" className="login-btn">Login</Link></button>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>
            Welcome to <span className="highlight">AyurSutra</span>
          </h2>
          <p>
            Experience the profound benefits of Panchkarma. We connect you with expert
            practitioners to cleanse, rejuvenate, and restore your body’s natural vitality.
            Your journey to holistic well-being begins here.
          </p>
          <div className="hero-buttons">
            <button><Link to="/signup" className="btn">Get Started</Link></button>
            
          </div>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Ayurvedic items" />
        </div>
      </section>

      {/* Offers */}
      <section className="offers">
        <span>Offers :</span>
        <button>Free First Therapy Scheduling</button>
        <button>Get 1 Extra Session Free</button>
        <button>50% off on Detox Therapy</button>
      </section>

      {/* Services */}
      <section className="services">
        <h3>OUR SERVICES</h3>
        <h2>Our Recommendation</h2>
        <div className="service-cards">
          <div className="card">
            <div className="card-icon">🛋️</div>
            <h4>Automated Therapy Scheduling</h4>
            <p>Effortless Therapy Planning And Booking</p>
          </div>
          <div className="card highlight-card">
            <div className="card-icon">🥗</div>
            <h4>Diet Recommendation</h4>
            <p>Tailored Meal Plans To Support Every Therapy Phase.</p>
          </div>
          <div className="card">
            <div className="card-icon">🧘</div>
            <h4>Post & Pre Therapy Care</h4>
            <p>Simplified Recovery Support, At Every Step.</p>
          </div>
          <div className="card">
            <div className="card-icon">💊</div>
            <h4>Symptom Based Therapy Suggestion</h4>
            <p>Right Therapies Recommended For Your Health Needs.</p>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="team">
        <h3>OUR TEAM</h3>
        <h2>OUR EXPERT TEAM MEMBERS</h2>


        <div className="team-members">
          <div className="member">
            <img src={drshinde} alt="Dr. Shinde" />
            <p className="name">Dr. Shinde</p>
            <small>Check Availability</small>
          </div>
          <div className="member">
            <img src={drrohit} alt="Dr. Rohit Patil" />
            <p className="name">Dr. Rohit Patil</p>
            <small>Check Availability</small>
          </div>
          <div className="member">
            <img src={drshreeya} alt="Dr. Shreeya" />
            <p className="name">Dr. Shreeya</p>
            <small>Check Availability</small>
          </div>
          <div className="member">
            <img src={drkavita} alt="Dr. Kavita" />
            <p className="name">Dr. Kavita</p>
            <small>Check Availability</small>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;