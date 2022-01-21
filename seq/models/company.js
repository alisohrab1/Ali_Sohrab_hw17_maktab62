

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Company = sequelize.define("Company", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registerId: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  registerId: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  city: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  province: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  phone: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  }
} , 
{
  tableName:"company",
  timestamps:true
});

module.exports = Company;
