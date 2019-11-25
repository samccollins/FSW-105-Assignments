const readline = require('readline-sync');
const name = readline.question('Hello, what is your name? ');


let stillAlive = true;
let haveWon = false;
let hasKey = false;

let rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

let continueYesOrNo = () => {
    while (true) { 
        const playAgain = readline.question('Would you like to play again? (Please enter "yes" or "no") ');
        switch (playAgain.toLowerCase()) {
            case 'yes':
                return true;
            case 'no':
                console.log('Goodbye!');
                return false;
            default :
                console.log('Error, please enter yes or no.');
                break;   
        }
    }

}

let handInHole = () => {
    if (rollDice() < 4) {
        stillAlive = false;
        console.log('You stuck your hand in the hole and died.');
    }else {
        console.log('You did not stick your hand in the hole.');
        }
}

let findKey = () => {
    if (rollDice() < 4) {
        hasKey = true;
        console.log('You found the key!');
    }else {
        console.log('You did not find the key.');
    }
}

let openDoor = () => {
    if (rollDice() < 4 && hasKey) {
        haveWon = true;
        console.log("You opened the door and escaped!");
    }else {
        console.log('You did not open the door.');
    }
}

let myGame = () => {
    stillAlive = true;
    haveWon = false;
    hasKey = false;
    console.log(`Hello, ${name}. \n\ 
I have locked you in this room, and while death is certainly and option, I'd like to play a game with you.`)
    while ( stillAlive && !haveWon ){
        console.log("You have 3 options to escape: \n\
1.) You can put your hand in the hole. \n\
2.) You can find the key. \n\
3.) You can open the door.");
        const choice = parseInt(readline.question('Which option would you like to choose? (Enter number 1, 2, or 3.) '));
        switch (choice){
            case 1:
                handInHole();
                break;
            case 2:
                findKey();
                break;
            case 3:
                openDoor();
                break;
            default:
                console.log('Error, please enter 1, 2, or 3. ');
                break;
        }
    }
}
do {
    myGame();
} while (continueYesOrNo());