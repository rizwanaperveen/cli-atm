#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPin = 4567;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please enter your pin number.",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.blue("Correct pin code!!"));
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select one option,",
            type: "list",
            choices: ["withdraw", "checkbalance"]
        }
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "please enter your amount!",
                type: "number"
            }
        ]);
        myBalance -= amountAnswer.amount;
        console.log(chalk.yellow("your remaining balance is: " + myBalance));
    }
    else if (operationAnswer.operation === "checkbalance") {
        console.log(chalk.green("your balance is : " + myBalance));
    }
}
else {
    console.log(chalk.red("Incorrect pin number"));
}
