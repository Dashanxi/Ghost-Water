const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("API WORKING ✅");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/anomaly", require("./routes/anomaly"));

mongoose.connect("mongodb://127.0.0.1:27017/aquamind")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(8000, () => console.log("Server running on port 8000"));