const Employee = require("../models/employee");

exports.createEmployee = async (req, res, next) => {
  try {
    let employee = await Employee.findOne({
      where: { nationalId: req.body.nationalId },
    });
    console.log(employee, "found this");
    if (employee) return res.status(400).send("duplicat national ID");
    await Employee.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      nationalId: req.body.nationalId,
      phone: req.body.phone,
      gender: req.body.gender,
      company: req.body.id,
    });
    res.send("success");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

exports.updateEmployee = async (req, res, next) => {
  console.log("hello from update");
  console.log(req.body);
  try {
    let employee = await Employee.findOne({
      where: { nationalId: req.body.nationalId },
    });
    console.log(employee);
    await Employee.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        gender: req.body.gender,
      },
      { where: { nationalId: req.body.nationalId } }
    );
    res.send("success");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};


exports.del = async (req, res, next) => {
  console.log("hello");
  try {
    await Employee.destroy({where:{ nationalId: req.params.id }});
    res.send("success");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};