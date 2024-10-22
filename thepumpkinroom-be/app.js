const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");

const storyRoutes = require("./routes/storyRoutes");
const profileRoutes = require("./routes/profileRoutes");

const Question = require("./models/Question");
const StoryPart = require("./models/StoryPart");
const Choice = require("./models/Choice");

const app = express();
app.use(bodyParser.json());

app.use("/api", storyRoutes);
app.use("/api", profileRoutes);

Question.belongsTo(StoryPart, { foreignKey: "storyPartId", as: "storyPart" });
Question.hasMany(Choice, { as: "choices", foreignKey: "questionId" });
Choice.belongsTo(Question, { foreignKey: "questionId", as: "question" });
StoryPart.hasMany(Question, { as: "questions", foreignKey: "storyPartId" });

// Sync models with the database
sequelize.sync({ alter: true }).then(() => {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
});
