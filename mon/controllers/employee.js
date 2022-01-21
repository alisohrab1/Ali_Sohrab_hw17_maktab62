const Employee = require("../models/employee");

exports.createEmployee = async (req, res, next) => {
  console.log("**********");
  console.log(req.body);
  try {
    const emp = await Employee.find({nationalId : req.body.nationalId});
    if (emp.length>0) return res.status(400).send("duplicate national id")
    const NEW_Employee = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      nationalId: req.body.nationalId,
      phone: req.body.phone,
      gender: req.body.gender,
      company : req.body.id
    });
  
    console.log(NEW_Employee);
  
    NEW_Employee.save((err, company) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "Somthing went wrong" });
        // return res.render("register", { msg: "Somthing went wrong" });
      } else {
        // return res.render("login");
        res.send("company added successfully");
      }
    });
  
    
  } catch (error) {

    console.log(error);
    res.status(500).send(error);
    
  }

  




  // try {
  //   const data = {
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     nationalId: req.body.nationalId,
  //     phone: req.body.phone,
  //     gender: req.body.gender,
  //   };

  //   const newEmployee = await Employee.create(data);

  //   res.send("created");
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).send(error);
  // }
};
