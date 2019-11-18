//FILTER
//Question #1
const fiveUp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fiveUpResults = fiveUp.filter(num => num >= 5);
console.log(fiveUpResults);

//Question #2
const evenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenResults = evenArr.filter(num => num % 2 === 0);
console.log(evenResults);

//Question #3
const wordLength = ['horses', 'dogs', 'cats', 'birds', 'alligators'];
const lengthResults = wordLength.filter(animals => animals.length <= 5);
console.log(lengthResults);

//Question #4
const memberOrNot = [
    {name: 'Angelina Jolie', member: true},
    {name: 'Eric Jones', member: false},
    {name: 'Paris Hilton', member: true},
    {name: 'Kanye West', member: false},
    {name: 'Bob Ziroll', member: true}
];
const memberResults = memberOrNot.filter(people => people.member === true);
console.log(memberResults);

//Question #5
const oldEnough = [
    {name: 'Angelina Jolie', age: 80},
    {name: 'Eric Jones', age: 2},
    {name: 'Paris Hilton', age: 5},
    {name: 'Kanye West', age: 16},
    {name: 'Bob Ziroll', age: 100}
];
const ageResults = oldEnough.filter(people => people.age >= 18);
console.log(ageResults);


//MAP
//Question #1
const doubleNumbers = [2, 5, 100];
const doubleResults = doubleNumbers.map(num => num * 2);
console.log(doubleResults);

//Question #2
const arrToString = [2, 5, 100];
const stringResults = arrToString.map(num => num.toString());
console.log(stringResults);

//Question #3
const capitalizeNames = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];
const upNames = capitalizeNames.map(names => names.charAt(0).toUpperCase() + names.substr(1).toLowerCase());
console.log(upNames);

//Question #4
const namesOnly = [
    {name: 'Angelina Jolie', age: 80},
    {name: 'Eric Jones', age: 2},
    {name: 'Paris Hilton', age: 5},
    {name: 'Kanye West', age: 16},
    {name: 'Bob Ziroll', age: 100}
];
const namesResults = namesOnly.map(person => person.name);
console.log(namesResults);

//Question #5
const makeStrings = [
    {name: 'Angelina Jolie', age: 80},
    {name: 'Eric Jones', age: 2},
    {name: 'Paris Hilton', age: 5},
    {name: 'Kanye West', age: 16},
    {name: 'Bob Ziroll', age: 100}
];
const newString = makeStrings.map(people => people.age >= 18 ? (`${people.name} can go to the Matrix.`) : people.age < 18 ? (`${people.name} is under age!!`) : ''); 
console.log(newString);

//Question #6
/*const readyToPutInTheDOM = [
    {name: 'Angelina Jolie', age: 80},
    {name: 'Eric Jones', age: 2},
    {name: 'Paris Hilton', age: 5},
    {name: 'Kanye West', age: 16},
    {name: 'Bob Ziroll', age: 100}
]*/
//Got a bit lost here and couldn't solve.


//REDUCE
//Question #1
const nums = [1, 2, 3];
const total = nums.reduce(function(final, num){
    final += num;
    return final;
});
console.log(total);

//Question #2
const numArr = [1, 2, 3];
const stringNums = numArr.reduce(function(final, num){
    return final.concat(num);
}, '');
console.log(stringNums);

//Question #3
const voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake ', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
const voteCount = voters.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
}, 0);
console.log(voteCount);

//Question #4
const wishlist = [
    {title: 'Tesla Model S', price: 90000},
    {title: '4 carat diamond ring', price: 45000},
    {title: 'Fancy Hacky Sack', price: 5},
    {title: 'Gold fidgit spinner', price: 2000},
    {title: 'A second Tesla Model S', price: 90000}
];
const shoppingSpree = wishlist.reduce(function(final, item){
    return {price: final.price + item.price};
});
console.log(shoppingSpree);

//Question #5
const array = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6]
];
const array2 = array.reduce(function(final, current){
    return final.concat(current);
}, []);
console.log(array2);

//Question #6
const votersList= [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake ', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
const votersResult = votersList.reduce(function(final, voter){
    if (voter.age >= 18 && voter.age <= 25 && voter.voted){
        final.youngVotes++;
    }
    if (voter.age >= 18 && voter.age <= 25){
        final.youth++;
    }
    if (voter.age >= 26 && voter.age <= 35 && voter.voted){
        final.midVotes++;
    }
    if (voter.age >= 26 && voter.age <= 35){
        final.mids++;
    }
    if (voter.age >= 36 && voter.age <= 55 && voter.voted){
        final.oldVotes++;
    }
    if (voter.age >= 36 && voter.age <= 55){
        final.olds++;
    }
    return final;
}, {youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0});
console.log(votersResult);


//SORT
//Question #1
const leastToGreatest = [1, 3, 5, 2, 90, 20];
leastToGreatest.sort((a, b) => a - b);
console.log(leastToGreatest);

//Question #2
const greatestToLeast = [1, 3, 5, 2, 90, 20];
greatestToLeast.sort((a,b) => b - a);
console.log(greatestToLeast);

//Question #3
const lengthShort = ['dog', 'wolf', 'eaten', 'family'];
lengthShort.sort((a, b) => a.length - b.length);
console.log(lengthShort);

//Question #4
const alphabetical = ['dog', 'wolf', 'eaten', 'family'];
alphabetical.sort();
console.log(alphabetical);

//Question #5
const byAge = [
    {name: 'Quiet Samurai', age: 22},
    {name: 'Arrogant Ambassador', age: 100},
    {name: 'Misunderstood Observer', age: 2},
    {name: 'Unlucky Swami', age: 77}
];
byAge.sort(function(a, b){
    return a.age - b.age;
});
console.log(byAge);


