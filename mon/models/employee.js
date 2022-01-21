const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeShema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
    minlength: 3,
  },
  nationalId: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
    minlength: 3,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required:true
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
    minlength: 3,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true
},
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Employee", EmployeeShema);
