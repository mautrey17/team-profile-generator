const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

//list of employees
const employeeList = [];

let endBuild = false;

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
    choice: [
        'Add an engineer',
        'Add an intern',
        'Finish team building'
    ]
}