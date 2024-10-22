const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Profile = sequelize.define(
  "Profile",
  {
    userName: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
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

module.exports = Profile;
