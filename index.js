const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const funcs = require('./src/write.js')

//list of employees
const employeeList = [];

//list of questions for team manager
const manQs = [
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'managerName'
    },
    {
        type: 'input',
        message: "What is the manager's ID?",
        name: 'managerId'
    },
    {
        type: 'input',
        message: "What is the manager's email?",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'managerOffice'
    }
]

//list of questions for team engineers
const engQs = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName'
    },
    {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'engineerId'
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "What is the engineer's github?",
        name: 'engineerGit'
    }
]

//list of questions for interns
const intQs = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'internName'
    },
    {
        type: 'input',
        message: "What is the intern's ID?",
        name: 'internId'
    },
    {
        type: 'input',
        message: "What is the intern's email?",
        name: 'internEmail'
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'internSchool'
    }
]

//menu question
const menuQ = {
    type: 'list',
    message: 'Would you like to add another member?',
    name: 'menu',
    choices: [
        'Add an engineer',
        'Add an intern',
        'Finish team building'
    ]
}

//function to create another employee
const runMenu = () => {
    inquirer.prompt(menuQ).then((response) => {
        switch (response.menu) {
            case 'Add an engineer':
                inquirer.prompt(engQs).then((response)=> {
                    const newEng = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGit);
                    employeeList.push(newEng);
                    console.log(employeeList)
                    runMenu();
                })
                break;
            case 'Add an intern':
                inquirer.prompt(intQs).then((response)=> {
                    const newInt = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
                    employeeList.push(newInt);
                    console.log(employeeList)
                    runMenu();
                })
                break;
            default:
                // generateHTML();
                fs.writeFileSync('./distr/index.html', funcs.renderHTML(employeeList), 'utf-8');
                console.log('all done!')
                break;
        }
    })
}

//initial function to create team manager
const createManager = () => {
    inquirer.prompt(manQs).then((response) => {
        console.log(response);
        const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
        employeeList.push(newManager);
        runMenu();
    });
}

createManager();