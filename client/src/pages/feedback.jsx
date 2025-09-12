import React, { useState } from "react";
import "./feedback.css";

export default function Feedback() {
  const [status, setStatus] = useState(null);
  const [session, setSession] = useState("");
  const [rating, setRating] = useState(0);

  // Example progress state
  const totalSessions = 7;
  const completedSessions = 5;

  return (
    <div className="feedback-root">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="logo">
            <img src="/logo.png" alt="AyurSutra Logo" />
            
          </div>
        </div>
      </header>

      <main className="feedback-main">
        <div className="feedback-card">
          {/* Green bar header */}
          <div className="card-header">
            Therapy Completion Feedback
          </div>

          <div className="card-body">
            <h3 className="question">
              Have You Completed Today’s Therapy Session?
            </h3>

            <div className="status-buttons">
              <button
                className={`status-btn ${status === "completed" ? "active" : ""}`}
                onClick={() => setStatus("completed")}
              >
                Completed
              </button>
              <button
                className={`status-btn ${status === "reschedule" ? "active" : ""}`}
                onClick={() => setStatus("reschedule")}
              >
                Not Yet? Reschedule
              </button>
            </div>

            <div className="row">
              <label>Pick Which Session</label>
              <select
                value={session}
                onChange={(e) => setSession(e.target.value)}
              >
                <option value="">Pick Which Session</option>
                {[...Array(totalSessions)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    Session {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="row rating-row">
              <label>Rate Today’s Session</label>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className={`rating-num ${rating === n ? "selected" : ""}`}
                    onClick={() => setRating(n)}
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <div className="progress-box">
              <p>
                <strong>Great Job!</strong> You Have Completed {completedSessions} Of {totalSessions} Sessions.
              </p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${(completedSessions / totalSessions) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="footer-btn">
            <button className="back-btn">&laquo; Back</button>
          </div>
        </div>
      </main>

      {/* Decorative mustard wave */}
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
