const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Progress = sequelize.define("Progress", {
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

module.exports = Progress;
