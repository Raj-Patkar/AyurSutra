import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./calendar.css";

export default function Calendar() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [schedule, setSchedule] = useState([]);

  const generateSchedule = () => {
    if (!startDate) return;

    const baseDate = new Date(startDate);
    const sessions = [];

    // Pre-Care: Day 1–4
    for (let i = 0; i < 4; i++) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + i);
      sessions.push({
        day: i + 1,
        type: "Pre-Care (Oleation, Massage, Steam)",
        date: d.toDateString(),
        time: "10:00 AM",
        doctor: "Dr. Priya",
        status: "Scheduled",
      });
    }

    // Main Virechana: Day 5
    const mainDay = new Date(baseDate);
    mainDay.setDate(baseDate.getDate() + 4);
    sessions.push({
      day: 5,
      type: "Virechana (Therapeutic Purgation)",
      date: mainDay.toDateString(),
      time: "7:00 AM",
      doctor: "Dr. Priya",
      status: "Confirmed",
    });

    // Post-Care: Day 6–9
    for (let i = 5; i < 9; i++) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + i);
      sessions.push({
        day: i + 1,
        type: "Post-Care (Diet & Rest)",
        date: d.toDateString(),
        time: "—",
        doctor: "Diet Supervision",
        status: "Follow-up",
      });
    }

    setSchedule(sessions);
  };

  return (
    <div className="cal-root">
      {/* logo */}
      <header className="cal-topbar">
        <div className="cal-logo">
          <img src="/logo.png" alt="AyurSutra logo" />
        </div>
      </header>

      <h2 className="cal-title">Virechana Therapy Schedule</h2>

      {/* date input */}
      <div style={{ margin: "20px", textAlign: "center" }}>
        <label>
          Select Start Date:{" "}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <button
          className="btn pill continue"
          style={{ marginLeft: "10px" }}
          onClick={generateSchedule}
        >
          Generate Schedule
        </button>
      </div>

      {/* schedule table */}
      {schedule.length > 0 && (
        <main className="cal-main">
          <article className="cal-card">
            <div className="cal-content">
              {schedule.map((s, idx) => (
                <div key={idx} className="info-grid">
                  <div className="info-col left">
                    <div className="info-label">Day {s.day}</div>
                    <div className="info-value">{s.date}</div>
                  </div>
                  <div className="info-col center">
                    <div className="info-label">Session</div>
                    <div className="info-value">{s.type}</div>
                  </div>
                  <div className="info-col right">
                    <div className="info-label">Doctor</div>
                    <div className="info-value">{s.doctor}</div>
                    <div className="info-label">Status</div>
                    <span className="status-pill confirmed">{s.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </main>
      )}

      {/* back button */}
      
      <div className="cal-actions">
  <button className="btn pill back" onClick={() => navigate(-1)}>
    Back
  </button>
  <button
    className="btn pill continue"
    onClick={() => navigate("/schedule")}
  >
    View All Therapies
  </button>
</div>
    </div>
  );
}
