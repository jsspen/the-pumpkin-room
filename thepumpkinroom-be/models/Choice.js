const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Choice = sequelize.define(
  "Choice",
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nextStoryPartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Choice;
