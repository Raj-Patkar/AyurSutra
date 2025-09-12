import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Signupdr from "./pages/Signup_dr";
import Index from "./pages/index";
import PatientForm from "./pages/PatientForm";
import Recommend from "./pages/recommend";
import AppointmentSchedule from "./pages/AppointmentSchedule";
import Feedback from "./pages/Feedback";
import Notifications from "./pages/Notification";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupdr" element={<Signupdr />} />
        <Route path="/home" element={<Index />} />
        <Route path="/PatientForm" element={<PatientForm />} />
        <Route path="/Recommend" element={<Recommend />} />
        <Route path="/schedule" element={<AppointmentSchedule />} />  
        <Route path="/feedback" element={<Feedback />} /> 
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
