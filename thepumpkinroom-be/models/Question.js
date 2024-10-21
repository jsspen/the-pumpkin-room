const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Question = sequelize.define("Question", {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  storyPartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Question;
