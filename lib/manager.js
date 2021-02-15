const Employee = require('./employee.js');

class Manager extends Employee{
    constructor(empName, id, email, officeNumber){
        super(empName, id, email)
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager'
    };

    getOffice(){
        return this.officeNumber;
    }
};

module.exports = Manager;