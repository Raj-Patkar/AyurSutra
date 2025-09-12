import express from "express";
import Patient from "../models/Patient.js";
import therapies from "../models/therapyData.js"; // <-- New import

const router = express.Router();

// POST → save patient
router.post("/", async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: "Patient saved successfully", patient });
  } catch (error) {
    console.error("❌ Error saving patient:", error);
    res.status(400).json({
      message: error.message,
      errors: error.errors,   // <-- send detailed validation errors
    });
  }
});



// POST → Suggest therapy based on symptoms & disease
// POST → Suggest therapy based on symptoms & disease
router.post("/suggest-therapy", async (req, res) => {
  try {
    const { symptoms = [], currentDiseases = "" } = req.body;

    if (!Array.isArray(symptoms)) {
      return res.status(400).json({ message: "Symptoms must be an array" });
    }

    // normalize user input
    const userSymptoms = symptoms.map(s => s.trim().toLowerCase());
    const userDisease = currentDiseases.trim().toLowerCase();

    const matches = therapies.filter(t => {
      // normalize therapy symptoms
      const therapySymptoms = (t["Symptoms / Signs"] || "")
        .split(/,|;/)
        .map(s => s.trim().toLowerCase())
        .filter(Boolean);

      // check if any symptom matches exactly
      const symptomMatch = therapySymptoms.some(s => userSymptoms.includes(s));

      // check disease match (partial match is fine here)
      const diseaseMatch = userDisease
        ? (t["Diseases Treated"] || "").toLowerCase().includes(userDisease)
        : false;

      return symptomMatch || diseaseMatch;
    });

    console.log(
      "🔍 Suggested therapies:",
      matches.map(m => m["Therapy Name"])
    );

    // send top 5 suggestions
    res.status(200).json({
      suggestions: matches.slice(0, 5).map(m => ({
        name: m["Therapy Name"],
        category: m["Category"],
        reasons: {
          matchedSymptoms: (m["Symptoms / Signs"] || "")
            .toLowerCase()
            .split(/,|;/)
            .map(s => s.trim())
            .filter(s => userSymptoms.includes(s)),
          matchedDisease: userDisease || null,
        },
      })),
    });
  } catch (error) {
    console.error("❌ Error in suggest-therapy:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/therapy/:name", (req, res) => {
  const { name } = req.params;
  const therapy = therapies.find(
    t => t["Therapy Name"]?.toLowerCase() === name.toLowerCase()
  );

  if (!therapy) {
    return res.status(404).json({ message: "Therapy not found" });
  }

  res.json(therapy);
});



// (Optional) GET → fetch all patients
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    console.error("❌ Error fetching patients:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
