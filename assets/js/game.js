// Creates a fight

const playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerDamage = 10;

console.log(playerName, playerHealth, playerDamage);

const enemyName = 'Roborto';
let enemyHealth = 50;
let enemyDamage = 12;

const fight = function() {
// Alert players they are starting the round
window.alert('Welcome to Robot Gladiators!');

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerDamage;

// Log a resulting message to the console so we know that it worked.
console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyDamage;

// Log a resulting message to the console so we know that it worked.
console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);
};

fight();