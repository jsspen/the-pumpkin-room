const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Choice = sequelize.define("Choice", {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  questionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nextPartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Choice;
