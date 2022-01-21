const Company = require('./company');
const Employee = require("./employee");

(async function(){
    try {
        await Company.sync();
        await Employee.sync();
    } catch (error) {
        console.error("error from migration");
        process.exit(1);
    }
})();