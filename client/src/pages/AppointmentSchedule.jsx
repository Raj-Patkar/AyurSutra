import React from "react";
import "./appointment.css";
import { useNavigate } from "react-router-dom";  
const appointments = [
  {
    status: "Confirmed",
    date: "16 Sep 2025",
    time: "11:00am",
    therapy: "virechana",
    doctor: "Dr. Priya",
  },
  {
    status: "Scheduled",
    date: "26 Sep 2025",
    time: "11:00am",
    therapy: "Basti",
    doctor: "Dr. Shreeya",
  },
  {
    status: "Scheduled",
    date: "05 oct 2025",
    time: "11:00am",
    therapy: "Abhyanga",
    doctor: "Dr. Priya",
  },
  {
    status: "Confirmed",
    date: "21 oct 2025",
    time: "11:00am",
    therapy: "Shirodhara",
    doctor: "Dr. Patil",
  },

];

export default function AppointmentSchedule() {
  const navigate = useNavigate();
  return (
    <div className="appointment-root">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="logo">
            <img src="/logo.png" alt="AyurSutra Logo" />
            
          </div>
        </div>
      </header>

      <main className="appointment-main">
        <div className="appointment-card">
          <h3 className="form-heading">
            Your Therapy <span className="accent">Schedule</span>
          </h3>

          <div className="schedule-grid">
            {appointments.map((a, i) => (
              <div key={i} className="schedule-item">
                <div
                  className={`status ${
                    a.status === "Confirmed" ? "confirmed" : "scheduled"
                  }`}
                >
                  {a.status}
                </div>
                <p>
                  <strong>Date:</strong> {a.date}
                </p>
                <p>
                  <strong>Time:</strong> {a.time}
                </p>
                <h4 className="therapy">{a.therapy}</h4>
                <p className="doctor">{a.doctor}</p>
              </div>
            ))}
          </div>

          <div className="nav-row">
            <button className="nav-btn back" onClick={() => navigate(-1)}> Back</button>
            <button className="nav-btn next" onClick={() => navigate("/dashboard")}>Next &raquo;</button>
          </div>
        </div>
      </main>

      <div className="decor-wave" aria-hidden>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#b99358"
            d="M0,64L80,69.3C160,75,320,85,480,112C640,139,800,181,960,176C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}
