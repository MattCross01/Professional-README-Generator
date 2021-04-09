// starting our code here with the required instruction 
var inquirer=require('inquirer');
var fs=require("fs");
const util=require("util");

const writeFileAsync=util.promisify(fs.writeFile);

// Starting with the series of prompts
function promptUser(){
return inquirer.prompt([
    {
        type:"input",
        message:"What's your Subject or Title?",
        name:"title"
    },
    {
     type:"input",
     message:"Tell me what's your document about ",
     name:"description"
 },
 {
     type:"input",
     message:"what are the topics of your table of contents: ",
     name:"contents"
 },
 {
     type:"input",
     message:"Please provide installation instructions: ",
     name:"instal"
 },
 {
     type:"input",
     message:"How will this be used? ",
     name:"usage"
 },
 {
     type:"list",
     message:"Please select one of these licenses: ",
     name:"license",
     choices:[
         "Apache",
         "IBM",
         "MIT",
         "Pearl"
     ]
 },
 {
     type:"input",
     message:"Any contributions on this project? ",
     name:"contributions"
 },
 {
     type:"input",
     message:"Please provide test instructions or notes: ",
     name:"test"
 },
 {
     type:"input",
     message:"Provide your e-mail address: ",
     name:"Email"
 },
 {
     type:"input",
     message:"provide your github ID:",
     name:"github"
 },
 ]);
} 




