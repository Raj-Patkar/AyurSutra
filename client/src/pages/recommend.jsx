import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./recommend.css";
import logo from "../assets/Ayurlogo.png";

const Recommend = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const therapies = location.state?.therapies || [];

  const handleCardClick = (therapy) => {
    // ✅ Pass only the therapy name
    navigate("/session", { state: { therapyName: therapy["Therapy Name"] || therapy.name } });
  };

  return (
    <div className="recommend-root">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="logo">
            <img src={logo} alt="AyurSutra logo" />
          </div>
        </div>
      </header>

      <main className="hero">
        <h1 className="hero-title">
          Our Recommended <span className="accent">Therapies</span>
        </h1>

        {therapies.length === 0 ? (
          <p>No recommendations found. Try different symptoms.</p>
        ) : (
          <section className="cards-wrap">
            {therapies.map((t, i) => (
              <article
                key={i}
                className="therapy-card"
                onClick={() => handleCardClick(t)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-ribbon">
                  <div className="ribbon-title">Therapy {i + 1}</div>
                  <div className="ribbon-sub">Based On Your Health Profile</div>
                </div>
                <div className="card-body">
                  <h2 className="therapy-name">{t["Therapy Name"] || t.name}</h2>
                  <p className="therapy-desc">{t["Category"] || t.category}</p>
                  <div className="therapy-footer">
                    <div className="extra">
                      {t.reasons?.matchedSymptoms?.length > 0 && (
                        <span>
                          Matched: {t.reasons.matchedSymptoms.join(", ")}
                        </span>
                      )}
                      {t.reasons?.matchedDisease && (
                        <span> | Disease: {t.reasons.matchedDisease}</span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default Recommend;
