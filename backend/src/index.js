const express = require("express");
const dotenv = require("dotenv");
const usersRoute = require("./routes/users");
const authMiddleware = require("./middleware/auth");

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/users", usersRoute);

// Example protected route
app.get("/api/me", authMiddleware, (req, res) => {
  res.json({ message: "Profile data", user: req.user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("🚀 API is running");
});
