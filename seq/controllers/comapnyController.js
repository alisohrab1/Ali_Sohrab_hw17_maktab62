const Company = require("../models/company");

exports.getAll = async (req, res, next) => {
  try {
    const result = await Company.findAll();
    res.render("../views/companies", { data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    let company = await Company.findOne({ where : { registerId: req.body.registerId } });
    console.log(company, "found this");
    if (company) return res.status(400).send("duplicat register ID");
    await Company.create({
      name: req.body.name,
      registerId: req.body.registerId,
      city: req.body.city,
      province: req.body.province,
      phone: req.body.phone,
    });
    res.send("success")
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

exports.update = async (req, res, next) => {
  console.log("this should work");
  console.log(req.body);
  try {

    await Company.update({
      name: req.body.name,
      city: req.body.city,
      province: req.body.province,
      phone: req.body.phone,
    }, {where:{registerId: req.body.registerId}});


    res.send("success");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.del = async (req, res, next) => {
  console.log("hello");
  try {
    await Company.destroy({where:{ registerId: req.params.id }});
    res.send("success");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

