const Question = require("./models/Question");
const StoryPart = require("./models/StoryPart");
const Choice = require("./models/Choice");

const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");

const storyRoutes = require("./routes/storyRoutes");
const progressRoutes = require("./routes/progressRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/api", storyRoutes);
app.use("/api", progressRoutes);
// Sync models with the database
sequelize.sync({ alter: true }).then(() => {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
});
