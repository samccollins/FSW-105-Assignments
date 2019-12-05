const readline = require('readline-sync');

const monsters = [
    {
        name: 'Chevy Chase',
        hp: 100,
        deathMessage: 'Chevy Chase ran you over with a yellow Austin Maxi and you died.',
        winMessage: 'you killed Chevy Chase! As he died, his corpse transformed into an ugly troll' 
    },
    {
        name: 'Dan Aykroyd',
        hp: 80,
        deathMessage: 'Dan Aykroyd shot you with an extremely powerful tranquilizer gun and it killed you.',
        winMessage: 'you killed Dan Aykroyd! As he died, his corpse transformed into a ghost'
    },
    {
        name: 'Clint Eastwood',
        hp: 75,
        deathMessage: 'Clint Eastwood shot you with a revolver and killed you.',
        winMessage: 'you killed Clint Eastwood! As he died, his corpse transformed into a vampire'
    }
];

const items = ['Polaroid 600', 'Sony Discman', 'Nintendo NES', 'Tissot F1 Electronic LCD Watch'];

let randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min + 1)) + min;
};

const chooseMonster = () => {
    return monsters [randomNumber(0, monsters.length - 1)];
};

const chooseItem = () => {
    return items [randomNumber(0, items.length - 1)];
};

var hp = 100;
var name = '';
var inventory = [];
var dead = false;

const printInventory = () => {
    for (const item of inventory) {
        console.log(item);
    }
}

const play = () => {
    while (!dead) {
        let playerChoice = makeChoice('Do you want to walk or view your stats? (w, print)', ['w', 'print']);
        switch (playerChoice) {
            case 'w':
                if (randomNumber(1, 4) == 1) {
                    battle();
                } else {
                    console.log('You did not encounter a monster.');
                }
                break;
            case 'print':
                console.log(`${name}, you have ${hp} HP, you have these items in your inventory: `);
                printInventory();
                break;
        }
    }
}

const gameLoop = () => {
    console.log('The glow from the time machine starts to fade and your eyes begin to adjust to the strange, yet familiar landscape. \n\
                As your vision comes into focus, you notice a man putting up a sign for "New Coke" in his shop window. \n\
                You can hear murmurs from a group of teens about something called "Live-Aid", and Madonna\'s "Crazy For You" booming out of \n\
                a passing Honda Prelude. You look down, and notice a local newspaper. The date reads November 11, 1985. \n\
                You have traveled back in time to hunt down a pair of shape shifting monsters posing as the year\'s most popular stars. This is the return to...\n\
                THUNDERDOME!');
    name = readline.question('What is your name time traveler? ');
    console.log(`Hello, ${name}. Welcome to 1985! Let's begin... `)
    while (true) {
        hp = 100;
        inventory = [];
        dead = false;
        play();
        if ( makeChoice('Would you like to play again? (y, n)', ['y', 'n']) == 'n') {
            break;
        }
    
    }
}

const battle = () => {
    let monster = chooseMonster();
    let monsterHp = monster.hp;
    console.log(`'You have encountered ${monster.name} and he has ${monster.hp} HP. '`)
    while (true) {
      let c = makeChoice('Do you want to attack or run? (a, r)', ['a', 'r']);
        switch (c) {
            case 'a':
                attackDmg = randomNumber(0, 100);
                monsterHp -= attackDmg;
              if (monsterHp <= 0){
                 let newHp = randomNumber(50, 100);
                   hp += newHp;
                 let newItem = chooseItem();
                   inventory.push(newItem);
                   console.log(`You did ${attackDmg} damage and ${monster.winMessage}! You gained ${newHp} HP for a total of ${hp}, and you picked up a ${newItem}.`);
                   return;
              }
              console.log(`You did ${attackDmg} damage, but ${monster.name} still has ${monsterHp} HP.`)
              break;
            case 'r':
                if (randomNumber(1, 2) == 1) {
                    console.log('You successfully ran away!');
                    return;
                }
                console.log(`You attempted to run away, but ${monster.name} grabbed you.`);
                break;
        }
        let damage = randomNumber(0, 100);
        if (damage > hp) {
            console.log(`${monster.name} did ${damage} damage. ` + monster.deathMessage);
            dead = true;
            return;
        }
        hp -= damage;
        console.log(`${monster.name} did ${damage} damage, you now have ${hp} HP remaining.`);
    }

}

const makeChoice = (message, choices) => {
    while (true) {
        const userChoice = readline.question(message + ' ').toLowerCase();
        if (choices.includes (userChoice)) {
            return userChoice;
        }else {
            console.log('Unkown entry.');
        }
    }
}

gameLoop();
