const Company = require("../models/company");
const Employee = require("../models/employee");

exports.getProfile = async (req, res, next) => {
  console.log("req.params.id");
  let company = await findCompany(req.params.id);
  let employees = await findEmployee(req.params.id);
  console.log("found employee is" , employees);
  res.render("profile", { data: company , employees : employees});
};

const findCompany = async (id) => {
  try {
    console.log("hello from findCompany");
    const company = await Company.findOne({ _id: id });
    console.log(company);
    return company;
  } catch (e) {
    console.log("error - findCompany", e);
    return res.render("register", { msg: "Somthing went wrong" });
  }
};


const findEmployee = async(id) =>{
  try {
    console.log("hello from findEmployee");
    const employee = await Employee.find({company : id});
    // console.log(employee);
    return employee;
  } catch (e) {
    console.log("error - findEmployee", e);
    return res.render("register", { msg: "Somthing went wrong" });
  }
}