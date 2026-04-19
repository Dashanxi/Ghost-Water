const mongoose = require("mongoose");

const AnomalySchema = new mongoose.Schema({
  type: String, // Pipe Burst, Leakage, Illegal Tap
  zone: String,
  segment: String,
  confidence: Number,
  loss: Number,
  status: {
    type: String,
    default: "PENDING", // PENDING / DISPATCHED / RESOLVED
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Anomaly", AnomalySchema);