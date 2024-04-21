import inquirer from "inquirer";
import chalk from "chalk";

// Initialize user balance and pin code
let myBalance = 5000;
let myPin = 1234;

// Print Wellcome message
console.log(chalk.blue("\n \tWellcome to Code With Noureen - ATM Machine\n"));

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: chalk.yellow("Enter your pin code:")
  },
]);
if (pinAnswer.pin === myPin) {
  console.log(chalk.green("\nPin is Correct, Login Seccessfully!\n"));
  //   console.log(`Current Account Balance is ${myBalance}`);

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Select an operation:",
      choices: ["Withdraw Ammount", "Check Balance"],
    },
  ]);

  if (operationAns.operation === "Withdraw Ammount") {
    let withdrawAns = await inquirer.prompt([
      {
        name: "withdrawMethode",
        type: "list",
        message: "Select a withdrawl methode:",
        choices: ["Fast Cash", "Enter Amount"],
      },
    ]);
    if (withdrawAns.withdrawMethode === "Fast Cash") {
      let fastCashAns = await inquirer.prompt([
        {
          name: "fastCash",
          type: "list",
          message: "Select Amount:",
          choices: [1000, 2000, 5000, 10000, 20000, 50000],
        },
      ]);
      if (fastCashAns.fastCash > myBalance) {
        console.log(chalk.red("Insufficient Balance"));
      } else {
        myBalance -= fastCashAns.fastCash;
        console.log(`${fastCashAns.fastCash} withdraw Successfully`);
        console.log(`Your Remaining Balance is: ${myBalance}`);
      }
    } else if (withdrawAns.withdrawMethode === "Enter Amount") {
      let ammountAns = await inquirer.prompt([
        {
          name: "ammount",
          type: "number",
          message: "Enter the ammount to withdraw:",
        },
      ]);

      if (ammountAns.ammount > myBalance) {
        console.log(chalk.red("Insufficient Balance"));
      } else {
        myBalance -= ammountAns.ammount;
        console.log(`${ammountAns.ammount} Withdraw Successfully`);
        console.log(`Your Remaining Balance is: ${myBalance}`);
      }
    }
  } else if (operationAns.operation === "Check Balance") {
    console.log(`Your Account Balance is: ${myBalance}`);
  }
} else {
  console.log(chalk.red("Pin is Incorrect, Try Again!")
);
}
