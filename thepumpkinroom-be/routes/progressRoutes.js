const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");

// creating a new player - POST
// userId, userName
router.post("/progress", async (req, res) => {
  try {
    const userName = req.body;
    const progress = await Progress.create({
      userName,
    });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// updating & resetting progress - PUT
// updating/saving: currentStoryPartId = this.currentStoryPartId,
//      choicesMade = this.choicesMade, completed = this.completed
// reset: currentStoryPartId = 1, completed = false

module.exports = router;
