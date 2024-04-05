import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let pinCode = 3456;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === pinCode) {
    console.log("Correct pin code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Check Balance", "Withdraw money", ""]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw money") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "how much do you want to withdraw?",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
    if (operationAns.operation === "Check Balance") {
        console.log(`your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
