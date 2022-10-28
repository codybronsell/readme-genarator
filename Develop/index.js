// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'project_title',
      message: "What's the name of your project?",
    },
    {
      type: 'input',
      name: 'Description',
      message: "write a discription of you project.(What was your motivation?- Why did you build this project"
      
    },
    {
        type: 'input',
        name: 'Installation',
        message: "What are the steps required to install your project?",
    },
    {
        type: 'input',
        name: 'Usage',
        message: "Provide instructions and examples for use.",
    },
    {
        type: 'input',
        name: 'Credits',
        message: "List your collaborators.",
    },
    {
        type: 'input',
        name: 'Features',
        message: "list your project features.",
    },

    {
      type: 'input',
      name: 'Licences',
      message: "what licens will you use for your project?.",
    },

    {
      type: 'input',
      name: 'Github',
      message: "whats your github?.",
    },

    {
      type: 'input',
      name: 'Email',
      message: "whats your email address?.",
    },
 
 
 
   
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.info("init");
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
        var text = '';
        text += "#Title \n\n"; 
        text += ""+ answers.project_title + '\n\n';
        text += "##Description \n\n";  
        text += ""+ answers.Description+ '\n\n';
        text += "##Installation \n\n"; 
        text += ""+ answers.Installation+ '\n\n';
        text += "##Usage \n\n"; 
        text += ""+ answers.Usage+ '\n\n';
        text += "##Credits \n\n"; 
        text += ""+ answers.Credits+ '\n\n';
        text += "##Licences \n\n"; 
        text += ""+ answers.Features;
        text += "##Github \n\n"; 
        text += ""+ answers.Features;
        text += "##Email \n\n"; 
        text += ""+ answers.Features;
          fs.writeFile('README.md', text, err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
      });
}

// Function call to initialize app
init();
