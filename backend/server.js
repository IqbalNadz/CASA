// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Allow requests from any origin (for testing)
app.use(cors());
app.use(express.json());

// POST /login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("Login attempt:", username, password);

  // test check
  if (username === "test" && password === "123") {
    return res.json({ message: "Login successful", user: username });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
