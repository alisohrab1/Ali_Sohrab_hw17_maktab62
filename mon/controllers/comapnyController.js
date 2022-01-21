const Company = require("../models/company");

exports.getAll = (req, res, next) => {
  findAll()
    .then((result) => {
      // console.log(result);
      res.render("../views/companies", { data: result });
    })
    .catch((error) => console.log(error));
};

exports.create = async (req, res, next) => {

  let company = await Company.find({registerId : req.body.registerId});
  console.log(company,"found this");
  if(company.length>0) return res.status(400).send("duplicat register ID")

  addCompany(req, res);
};

exports.update = async (req, res, next) => {
  console.log("this should work");
  console.log(req.body);
  try {
    const filter = {
      registerId: req.body.registerId,
    };
    const update = {
      name : req.body.name,
      city: req.body.city,
      province: req.body.province,
      phone: req.body.phone,
    };

    await Company.findOneAndUpdate(filter, update);
    res.send("success");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.del  = async (req, res,next) => {
  console.log("hello");
  try {

    await Company.findOneAndRemove({registerId : req.params.id});
    res.send("success")
    
  } catch (error) {
    console.log(error);
    res.send(error);
    
  }
}




const addCompany = async (req, res) => {
  try {
    console.log("hello from addCompany");

    const NEW_Company = new Company({
      name: req.body.name,
      registerId: req.body.registerId,
      city: req.body.city,
      province: req.body.province,
      phone: req.body.phone,
    });

    NEW_Company.save((err, company) => {
      if (err) {
        return res.status(500).json({ msg: "Somthing went wrong" });
        // return res.render("register", { msg: "Somthing went wrong" });
      } else {
        // return res.render("login");
        res.send("company added successfully");
      }
    });
  } catch (e) {
    console.log("error - addComapny", e);
    return res.send(e);
    // return res.render("register", { msg: "Somthing went wrong" });
  }
};

const findAll = async () => {
  try {
    console.log("hello from findAll");
    const all = await Company.find();
    return all;
  } catch (e) {
    console.log("error - findUser", e);
    return false;
    // return res.render("register", { msg: "Somthing went wrong" });
  }
};
