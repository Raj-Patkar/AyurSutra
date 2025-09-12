import React, { useState } from "react";
import "./patient.css";
import logo from "../assets/Ayurlogo.png";

const initialState = {
  fullName: "",
  gender: "",
  dob: "",
  contact: "",
  address: "",
  pincode: "",
  wakeup: "",
  sleep: "",
  foodHabit: "",
  appetite: "",
  sleepQuality: "",
  stressLevel: "",
  habits: { smoking: false, alcohol: false, caffeine: false },
  pastIllness: "",
  currentMeds: "",
  allergies: "",
  chronic: { diabetes: false, hypertension: false, asthma: false },
  reasonVisit: "",
  durationProblem: "",
  symptomsAssoc: "",
  prevTreatments: { modern: false, ayurvedic: false, other: false },
  prevTreatmentsOther: "",
  diseaseName: "",
  symptomsList: {},
};

const symptomNames = [
  "Excess Mucus","Acidity","Constipation","Joint Stiffness",
  "Sinusitis","Headaches","Dry Skin","Stress",
  "Muscle Weakness","Chronic Pain","Dry Eyes","Earache",
  "Memory Issues","Fat Deposits","Hair Fall","Poor Immunity",
  "Anxiety","Neck Stiffness","Insomnia","Irritability"
];

export default function PatientForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialState);

  const next = () => setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  const onChange = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const onNestedChange = (group, key, value) =>
    setData((d) => ({ ...d, [group]: { ...d[group], [key]: value } }));

  const toggleSymptom = (name) => {
    setData((d) => ({
      ...d,
      symptomsList: { ...d.symptomsList, [name]: !d.symptomsList[name] },
    }));
  };

  const handleSubmit = async (e) => {
    // 🚫 Don’t allow submit before last step
    e.preventDefault();
    if (step < 4) {
      return;
    }

    const payload = {
      userId: "64f1f4f4f4f4f4f4f4f4f4f4", // 🔹 Replace with logged-in user id
      fullName: data.fullName,
      gender: data.gender,
      dob: data.dob,
      contactNo: data.contact,
      address: data.address,
      pincode: data.pincode,
      wakeupTime: data.wakeup,
      sleepTime: data.sleep,
      foodHabits: data.foodHabit,
      appetite: data.appetite,
      sleepQuality: data.sleepQuality,
      habits: Object.keys(data.habits).filter((h) => data.habits[h]),
      pastDiseasesOrSurgeries: data.pastIllness,
      currentMedications: data.currentMeds,
      allergies: data.allergies,
      chronicConditions: Object.keys(data.chronic).filter((c) => data.chronic[c]),
      currentDiseases: data.diseaseName,
      symptoms: Object.keys(data.symptomsList).filter((s) => data.symptomsList[s]),
    };

    try {
      const res = await fetch("http://localhost:5000/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save patient");

      const result = await res.json();
      alert("✅ Patient saved successfully!");
      console.log(result);
      setData(initialState);
      setStep(0);
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("Failed to save patient. Check console for details.");
    }
  };

  return (
    <div className="patient-root">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="logo">
            <img src={logo} alt="AyurSutra logo" />
          </div>
        </div>
      </header>

      <main className="patient-main">
        <div className="form-card">
          <h3 className="form-heading">
            Patient <span className="accent">Details</span>
          </h3>
          <div className="section-line" />

          <form onSubmit={handleSubmit} className="patient-form">
            {/* Step 0 */}
            {step === 0 && (
              <section className="step step-personal">
                <div className="row">
                  <label>Full Name -</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={data.fullName}
                    onChange={(e) => onChange("fullName", e.target.value)}
                  />
                </div>
                <div className="row">
                  <label>Gender -</label>
                  <div className="inline">
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={data.gender === "female"}
                        onChange={() => onChange("gender", "female")}
                      /> Female
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={data.gender === "male"}
                        onChange={() => onChange("gender", "male")}
                      /> Male
                    </label>
                  </div>
                  <br />
                  <label className="dob-label">Date Of Birth -</label>
                  <input
                    type="date"
                    className="dob-input"
                    value={data.dob}
                    onChange={(e) => onChange("dob", e.target.value)}
                  />
                </div>
                <div className="row">
                  <label>Contact Number -</label>
                  <input
                    placeholder="Enter Your Mobile Number"
                    value={data.contact}
                    onChange={(e) => onChange("contact", e.target.value)}
                  />
                </div>
                <div className="row">
                  <label>Address -</label>
                  <textarea
                    placeholder="Enter Your Residential Address"
                    value={data.address}
                    onChange={(e) => onChange("address", e.target.value)}
                    rows={4}
                  />
                </div>
                <div className="row">
                  <label>Pincode -</label>
                  <input
                    placeholder="Enter Your Pincode"
                    value={data.pincode}
                    onChange={(e) => onChange("pincode", e.target.value)}
                  />
                </div>
              </section>
            )}

            {/* Step 1 */}
            {step === 1 && (
              <section className="step step-habits">
                <div className="row">
                  <label>Daily Routines -</label>
                  <input
                    placeholder="Wakeup Time"
                    value={data.wakeup}
                    onChange={(e) => onChange("wakeup", e.target.value)}
                    className="small"
                  />
                  <input
                    placeholder="Sleep Time"
                    value={data.sleep}
                    onChange={(e) => onChange("sleep", e.target.value)}
                    className="small"
                  />
                </div>
                <div className="row">
                  <label>Food Habits -</label>
                  <div className="inline">
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="food"
                        value="veg"
                        checked={data.foodHabit === "veg"}
                        onChange={() => onChange("foodHabit", "veg")}
                      /> Vegetarian
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="food"
                        value="nonveg"
                        checked={data.foodHabit === "nonveg"}
                        onChange={() => onChange("foodHabit", "nonveg")}
                      /> Non-Vegetarian
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="food"
                        value="vegan"
                        checked={data.foodHabit === "vegan"}
                        onChange={() => onChange("foodHabit", "vegan")}
                      /> Vegan
                    </label>
                  </div>
                </div>
                <div className="row">
                  <label>Appetite -</label>
                  <div className="inline">
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="appetite"
                        value="low"
                        checked={data.appetite === "low"}
                        onChange={() => onChange("appetite", "low")}
                      /> Low
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="appetite"
                        value="medium"
                        checked={data.appetite === "medium"}
                        onChange={() => onChange("appetite", "medium")}
                      /> Medium
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="appetite"
                        value="high"
                        checked={data.appetite === "high"}
                        onChange={() => onChange("appetite", "high")}
                      /> High
                    </label>
                  </div>
                </div>
                <div className="row">
                  <label>Sleep Quality -</label>
                  <div className="inline">
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="sleepQuality"
                        value="good"
                        checked={data.sleepQuality === "good"}
                        onChange={() => onChange("sleepQuality", "good")}
                      /> Good
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="sleepQuality"
                        value="disturbed"
                        checked={data.sleepQuality === "disturbed"}
                        onChange={() => onChange("sleepQuality", "disturbed")}
                      /> Disturbed
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="sleepQuality"
                        value="insomnia"
                        checked={data.sleepQuality === "insomnia"}
                        onChange={() => onChange("sleepQuality", "insomnia")}
                      /> Insomnia
                    </label>
                  </div>
                </div>
                <div className="row">
                  <label>Stress Level -</label>
                  <div className="inline">
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="stressLevel"
                        value="low"
                        checked={data.stressLevel === "low"}
                        onChange={() => onChange("stressLevel", "low")}
                      /> Low
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="stressLevel"
                        value="medium"
                        checked={data.stressLevel === "medium"}
                        onChange={() => onChange("stressLevel", "medium")}
                      /> Medium
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="radio"
                        name="stressLevel"
                        value="high"
                        checked={data.stressLevel === "high"}
                        onChange={() => onChange("stressLevel", "high")}
                      /> High
                    </label>
                  </div>
                </div>
                <div className="row">
                  <label>Habits -</label>
                  <div className="inline">
                    <label className="checkbox-inline small-check">
                      <input
                        type="checkbox"
                        checked={data.habits.smoking}
                        onChange={(e) => onNestedChange("habits", "smoking", e.target.checked)}
                      /> Smoking
                    </label>
                    <label className="checkbox-inline small-check">
                      <input
                        type="checkbox"
                        checked={data.habits.alcohol}
                        onChange={(e) => onNestedChange("habits", "alcohol", e.target.checked)}
                      /> Alcohol
                    </label>
                    <label className="checkbox-inline small-check">
                      <input
                        type="checkbox"
                        checked={data.habits.caffeine}
                        onChange={(e) => onNestedChange("habits", "caffeine", e.target.checked)}
                      /> Caffeine
                    </label>
                  </div>
                </div>
              </section>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <section className="step step-history">
                <div className="row">
                  <label>Past Illnesses / Surgeries -</label>
                  <input
                    value={data.pastIllness}
                    onChange={(e) => onChange("pastIllness", e.target.value)}
                  />
                </div>
                <div className="row">
                  <label>Current Medications -</label>
                  <textarea
                    rows={3}
                    value={data.currentMeds}
                    onChange={(e) => onChange("currentMeds", e.target.value)}
                  />
                </div>
                <div className="row">
                  <label>Allergies -</label>
                  <input
                    value={data.allergies}
                    onChange={(e) => onChange("allergies", e.target.value)}
                  />
                </div>
                <div className="row">
                  <label>Chronic Conditions -</label>
                  <div className="inline">
                    <label className="checkbox-inline small-check">
                      <input
                        type="checkbox"
                        checked={data.chronic.diabetes}
                        onChange={(e) => onNestedChange("chronic", "diabetes", e.target.checked)}
                      /> Diabetes
                    </label>
                    <label className="checkbox-inline small-check">
                      <input
                        type="checkbox"
                        checked={data.chronic.hypertension}
                        onChange={(e) => onNestedChange("chronic", "hypertension", e.target.checked)}
                      /> Hypertension
                    </label>
                    <label className="checkbox-inline small-check">
                      <input
                        type="checkbox"
                        checked={data.chronic.asthma}
                        onChange={(e) => onNestedChange("chronic", "asthma", e.target.checked)}
                      /> Asthma
                    </label>
                  </div>
                </div>
              </section>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <section className="step step-concerns">
                <div className="row">
                  <label>Reason For Visit -</label>
                  <input
                    value={data.reasonVisit}
                    onChange={(e) => onChange("reasonVisit", e.target.value)}
                  />
                </div>
                <div className="row">
                  <label>Duration Of The Problem -</label>
                  <input
                    value={data.durationProblem}
                    onChange={(e) => onChange("durationProblem", e.target.value)}
                  />
                </div>
                <div className="row">
                  <label>Associated Symptoms -</label>
                  <input
                    value={data.symptomsAssoc}
                    onChange={(e) => onChange("symptomsAssoc", e.target.value)}
                  />
                </div>
                <div className="row">
                  <label>Previous Treatments Taken -</label>
                  <div className="inline">
                    <label className="checkbox-inline small-check">
                      <input
                        type="checkbox"
                        checked={data.prevTreatments.modern}
                        onChange={(e) => onNestedChange("prevTreatments", "modern", e.target.checked)}
                      /> Modern
                    </label>
                    <label className="checkbox-inline small-check">
                      <input
                        type="checkbox"
                        checked={data.prevTreatments.ayurvedic}
                        onChange={(e) => onNestedChange("prevTreatments", "ayurvedic", e.target.checked)}
                      /> Ayurvedic
                    </label>
                    <label className="checkbox-inline small-check">
                      <input
                        type="checkbox"
                        checked={data.prevTreatments.other}
                        onChange={(e) => onNestedChange("prevTreatments", "other", e.target.checked)}
                      /> Other
                    </label>
                    {data.prevTreatments.other && (
                      <input
                        placeholder="Please mention"
                        className="small-extra"
                        value={data.prevTreatmentsOther}
                        onChange={(e) => onChange("prevTreatmentsOther", e.target.value)}
                      />
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <section className="step step-symptoms">
                <div className="row">
                  <label>Do You Have Any Specific Disease ??</label>
                  <input
                    placeholder="Type Your Disease"
                    value={data.diseaseName}
                    onChange={(e) => onChange("diseaseName", e.target.value)}
                  />
                </div>
                <div className="row multi-symptoms">
                  <label>Select The Symptoms You Are Experiencing -</label>
                  <div className="symptom-grid">
                    {symptomNames.map((s) => (
                      <label key={s} className="symptom-item">
                        <input
                          type="checkbox"
                          checked={!!data.symptomsList[s]}
                          onChange={() => toggleSymptom(s)}
                        />
                        {s}
                      </label>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Navigation */}
            <div className="nav-row">
              <button
                type="button"
                className="nav-btn back"
                onClick={back}
                disabled={step === 0}
              >
                &laquo; Back
              </button>
              {step < 4 ? (
                <button type="button" className="nav-btn next" onClick={next}>
                  Next &raquo;
                </button>
              ) : (
                <button type="submit" className="nav-btn next submit" onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </main>

      <div className="decor-wave" aria-hidden>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#b99358"
            d="M0,64L80,106.7C160,149,320,235,480,229.3C640,224,800,128,960,106.7C1120,85,1280,139,1360,165.3L1440,192L1440,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}
