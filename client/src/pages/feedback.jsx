import React from 'react';
import logo from "../assets/Ayurlogo.png";

function TherapyFeedback() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Logo and Name */}
        <div style={styles.header}>
          <img
            src={logo}
            alt="AyurSutra Logo"
            style={styles.logo}
          />
          {/* <span style={styles.title}>AyurSutra</span> */}
        </div>

        <h2 style={styles.sessionTitle}>Therapy Completion Feedback</h2>

        <p style={styles.question}>
          Have You Completed Today’s Therapy Session?
        </p>

        {/* Completed / Not Yet Buttons */}
        <div style={styles.buttonGroup}>
          <button style={styles.actionButton}>Completed</button>
          <button style={styles.actionButton}>Not Yet? Reschedule</button>
        </div>

        {/* Dropdown */}
        <select style={styles.dropdown}>
          <option>Pick Which Session</option>
          <option>Session 1</option>
          <option>Session 2</option>
          <option>Session 3</option>
        </select>

        {/* Rating */}
        <div style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              style={{
                ...styles.ratingNumber,
                fontWeight: num === 5 ? 'bold' : 'normal',
                color: '#99d4a7',
              }}
            >
              {num}
            </span>
          ))}
        </div>

        {/* Progress Info */}
        <div style={styles.progressContainer}>
          <p><strong>Great Job!</strong> You Have Completed 5 Of 7 Sessions.</p>
          <div style={styles.progressBarBackground}>
            <div style={styles.progressBar}></div>
          </div>
        </div>

        {/* Back Button */}
        <div style={styles.buttonContainer}>
          <button style={styles.backButton}>Back</button>
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
    backgroundColor: '#99d4a7',
    padding: '15px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  question: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#555',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  actionButton: {
    backgroundColor: '#74c4b0',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  dropdown: {
    padding: '10px',
    fontSize: '16px',
    width: '60%',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  ratingContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    fontSize: '20px',
    marginBottom: '20px',
  },
  ratingNumber: {
    cursor: 'pointer',
  },
  progressContainer: {
    textAlign: 'left',
    marginBottom: '30px',
    color: '#555',
  },
  progressBarBackground: {
    backgroundColor: '#ddd',
    borderRadius: '5px',
    height: '10px',
    width: '100%',
    marginTop: '10px',
  },
  progressBar: {
    backgroundColor: '#99d4a7',
    width: '71%',
    height: '100%',
    borderRadius: '5px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  backButton: {
    backgroundColor: '#74c4b0',
    color: '#fff',
    border: 'none',
    padding: '10px 25px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default TherapyFeedback;