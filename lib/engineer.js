const Employee = require('./employee.js');

class Engineer extends Employee{
    constructor(github){
        super(empName, id, email)
        this.github = github;
    }
    getGithub(){
        return this.github;
    };

    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;