
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./connection");
const Company = require("./Company");


const Employee = sequelize.define("Employee", {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  nationalId: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  gender: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  phone: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  company: {
    type: DataTypes.STRING,

    // allowNull defaults to true
  },
} , 
{
  tableName:"employee",
  timestamps:true
});

Employee.belongsTo(Company);


module.exports = Employee;