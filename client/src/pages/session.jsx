import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Ayurlogo.png";

function SessionDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const therapyName = location.state?.therapyName;

  const [therapy, setTherapy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!therapyName) return;

    const fetchTherapy = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/patients/therapy/${encodeURIComponent(
            therapyName
          )}`
        );
        if (!res.ok) throw new Error("Therapy not found");
        const data = await res.json();
        setTherapy(data);
      } catch (err) {
        console.error("❌ Error fetching therapy details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTherapy();
  }, [therapyName]);

  if (!therapyName) {
    return (
      <div style={styles.container}>
        <h2>No therapy selected</h2>
        <button style={styles.button} onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={styles.container}>
        <h2>Loading therapy details...</h2>
      </div>
    );
  }

  if (!therapy) {
    return (
      <div style={styles.container}>
        <h2>No details found for "{therapyName}"</h2>
        <button style={styles.button} onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <img src={logo} alt="Ayurlogo" style={styles.logo} />
        </div>

        <h2 style={styles.sessionTitle}>Session Details</h2>

        <div style={styles.sessionType}>{therapy["Therapy Name"]}</div>

        <div style={styles.infoGrid}>
          <div>
            <strong>Category</strong>
            <br />
            {therapy["Category"] || "N/A"}
          </div>
          <div>
            <strong>Duration</strong>
            <br />
            {therapy["Recommended Duration (days)"] || "N/A"}
          </div>
          <div>
            <strong>No. of Sessions</strong>
            <br />
            {therapy["No. of Sessions"] || "N/A"}
          </div>
          <div>
            <strong>Medicines / Oils</strong>
            <br />
            {therapy["Medicines / Oils Used"] || "N/A"}
          </div>
        </div>

        <div style={styles.careGrid}>
          <div>
            <strong>Pre-Care</strong>
            <br />
            {therapy["Pre-Care"] || "N/A"}
          </div>
          <div>
            <strong>Post-Care</strong>
            <br />
            {therapy["Post-Care"] || "N/A"}
          </div>
        </div>

        <div style={styles.careGrid}>
          <div>
            <strong>Diet Guidelines</strong>
            <br />
            {therapy["Diet Guidelines"] || "N/A"}
          </div>
          <div>
            <strong>Contraindications</strong>
            <br />
            {therapy["Contraindications"] || "N/A"}
          </div>
        </div>

        {therapy["Notes"] && (
          <div style={{ marginTop: "20px" }}>
            <strong>Notes:</strong> {therapy["Notes"]}
          </div>
        )}

        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => navigate(-1)}>
            Back
          </button>
          <button
  style={styles.button}
  onClick={() => navigate("/calendar", { state: { therapy } })}
>
  Continue
</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#f9f7f1",
    padding: "30px",
    borderRadius: "10px",
    maxWidth: "1000px",
    width: "100%",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  logo: {
    height: "70px",
    marginRight: "10px",
  },
  sessionTitle: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  sessionType: {
    backgroundColor: "#99d4a7",
    padding: "15px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ffffff",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginBottom: "20px",
    fontSize: "16px",
  },
  careGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "30px",
    fontSize: "16px",
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#74c4b0",
    border: "none",
    padding: "10px 25px",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SessionDetails;
