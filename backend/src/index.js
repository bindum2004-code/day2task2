const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Import routes
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users"); // fixed path

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("🚀 API is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
