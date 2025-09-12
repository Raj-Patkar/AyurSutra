import React from "react";
import "./recommend.css";
import logo from "../assets/Ayurlogo.png";

const Recommend = () => {
  const therapies = [
    {
      id: 1,
      title: "Virechana",
      description: "Eliminates Toxins And Reduces Pitta",
      duration: "7 Days",
      extra: "Eliminates Toxins And Pitta",
    },
    {
      id: 2,
      title: "Shirodhana",
      description: "Relieves Stress And Induces Relaxation",
      duration: "3 Days",
      extra: "Calms Mind And Nerves",
    },
    {
      id: 3,
      title: "Basti",
      description: "Herbal Cleanse",
      duration: "8 Days",
      extra: "Detoxifies And Balances Doshas",
    },
  ];

  return (
    <div className="recommend-root">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="logo">
            <img src={logo} alt="AyurSutra logo" />
            <span className="brand"></span>
          </div>
        </div>
      </header>

      <main className="hero">
        <h1 className="hero-title">
          Our Recommended <span className="accent">Therapies</span>
        </h1>

        <section className="cards-wrap" role="list">
          {therapies.map((t, i) => (
            <article key={t.id} className="therapy-card" role="listitem" aria-label={t.title}>
              <div className="card-ribbon">
                <div className="ribbon-title">Therapy {i + 1}</div>
                <div className="ribbon-sub">Based On Your Health Profile</div>
              </div>

              <div className="card-body">
                <h2 className="therapy-name">{t.title}</h2>
                <p className="therapy-desc">{t.description}</p>

                <div className="therapy-footer">
                  <div className="days">
                    {/* yoga icon as inline SVG */}
                    <svg className="yoga-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                      <path fill="#e8a400" d="M12 2a2 2 0 110 4 2 2 0 010-4zm-4 20h2v-6h-2v6zm8 0h2v-6h-2v6zM7 7l3 3-1.4 1.4L6 8.4 7 7zM11 10l3 3 1.4-1.4L13.4 8.6 11 10zM12 14l2 6h-4l2-6z"></path>
                    </svg>
                    <span className="days-text">{t.duration}</span>
                  </div>
                  <div className="extra">{t.extra}</div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="btn-wrap">
          <button className="proceed-btn" aria-label="Proceed to next step">Proceed</button>
        </div>
      </main>

      {/* decorative slanted/wave background - placed behind content */}
      <div className="decor-wave" aria-hidden>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#b99358" d="M0,64L80,69.3C160,75,320,85,480,112C640,139,800,181,960,176C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Recommend;
