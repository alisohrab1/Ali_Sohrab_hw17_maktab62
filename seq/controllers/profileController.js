const Company = require("../models/company");
const Employee = require("../models/employee");

exports.getProfile = async (req, res, next) => {

  try {
    
  let company = await Company.findOne({where:{registerId:req.params.id}});
  let employees = await Employee.findAll({where:{company:req.params.id}});
  console.log("found employee is" , employees);
  res.render("profile", { data: company , employees : employees});
    
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    
  }


};

