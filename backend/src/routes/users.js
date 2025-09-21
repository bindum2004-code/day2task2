const express = require("express");
const authMiddleware = require("../middleware/auth");
const pool = require("../db"); // fixed path

const router = express.Router();

// Protected route: get current user
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, phone, email FROM users WHERE id = $1",
      [req.user.id]
    );
    if (!result.rows.length) return res.status(404).json({ error: "User not found" });
    res.json({ user: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
