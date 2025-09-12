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
router.post("/suggest-therapy", async (req, res) => {
  const { symptoms = [], currentDiseases = "" } = req.body;

  // Simple matching logic
  const matches = therapies.filter(t => {
    const symptomMatch = t["Symptoms / Signs"]
      ?.toLowerCase()
      .split(/,|;/)
      .some(s => symptoms.some(userSym => s.includes(userSym.toLowerCase())));

    const diseaseMatch = t["Diseases Treated"]
      ?.toLowerCase()
      .includes(currentDiseases.toLowerCase());

    return symptomMatch || diseaseMatch;
  });

  console.log("🔍 Suggested therapies:", matches.map(m => m["Therapy Name"]));
  res.json({
    suggestions: matches.slice(0, 5).map(m => ({
      name: m["Therapy Name"],
      category: m["Category"],
      reasons: {
        matchedSymptoms: symptoms.filter(s =>
          (m["Symptoms / Signs"] || "").toLowerCase().includes(s.toLowerCase())
        ),
        matchedDisease: currentDiseases
      }
    }))
  });
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
