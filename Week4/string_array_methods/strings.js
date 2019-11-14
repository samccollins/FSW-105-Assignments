//Question #1 - Answer - Make a function that will return any given string into all caps followed by the same string all lowercase.
var upperAndLower = 'Hello';
var upperHello = upperAndLower.toUpperCase();
var lowerHello = upperAndLower.toLowerCase();
var newUpperAndLower = upperHello.concat(lowerHello);
console.log(newUpperAndLower);

//Question #2 - Answer - Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
function findIndex(index){
    return Math.floor(index.length / 2);
}
var middleIndex = findIndex('Hello');
console.log(middleIndex);

//Question #3 - Answer- Make a function that uses slice() and the other functions you've written to return the first half of the string.
var returnFirstHalf = 'Hello World';
var firstHalf = returnFirstHalf.slice(0, 5);
console.log(firstHalf);

/*Question #4 - Answer - Make a function that takes a string and returns that string where the first half is capitalized, and the second half 
is lower cased. (If the string length is odd, capitalize the shorter of the first half.)*/
var halfUpHalfDown = 'Hello World';
var upHalf = halfUpHalfDown.slice(0, 5);
var downHalf = halfUpHalfDown.slice(5);
var newUpHalf = upHalf.toUpperCase();
var newDownHalf = downHalf.toLowerCase();
var newHalfUpHalfDown = newUpHalf + " " + newDownHalf;
console.log(newHalfUpHalfDown);