const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const page_template = require("./src/page_template");
const { mainModule } = require("process");

const outputFolder = "dist";
const htmlFileName = "team.html";

let teamMembers = [];
let teamIDs = [];

//  1a. call create manager function

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "office",
      },
    ])
    .then((res) => {
      teamMembers.push(
        new Manager(res.name, parseInt(res.id), res.email, parseInt(res.office))
      );
      teamIDs.push(parseInt(res.id));
      createTeam();
    });
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        message: "Do you want to add another employee or exit?",
        choices: ["Add Engineer", "Add Intern", "Exit"],
        name: "choice",
      },
    ])
    .then((res) => {
      if (res.choice == "Add Engineer") {
        addEngineer();
      }
      if (res.choice == "Add Intern") {
        addIntern();
      }
      if (res.choice == "Exit") {
        makeHTML();
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's github?",
        name: "git",
      },
    ])
    .then((res) => {
      teamMembers.push(
        new Engineer(res.name, parseInt(res.id), res.email, res.git)
      );
      teamIDs.push(parseInt(res.id));
      createTeam();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the intern's school?",
        name: "school",
      },
    ])
    .then((res) => {
      teamMembers.push(
        new Intern(res.name, parseInt(res.id), res.email, res.school)
      );
      teamIDs.push(parseInt(res.id));
      createTeam();
    });
}

function makeHTML() {
  console.log(teamMembers);
  console.log(teamIDs);
}
//
//  5. function build team
//      - check if the output folder path already exists.
//      -   if not, create it
//      - call page template function passing the team member object array as input argument
//      - write the returned template function to the output
//
//      - Hint: fs.existsSync, fs.mkdirSync, and fs.writeFileSync

function main() {
  createManager();
}

main();
