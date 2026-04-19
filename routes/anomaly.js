const express = require("express");
const router = express.Router();

const Anomaly = require("../models/Anomaly");

// GET ALL ANOMALIES
router.get("/", async (req, res) => {
  const data = await Anomaly.find().sort({ timestamp: -1 });
  res.json(data);
});

// CREATE ANOMALY (SIMULATION)
router.post("/create", async (req, res) => {
  const newAnomaly = new Anomaly(req.body);
  await newAnomaly.save();

  res.json({ message: "Anomaly created" });
});

// DISPATCH
router.post("/dispatch/:id", async (req, res) => {
  await Anomaly.findByIdAndUpdate(req.params.id, {
    status: "DISPATCHED",
  });

  res.json({ message: "Dispatched" });
});

// RESOLVE
router.post("/resolve/:id", async (req, res) => {
  await Anomaly.findByIdAndUpdate(req.params.id, {
    status: "RESOLVED",
  });

  res.json({ message: "Resolved" });
});

module.exports = router;