//Question #1 Information
var officeItems = ['stapler' , 'monitor' , 'computer' , 'desk' , 'lamp' , 'computer' , 'lamp' , 'stapler' , 'computer' , 'computer'];
//Question #1 Answer - Loop through the following array and count how many "computers" there are. Log the final count
var computerTotal = 0;
for( var i = 0; i < officeItems.length; i++){
    if( officeItems[i] === 'computer')
        computerTotal++
    }
    console.log(computerTotal);

//Question #2 Information
    var peopleWhoWantToSeeMadMaxFuryRoad = [
        {
            name: 'Mike',
            age: 12,
            gender: 'male'
        },{
            name: 'Madeline',
            age: 80,
            gender: 'female'
        },{
            name: 'Cheryl',
            age: 22,
            gender: 'female'
        },{
            name: 'Sam',
            age: 30,
            gender: 'male'
        },{
            name: 'Suzy',
            age: 4,
            gender: 'female'
        }
    ]
//Question #2 Answer - Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
    for(var j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad.length; j++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[j].age >= 18){
            console.log('old enough');
        } else{
            console.log('not old enough');
        }
//Question #3 Answer - Log to the console a personalized message 
        if(peopleWhoWantToSeeMadMaxFuryRoad[j].age >= 18){
            console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[j].name} is old enough to see Mad Max.`);
        } else{
            console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[j].name} is not old enough to see Mad Max.`);
        }
//Question #4 Answer - Check to see if the movie goer is a male or female for an even more personalized message.
        if(peopleWhoWantToSeeMadMaxFuryRoad[j].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[j].gender === 'female'){
            console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[j].name} is old enough. She\'s good to see Mad Max Fury Road.`);
        } else if(peopleWhoWantToSeeMadMaxFuryRoad[j].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[j].gender === 'male'){
            console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[j].name} is old enough. He\'s good to see Mad Max Fury Road.`);
        } else if(peopleWhoWantToSeeMadMaxFuryRoad[j].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[j].gender ==='female'){
            console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[j].name} is not old enough to see Mad Max Fury Road, don\'t let her in.`);
        } else{
            console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[j].name} is not old enough to see Mad Max Fury Road, don\'t let him in.`)
        }
    }
//Question #5 Answer - Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".
    for(var k = 0; k < 101; k++){
        if(k % 2 === 0){
            console.log(`${k} is even.`);
        } else{
            console.log(`${k} is odd`);
        }
    }
//Extra Credit
var lightOnOrOff = [
    [2, 5, 435, 4, 3],
    [1, 1, 1, 1, 3],
    [9, 3, 4, 2]
]

var mArray = 0;

for(var l = 0; l < lightOnOrOff.length; l++){
    for(var m = 0; m < lightOnOrOff[l].length; m++){
        mArray += m;
        if (mArray % 2 === 0 ? console.log('The light is off.') : console.log('The light is on.'));
    }
}

console.log('The light is off at the end.');