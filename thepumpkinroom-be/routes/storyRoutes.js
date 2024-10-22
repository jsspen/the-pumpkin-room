const express = require("express");
const router = express.Router();
const StoryPart = require("../models/StoryPart");
const Question = require("../models/Question");
const Choice = require("../models/Choice");

router.get("/story/:id", async (req, res) => {
  try {
    // fetch the storyPart with primary key matching the one passed
    const storyPart = await StoryPart.findByPk(req.params.id, {
      // also grab all associated questions for the storypart
      include: [
        {
          model: Question,
          as: "questions",
          // also grab all the associated choices for the questions associated with the storypart
          // is this taking it too far and grabbing too much unnecessarily when the question hasn't yet been determined
          // if 10 questions are returned for this storypart that could mean something like 40 choices also returned
          // but only 1 question will be selected in the end which will then only need something like 4 choices fetched
          // but it also reduces complexity on the client side, allows fewer requests and could ultimately improve performance
          // it also simplifies the API routes, keeping things clear and meaningful by consolidating
          include: [
            {
              model: Choice,
              as: "choices",
            },
          ],
        },
      ],
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
