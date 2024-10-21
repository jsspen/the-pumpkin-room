const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserProgress = sequelize.define("UserProgress", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentPartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = UserProgress;
