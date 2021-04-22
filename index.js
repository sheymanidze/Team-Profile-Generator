const inquirer = require('inquirer');
const fs = require('fs');

//constructor function
const Employee = require('.lib/Employee.js');
const Engineer = require('.lib/Engineer.js');
const Intern = require('.lib/Intern.js');
const Manager = require('.lib/Manager.js');

//generate templates
const generateTemplates = require('./src/template.js')
const writeHTML = require('./generate.js')

const team = [];

function getInfo() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Please write Employee's Name",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter Employee's Name")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please provide Employee's ID",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please ener Employee's ID")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter Employee's email address",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter Employee's email address")
        }
      }
    },
    {
      type: 'list',
      name: 'role',
      message: "Please choose Employee's Role",
      choices: ['Employee', 'Engineer', 'Intern', 'Manager']
    },
  ]);
};
