const inquirer = require('inquirer');
const fs = require('fs');


//constructor function
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

//generate templates
const generateTemplates = require('./src/template.js')

const team = [];

//data we need to fill html page
function inputInfo() {
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
      choices: ['Engineer', 'Intern', 'Manager']
    },
  ])

    // if not an Emplyee
    .then(answers => {
      if (answers.role === 'Engineer') {
        return inquirer.prompt([
          {
            type: 'input',
            name: 'gitHub',
            message: "Please provide Engineer's gitHub name",
            validate: gitInput => {
              if (gitInput) {
                return true;
              } else {
                console.log("Please enter Engineer's gitHub name")
                return false;
              }
            }
          }
        ])
          .then(reply => {
            const addedEngineer = new Engineer(answers.name, answers.id, answers.email, answers.role, reply.gitHub)
            team.push(addedEngineer);
            addMember();
          })
      } else if (answers.role === 'Intern') {
        return inquirer.prompt([
          {
            type: 'input',
            name: 'school',
            message: "Please provide Intern's school name",
            validate: schoolInput => {
              if (schoolInput) {
                return true;
              } else {
                console.log("Please enter Intern's school name")
                return false;
              }
            }
          }
        ])
          .then(reply => {
            const addedIntern = new Intern(answers.name, answers.id, answers.email, answers.role, reply.school);
            team.push(addedIntern);
            addMember();
          })
      } else if (answers.role === 'Manager') {
        return inquirer.prompt([
          {
            type: 'input',
            name: 'officeNumber',
            message: "Please provide Manager's office number",
            validate: officeNumberInput => {
              if (officeNumberInput) {
                return true;
              } else {
                console.log("Please enter Manager's office number")
                return false;
              }
            }
          }
        ])
          .then(reply => {
            const addedManager = new Manager(answers.name, answers.id, answers.email, answers.role, reply.officeNumber);
            team.push(addedManager);
            addMember();
          })
      }
    })

  function addMember() {
    return inquirer.prompt([
      {
        type: 'confirm',
        name: 'addMore',
        message: 'Would you like to add a team memeber?'
      }
    ])
      .then(result => {
        if (result.addMore === true) {
          inputInfo(team);
        } else {
          //console.log('team', team);
          let infoHTML = generateTemplates(team);
          //console.log(infoHTML)
          fs.writeFile('./dist/index.html', infoHTML, (err) =>
            err ? console.log(err) : console.log('Your index.html file was successfully created!')
          );
        }


      })

  }

}

inputInfo();