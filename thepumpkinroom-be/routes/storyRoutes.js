const express = require("express");
const router = express.Router();
const StoryPart = require("../models/StoryPart");
const Choice = require("../models/Choice");

// Get story part by ID
router.get("/story/:id", async (req, res) => {
  try {
    const storyPart = await StoryPart.findByPk(req.params.id, {
      include: [{ model: Choice }],
    });
    if (storyPart) {
      res.json(storyPart);
    } else {
      res.status(404).json({ error: "Story part not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
