const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  console.log("🔥 REGISTER API HIT");
  console.log(req.body);

  const { email, password, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashed,
    role,
  });

  await user.save();

  res.json({ message: "User registered" });
});

// LOGIN
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

  // 🔥 TOKEN GENERATION
  const token = jwt.sign(
    { id: user._id, role: user.role },
    "SECRETKEY",
    { expiresIn: "1d" }
  );

  res.json({
    message: "Login success",
    token,
    role: user.role,
  });
});

module.exports = router;