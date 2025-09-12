import React from 'react';
import logo from "../assets/Ayurlogo.png";

function SessionDetails() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Logo and Name */}
        <div style={styles.header}>
          <img
            src={logo}
            alt="Ayurlogo"
            style={styles.logo}
          />
          {/* <span style={styles.title}>AyurSutra</span> */}
        </div>

        <h2 style={styles.sessionTitle}>Session Details</h2>

        {/* Session Type */}
        <div style={styles.sessionType}>
          Virechana
        </div>

        {/* Session Info */}
        <div style={styles.infoGrid}>
          <div><strong>Date</strong><br />9 Sep 2025</div>
          <div><strong>Time</strong><br />11:00 Am</div>
          <div><strong>Status</strong><br /><span style={styles.status}>Confirmed</span></div>
          <div><strong>Doctor</strong><br />Dr.Priya</div>
          <div><strong>Duration</strong><br />3 Hours</div>
        </div>

        {/* Pre-Care and Post-Care */}
        <div style={styles.careGrid}>
          <div>
            <strong>Pre-Care</strong><br />
            3–5 Days Of Ghee Intake, Oil Massage, Steam, Fasting On Procedure Day
          </div>
          <div>
            <strong>Post-Care</strong><br />
            Avoid Cold Exposure, Rest, Avoid Oily/Spicy Foods, And Follow Rasayana
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttonContainer}>
          <button style={styles.button}>Back</button>
          <button style={styles.button}>Continue</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#ffffff',
    Height: '100vh',
    width: '100%',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#f9f7f1',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '1000px',
    width: '100%',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    height: '70px',
    marginRight: '10px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  sessionTitle: {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  sessionType: {
    backgroundColor: '#99d4a7',
    padding: '15px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ffffff',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
    marginBottom: '20px',
    fontSize: '16px',
  },
  status: {
    backgroundColor: '#74c4b0',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '15px',
    fontWeight: 'bold',
    display: 'inline-block',
  },
  careGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '30px',
    fontSize: '16px',
    color: '#333',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#74c4b0',
    border: 'none',
    padding: '10px 25px',
    color: '#fff',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default SessionDetails;