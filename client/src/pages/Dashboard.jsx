import React from "react";
import { useNavigate } from "react-router-dom"; 
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  CartesianGrid,
} from "recharts";
import "./dashboard.css";
import { useActionState } from "react";

/**
 * Place an app logo at /public/logo.png
 * Install Recharts: npm install recharts
 */

const data = [
  

  { date: "16 Sep", value: 30 },
  { date: "18 Sep", value: 40 },
  { date: "21 Sep", value: 50 },
  { date: "23 Sep", value: 58 },
  { date: "24 Sep", value: 65 },
  


];

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-root">
      {/* Top header (logo left, user right) */}
      <header className="header-top">
        <div className="header-left">
          <img src="/logo.png" className="header-logo" alt="AyurSutra logo" />
        </div>

        <div className="header-right">
          <div className="username">Sharma Ji</div>
          <div className="avatar" aria-hidden>
            {/* simple avatar circle */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" stroke="#222" strokeWidth="1.2" fill="transparent"/>
              <path d="M12 12.5a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" fill="#222"/>
              <path d="M6.2 18.2c.9-1.4 2.5-2.2 5.8-2.2s4.9.8 5.8 2.2" stroke="#222" strokeWidth="1.1" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Content wrapper with left sidebar, main area, right insights */}
      <div className="content-wrapper">
        {/* Left vertical icon menu */}
        <aside className="left-nav">
          <button className="hamburger" aria-label="menu">☰</button>

          <nav className="nav-list">
            <div className="nav-item">
              <div className="nav-icon">📊</div>
              <div className="nav-label">Dashboard</div>
            </div>

            <div className="nav-item">
              <div className="nav-icon">📋</div>
              <div className="nav-label">My Therapies</div>
            </div>

            <div className="nav-item">
              <div className="nav-icon">📝</div>
              <div className="nav-label">Log Symptoms</div>
            </div>

            <div className="nav-item">
              <div className="nav-icon">📈</div>
              <div className="nav-label">Progress</div>
            </div>

            {/* <div className="nav-item">
              <div className="nav-icon">🔔</div>
              <div className="nav-label">Notifications</div>
            </div> */}
            <div className="nav-item" style={{cursor: "pointer"}}>
  <div className="nav-icon">🔔</div>
  <div className="nav-label" onClick={() => navigate("/notifications")}>Notifications</div>
</div>

            <div className="nav-item">
              <div className="nav-icon">⤴</div>
              <div className="nav-label">Logout</div>
            </div>
          </nav>
        </aside>

        {/* Main panel (pale background block) */}
        <main className="main-panel">
          <div className="panel">
            <div className="panel-inner">
              <div className="title-row">
                <div className="title-left">
                  <button className="hamburger-inline" aria-hidden>☰</button>
                  <h1 className="page-title">Your Progress</h1>
                </div>

                {/* empty spacer, right column is outside this column */}
              </div>

              {/* Metric cards row */}
              <div className="metrics-row">
                <div className="metric-card">
                  <div className="metric-label">Active Therapy</div>
                  <div className="metric-body">
                    <div className="metric-title">Virechana</div>
                    <div className="metric-sub">Day 5 Of 7</div>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-label">Next Session</div>
                  <div className="metric-body center">
                    <div className="metric-title">21 Sep 2025,</div>
                    <div className="metric-sub">10:00 AM</div>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-label">Completion</div>
                  <div className="metric-body">
                    <div className="metric-title">69% Done</div>
                    <div className="tiny-progress">
                      <div className="tiny-fill" style={{ width: "69%" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart area */}
              <div className="chart-and-feedback">
                <div className="chart-card">
                  <div className="chart-title">Symptom Improvement</div>
                  <div style={{ width: "100%", height: 240 }}>
                    <ResponsiveContainer>
                      <AreaChart data={data} margin={{ top: 6, right: 12, left: -6, bottom: 0 }}>
                        <defs>
                          <linearGradient id="gradA" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#dff3ea" stopOpacity={0.9}/>
                            <stop offset="100%" stopColor="#ffffff" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid stroke="#f3f3f3" vertical={false} />
                        <XAxis dataKey="date" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} width={36} />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#5ab795" strokeWidth={2.2} fill="url(#gradA)" dot={{ r: 4, stroke: "#5ab795", strokeWidth: 2, fill: "#fff" }} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="feedback-panel">
                  <div className="feedback-title">Feedback</div>
                  <ul className="feedback-list">
                    <li>👍 Energy : Better Than Before</li>
                    <li>💬 Digestion : No Improvements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Right insights column */}
        <aside className="right-insights">
          <div className="insights-card">
            <h3 className="insights-title">Quick Insights</h3>

            <div className="insight-row">
              <div className="insight-label">Therapies</div>
              <div className="insight-value">2</div>
            </div>

            <div className="insight-divider" />

            <div className="insight-row">
              <div className="insight-label">Sessions</div>
              <div className="insight-value small">
                <div>5 <span className="muted">Completed</span></div>
                <div className="sub">2 Pending</div>
              </div>
            </div>

            <div className="insight-divider" />

            <div className="insight-row">
              <div className="insight-label">Upcoming</div>
              <div className="insight-value">14 Sep</div>
            </div>

            <div className="insight-divider" />

            <div className="insight-row">
              <div className="insight-label">Medicine</div>
              <div className="insight-value">Diet</div>
            </div>

            <div className="insight-divider" />

            <div className="insight-row">
              <div className="insight-label">Doctor</div>
              <div className="insight-value">—</div>
            </div>

            <div className="insight-divider" />

            <div className="insight-row logout">
              <div className="insight-label">Logout</div>
            </div>
          </div>
        </aside>
      </div>

      {/* decorative mustard wave at bottom */}
      <div className="decor-wave" aria-hidden>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#b99358" d="M0,64L80,69.3C160,75,320,85,480,112C640,139,800,181,960,176C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}
