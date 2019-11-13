//Question #1 Answer - Write a function that accepts two numbers as parameters, and returns the sum.
function mySum(num1, num2){
    return num1 + num2;
}
var sum = mySum(5, 4);
console.log(sum);

//Question #2 Answer - Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function largestNum(num1, num2, num3){
    return Math.max(num1, num2, num3);
}
var bigNum = largestNum(6, 7, 3);
console.log(bigNum);

//Question #3 Answer - Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function oddOrEven(num){
    num % 2 === 0 ? console.log('Even') : console.log('Odd');
}
oddOrEven(54);

/*Question #4 Answer - Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return
the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string. */
function myString(str){
    str.length <= 20 ? console.log(`${str}` + `${str}`) : console.log(`${str}`);
}
myString('It is a beautiful day!');


//Extra Credit Answer - Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
//Commented out because I don't quite understand it.
/*var fibSeries = function (n){
  if (n===1) {
    return [0, 1];
  } else {
    var s = fibSeries(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibSeries(9));*/