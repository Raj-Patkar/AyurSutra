import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false, // Links patient details to registered user
    },
    fullName: {
      type: String,
      required: [true, "Please enter your full name"],
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    contactNo: {
      type: String,
      required: [true, "Please enter your contact number"],
      match: [/^[0-9]{10}$/, "Please enter a valid 10-digit number"],
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    wakeupTime: {
      type: String,
      required: false,
    },
    sleepTime: {
      type: String,
      required: false,
    },
    foodHabits: {
      type: String,
      enum: ["veg", "nonveg", "vegan"],
      required: true,
    },
    appetite: {
      type: String,
      enum: ["low", "medium", "high"],
      required: true,
    },
    sleepQuality: {
      type: String,
      enum: ["good", "disturbed", "insomnia"],
      required: true,
    },
    habits: {
      type: [String],
      enum: ["smoking", "alcohol", "caffeine"],
      default: [],
    },
    pastDiseasesOrSurgeries: {
      type: String,
      default: "",
    },
    currentMedications: {
      type: String,
      default: "",
    },
    allergies: {
      type: String,
      default: "",
    },
    chronicConditions: {
      type: [String],
      enum: ["diabetes", "asthma", "hypertension"],
      default: [],
    },
    currentDiseases: {
      type: String,
      default: "",
    },
    symptoms: {
      type: [String],
      enum: [
        "excess mucus",
        "acidity",
        "constipation",
        "joint stiffness",
        "sinusitis",
        "headaches",
        "dry skin",
        "stress",
        "muscle weakness",
        "chronic pain",
        "dry eyes",
        "earache",
        "memory issues",
        "fat deposits",
        "hairfall",
        "poor immunity",
        "anxiety",
        "neck stiffness",
        "insomnia",
        "irritability",
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
