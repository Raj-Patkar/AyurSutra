import React from "react";
import "./notifications.css";
import { useNavigate } from "react-router-dom";

const reminders = [
  {
    type: "Therapy",
    title: "Virechana Session",
    date: "21 Sep 2025",
    time: "11:00am",
    note: "Avoid Heavy Meals",
  },
  {
    type: "Medicine",
    title: "Avipattikar Churna, Trivrit; prior oleation oils",
    date: "10 Sep 2025",
    time: "09:00am",
    note: "Before Breakfast",
  },
  {
    type: "Diet",
    title: "Drink Warm Water",
    date: "10 Sep 2025",
    time: "11:00am",
    note: "Minimum 3 Litres",
  },
];

export default function Notifications() {
  const navigate= useNavigate();
  return (
    <div className="notifications-root">
      {/* Header */}
      <header className="topbar">
        <div className="topbar-inner">
          <div className="logo">
            <img src="/logo.png" alt="AyurSutra Logo" />
           
          </div>
        </div>
      </header>

      {/* Main card */}
      <main className="notifications-main">
        <div className="notifications-card">
          <h3 className="form-heading">
            Notifications <span className="accent">& Reminders</span>
          </h3>

          <div className="reminder-list">
            {reminders.map((r, i) => (
              <div key={i} className="reminder-item">
                <div className="reminder-left">
                  <div className="reminder-title-row">
                    <span className="status-dot" aria-hidden />
                    <h4 className="reminder-title">{r.title}</h4>
                  </div>

                  <div className="reminder-meta">
                    <div className="meta">
                      <strong>Date:</strong> <span>{r.date}</span>
                    </div>
                    <div className="meta">
                      <strong>Time:</strong> <span>{r.time}</span>
                    </div>
                  </div>

                  <div className="reminder-note">{r.note}</div>
                </div>

                <div className={`reminder-tag ${r.type.toLowerCase()}-tag`}>
                  {r.type} Reminder
                </div>
              </div>
            ))}
          </div>

          <div className="footer-btn">
            <button className="back-btn" onClick={() => navigate("/dashboard")}>&laquo; Back</button>
          </div>
        </div>
      </main>

      {/* Decorative wave */}
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
