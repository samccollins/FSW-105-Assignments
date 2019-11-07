let compareNumbers = ('x' , 'y');
x = 5;
y = 3;
x > y ? console.log('Is greater than.') : console.log('Is not greater than.');


let wordCounted = ('animal');
animal = 'cat';
animal.length === 3 ? console.log('Is the length.') : console.log('Is not the length.');


let compareWords = ('a' , 'b');
a = 'cat';
b = 'dog';
a === b ? console.log('They are the same.') : console.log('They are not the same.');


var person = {
    name: 'Bobby',
    age: 12
}

//If the person is 18 or older, they can go to the movie. 
person.age >= 18 ? console.log(`${person.name} is allowed to go to the movie.`) : console.log(`${person.name} is not allowed to go to the movie.`);
//If the person's name starts with B, they can go to the movie.
person.name.startsWith('B') ? console.log(`${person.name} is allowed to go to the movie.`) : console.log(`${person.name} is not allowed to go to the movie.`);
//If the person's name starts with B and they are over the age of 18, they can go to the movie.
person.name.startsWith('B') && person.age > 18 ? console.log(`${person.name} is allowed to go to the movie.`) : console.log(`${person.name} is not allowed to go to the movie.`);


1 === '1' ? console.log('strict') : console.log('loose');
1 <= 2 && 2 === 4 ? console.log('yes') : console.log('no');

//Gold Medal Attempt

//string
let item = 'dog';
    console.log(typeof item);
//boolean
item = true;
    console.log(typeof item);
//undefined
item = " ";
    console.log(typeof item);
item = 's';
item > 12 ? console.log('is greater than') : console.log('is not greater than');
item = 13;
item > 12 ? console.log('is greater than') : console.log('is not greater than');
item = 'a';
item === 12 ? console.log('is equal to') : console.log('is not equal to');

let myNumber = 10;
myNumber % 2 === 0 ? console.log('Even') : myNumber % 2 !== 0 ? console.log('Odd') : "";


