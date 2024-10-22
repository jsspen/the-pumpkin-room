const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Progress = sequelize.define(
  "Progress",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    currentStoryPartId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    choicesMade: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Progress;
