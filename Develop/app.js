const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const newPerson = [
    {
        type: 'list',
        name: 'Job description',
        message: 'what position would you like to create a info card for? (select "no more" if you have entered all of the positions that you would like to.)',
        choices: ["Engineer", "Intern", "No More"],
    },
]
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the manager of the team's name?",
    },

    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's Id number?",
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email address?",
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's Office Number?",
    },
]
const engineerQuestions = [

    {
        type: 'input',
        name: 'engineerName',
        message: "What is the Engineer's name?",
    },

    {
        type: 'input',
        name: 'engineerId',
        message: "What is the Engineer's Id number?",
    },

    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?",
    },

    {
        type: 'input',
        name: 'github',
        message: "Enter this engineer's GitHub user name",
    },
]
const internQuestions = [

    {
        type: 'input',
        name: 'internName',
        message: "What is the Intern's name?",
    },

    {
        type: 'input',
        name: 'internId',
        message: "What is the intern's Id number?",
    },

    {
        type: 'input',
        name: 'internEmail',
        message: "What is the Intern's Email address?",
    },

    {
        type: 'input',
        name: 'school',
        message: "Where does the Intern go to school?",
    },
]
function init() {
    console.log("Inside the init function")
    inquirer.prompt(newPerson).then((response) => {
        fs.writeFileSync("exampleREADME.md", generateMarkdown(response), function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }
        })
    })
};
init();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
