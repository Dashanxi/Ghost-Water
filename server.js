const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // 👈 important

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug logs
app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});

// Test route
app.get("/", (req, res) => {
  res.send("API WORKING ✅");
});

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/anomaly", require("./routes/anomaly"));

// ✅ Connect to MongoDB Atlas (NOT local anymore)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("MongoDB Error ❌", err));

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));