var fruit = [
    'banana',
    'apple',
    'orange',
    'watermelon'
];

var vegetables = [
    'carrot',
    'tomato',
    'pepper',
    'lettuce'
];
//Question #1 - Answer - Remove the last item from the vegetables array. ('lettuce' was removed)
vegetables.splice(3);
console.log(vegetables);

//Question #2 - Answer - Remove the first item from the fruit array. ('banana' was removed)
fruit.splice(0, 1);
console.log(fruit);

//Question #3 - Answer - Find the index of "orange." (In fruit array after 'banana' was removed, index of 'orange' is 1.)
var indexOfOrange = fruit.indexOf('orange')
console.log(indexOfOrange);

//Question #4 - Answer - Add that number to the end of the fruit array.
var orangeIndex = 1;
fruit.push(1);
console.log(fruit);

//Question #5 - Answer - Use the length property to find the length of the vegetable array.
var veggieLength = vegetables.length;
console.log(veggieLength);

//Question #6 - Answer - Add that number to the end of the vegetable array.
var veggieLengthNumber = 3;
vegetables.push(3);
console.log(vegetables);

//Question #7 - Answer - Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);
console.log(food);

//Question #8 - Answer - Remove 2 elements from your new array starting at index 4 with one method. ('carrot' and 'tomato' were removed)
food.splice(4, 2);
console.log(food);

//Question #9 - Answer - Reverse your array.
food.reverse();
console.log(food);

//Question #10 - Answer - Turn the array into a string and return it.
var foodString = food.toString();
console.log(foodString);