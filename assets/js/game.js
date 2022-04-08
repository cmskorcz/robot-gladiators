// Creates a fight

const playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerDamage = 10;
let playerMoney = 10;

console.log(playerName, playerHealth, playerDamage);

const enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
let enemyHealth = 50;
let enemyDamage = 12;

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

const fight = function(enemyName) {
    // Alert players they are starting the round
    window.alert('Welcome to Robot Gladiators!');

    let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    // Check promptFight response

    if (promptFight === 'FIGHT' || promptFight === 'fight') {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerDamage;

        // Log a resulting message to the console so we know that it worked.
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

        // Check enemy's health

        if (enemyHealth <= 0) {
            window.alert(`${enemyName} has died!`);
        } else {
            window.alert(`${enemyName} still has ${enemyHealth} health remaining.`);
        };

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyDamage;

        // Log a resulting message to the console so we know that it worked.
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);

        // Check player health

        if (playerHealth <=0) {
            window.alert(`${playerName} has died!`);
        } else {
            window.alert(`${playerName} still has ${playerHealth} health remaining.`);
        };
    } else if (promptFight === 'SKIP' || promptFight === 'skip') {
        let confirmSkip = window.confirm("Are you sure you'd like to quit?")

        if (confirmSkip) {
            playerMoney = playerMoney - 2;
            window.alert(`${playerName} has chosen to skip the fight!`);
        } else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    };    
};

for(let i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
};