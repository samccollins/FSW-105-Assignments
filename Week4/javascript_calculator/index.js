const readline = require('readline-sync');
//Function that adds 2 numbers.
function mySum(num1, num2){
    var num1 = Number(readline.question('Please enter your first number'));
    var num2 = Number(readline.question('Please enter your second number'));
return console.log('The result is:', num1 + num2);
}

//Function to multiply 2 numbers.
function myProduct(num1, num2){
    var num1 = Number(readline.question('Please enter your first number'));
    var num2 = Number(readline.question('Please enter your second number'));
return console.log('The result is:', num1 * num2);
}

//Function to divide 2 numbers.
function myQuotient(num1, num2){
    var num1 = Number(readline.question('Please enter your first number'));
    var num2 = Number(readline.question('Please enter your second number'));
return console.log('The result is:', num1 / num2);
}

//Function to subtract 2 numbers.
function myDifference(num1, num2){
    var num1 = Number(readline.question('Please enter your first number'));
    var num2 = Number(readline.question('Please enter your second number'));
return console.log('The result is:', num1 - num2);
}

function myCalculator(){
    function chooseOperation(){
        var operationChoice = readline.question('Please enter the operation to perform: add, sub, mul, div');
    return operationChoice === 'add' ? mySum() :
           operationChoice === 'mul' ? myProduct() : 
           operationChoice === 'div' ? myQuotient() : 
           operationChoice === 'sub' ? myDifference() :
           console.log('Error, please enter a different operation.');
    }
    chooseOperation();

    function continueYesorNo(){
        var yesOrNo = readline.question("New calculation? Please enter: 'yes' or 'no'")
    return (yesOrNo === 'yes' ? myCalculator() : yesOrNo === 'no' ? console.log('Goodbye!') : console.log("Error, please enter 'yes' or 'no'."));
    }
    continueYesorNo();
}

myCalculator();