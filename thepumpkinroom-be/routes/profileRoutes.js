const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

// creating a new player - POST
router.post("/profile", async (req, res) => {
  try {
    const { userName } = req.body;
    console.log("userName:", userName);
    // check for existing username
    const existingUser = await Profile.findOne({ where: { userName } });
    if (existingUser) {
      return res.status(400).json({ error: "Username already taken" });
      // This username already exists. Do you want to load your game?
    }

    const profile = await Profile.create({
      userName,
    });
    res.json(profile);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// updating & resetting profile - PUT
// updating/saving: currentStoryPartId = this.currentStoryPartId,
//      choicesMade = this.choicesMade, completed = this.completed
// reset: currentStoryPartId = 1, completed = false

module.exports = router;
