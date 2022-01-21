const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompanyShema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 30,
    minlength: 2,
  },
  registerId: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
    minlength: 3
  },
  city: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
    minlength: 3
  },
  province:{
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
    minlength: 3
  },
  phone:{
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
    minlength: 3
  },
  createdAt:{
    type:Date,
    default : Date.now()
  }
});

module.exports = mongoose.model("Company",  CompanyShema );
