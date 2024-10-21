const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");

// Save user progress
router.post("/progress", async (req, res) => {
  try {
    const { userId, currentPartId, completed } = req.body;
    const progress = await Progress.create({
      userId,
      currentPartId,
      completed,
    });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
