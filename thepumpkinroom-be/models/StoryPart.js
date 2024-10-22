const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const StoryPart = sequelize.define(
  "StoryPart",
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = StoryPart;
