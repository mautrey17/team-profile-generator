const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

//list of questions for team manager
const managerQuestions = [
    {
        type: 'input',
        message: '',
        name: ''
    }
]

//list of questions for team engineers
const engineerQuestions = [
    {
        type: 'input',
        message: '',
        name: ''
    }
]

//list of questions for inters
const internQuestions = [
    {
        type: 'input',
        message: '',
        name: ''
    }
]