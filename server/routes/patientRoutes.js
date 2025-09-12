import express from "express";
import Patient from "../models/Patient.js";

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
