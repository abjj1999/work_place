const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./employee');
const Manager = require('./manager');
const Intern = require('./Intern');
const Engineer = require('./engineer');

const generate = require('../src/page-template');
class App {
    constructor() {

        this.Array = [];
        this.managerPrompt = [
            {
                type: 'input',
                name: "name",
                message: 'Enter the manager name: ',
            },
            {
                type: 'input',
                name: "id",
                message: 'Enter the manager Id: ',
            },
            {
                type: 'input',
                name: "email",
                message: 'Enter the manager email: ',
            },
            {
                type: 'input',
                name: "officeNum",
                message: 'Enter the manager office number: ',
            },

        ]
        this.EmployeePrompt = [
            {
                type: 'list',
                name: 'role',
                message: 'Choose a role:',
                choices: ['Engineer', 'Intern', 'Exit'],
            },
            {
                type: 'input',
                message:  ({role}) =>  `Enter the ${role} name: `,
                name: 'name',
                when: ({role}) => role !== 'Exit'
            },
            {
                type: 'input',
                message:  ({role}) =>  `Enter the ${role} Id: `,
                name: "id",
                when: ({role}) => role !== 'Exit'
            },
            {
                type: 'input',
                message:  ({role}) =>  `Enter the ${role} email: `,
                name: "email",
                when: ({role}) => role !== 'Exit'

            },
            {
                type: 'input',
                message: 'Enter your engineer gitHub username: ',
                name: 'github',
                when: ({role}) => role === 'Engineer'
            },
            {
                type: 'input',
                message: 'Enter your Intern school: ',
                name: 'school',
                when: ({role}) => role === 'Intern'
            }

        ]
    }
    
    start() {
        inquirer.prompt(this.managerPrompt).then(data => {
            data.role = "Manager";
            this.Array.push(new Manager(data.name, data.id, data.email, data.officeNum ))
            this.EmployeeData();
            
        })
    }

    EmployeeData() {
        if(this.managerPrompt){
            inquirer.prompt(this.EmployeePrompt).then(Edata => {
                //console.log(Edata);
                if(Edata.role === 'Engineer'){
                    this.Array.push(new Engineer(Edata.name, Edata.id, Edata.email, Edata.github));
                    this.EmployeeData();
                }
                else if(Edata.role === 'Intern'){
                    this.Array.push(new Intern(Edata.name, Edata.id, Edata.email, Edata.school))
                    this.EmployeeData();
                }
                else {
                    console.log(this.Array);
                    this.pageHTML();
                }
            })
        }
    }
    pageHTML() {
        const page = generate(this.specificField());
        fs.writeFile('./index.html', page, err => {
            if (err) throw new Error(err);
            console.log('page created');
        })
    }
    
    specificField() {
        var property = "";
        var body = ``;
        this.Array.forEach(member => {
            if (member.getRole() === 'Manager'){
                property = `Office Number: ${member.getOfficeNumber()}`;
            }
            else if(member.getRole() === 'Engineer'){
                property = `<a href="https://github.com/${member.getGitHub()}"">GitHub</a>`;
                console.log(property);
            }
            else if(member.getRole() === 'Intern') {
                property = `School: ${member.getSchool()}`;
                console.log(property);
            }

            var card = `
            <div class="card-container">
            <div class="body">
                <h4 class="title"><span class = "name">${member.getName()}</span> <span class = 'id'>${member.getId()}</span> </h4>
                <p class="text">${member.getRole()}</p>
                <a class= 'email' href= 'mailto: ${member.getEmail()}'>Email ${member.getName()}</a>
                <h6 class = 'property'> ${property}</h6>
            </div>
            </div>
            `
            body += card;
        })
        return body;
        
    }
}


module.exports = App;