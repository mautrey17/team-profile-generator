const Employee = require('./employee.js')

class Manager extends Employee{
    constructor(officeNumber){
        super(empName, id, email)
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager'
    };
};

module.exports = Manager;