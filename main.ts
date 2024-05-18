#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
let todoList = [];
let conditions = true;
console.log(chalk.magenta.bold("\n \t ***** WELLCOME TO SABA - TODO-LIST APPLICATION *****\n"));
while(conditions){
    let addTask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:chalk.green("Enter your new task:"),
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in todo list successfully! `);
    let addMoreTask = await inquirer.prompt([
        {
            name:"addmore",
            type:"confirm",
            message: chalk.blue ("Do you want to add more task ?"),
            default:false
        }
    ]);
    conditions = addMoreTask.addmore
}
console.log("Your updated Todo list" ,todoList);