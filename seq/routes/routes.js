const express = require('express');
const router = express.Router();
const comapnyController = require("../controllers/comapnyController");
const profileController = require("../controllers/profileController");
const employeeController = require("../controllers/employee");

router.get('/',(req, res,next)=>{
    res.render("home")
} )

router.get('/company' , comapnyController.getAll);
router.post('/company' , comapnyController.create);
router.put('/company' , comapnyController.update);
router.delete('/company/:id' , comapnyController.del)


router.get("/profile/:id" , profileController.getProfile );


router.post('/employee' , employeeController.createEmployee );
router.put("/employee" , employeeController.updateEmployee);
router.delete("/employee/:id" , employeeController.del)


module.exports = router;