//Question #1
let name = 'John';
var age = 101;

function runForLoop(pets) {
    let petObjects = [];
    for (var i = 0; i < pets.length; i++) {
        const pet = {type: pets[i]}
        let name;
        if (pets[i] === 'cat') {
            name = 'fluffy';
        } else {
            name = 'spot';
        }
        console.log('pet name: ', name);
        pet.name = name;
        petObjects.push(pet);
    }
    console.log('man name: ', name);
    return petObjects;
}
runForLoop(['cat', 'dog']);


//Question #2
const carrots = ['bright orange', 'ripe', 'rotten'];
mapVegetables = arr => arr.map(carrot => [{type: 'carrot', name: carrot}]);
console.log(mapVegetables(carrots));


//Question #3
const people = [
    {
        name: 'Princess Peach',
        friendly: false
    },
    {
        name: 'Luigi',
        friendly: true
    },
    {
        name: 'Mario',
        friendly: true
    },
    {
        name: 'Bowser',
        friendly: false
    }
]
filterForFriendly = arr => arr.filter(person => person.friendly);
console.log(filterForFriendly(people));


//Question #4
doMathSum = (a, b) => a + b;
console.log(doMathSum(2, 3));
 
produceProduct = (a, b) => a * b;
console.log(produceProduct(2, 3));


//Question #5 and #6
printString = (fName = 'Jane', lName = 'Doe', age = 100) => (`Hi ${fName} ${lName}, how does it feel to be ${age}?`);
console.log(printString());


//Question #7
const animals = [
    {
        type: 'dog',
        name: 'theodore'
    },
    {
        type: 'cat',
        name: 'whiskers'
    },
    {
        type: 'pig',
        name: 'piglette'
    },
    {
        type: 'dog',
        name: 'sparky'
    }
];
filterForDogs = arr => arr.filter(animal => animal.type === 'dog' ? true : false);
console.log(filterForDogs(animals));


//Question #8
welcomeMessage = (name = 'Janice', location = 'Hawaii') => (`Hi ${name}! \n \n Welcome to ${location}. \n \n I hope you enjoy your stay. Please ask the president of ${location} if you need anything. `);
console.log(welcomeMessage());
 


