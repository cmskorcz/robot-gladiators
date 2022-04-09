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

let randomNumber = function(min, max) {
    let value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

const fight = function(enemyName) {

    while(playerHealth > 0 && enemyHealth > 0) {

        let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

        // Check promptFight response
    
        if (promptFight === 'SKIP' || promptFight === 'skip') {
            let confirmSkip = window.confirm("Are you sure you'd like to quit?")
    
            if (confirmSkip) {
                playerMoney = Math.max(0, playerMoney - 10);
                window.alert(`${playerName} has chosen to skip the fight!`);
                console.log(`${playerName, playerMoney}`)
                break;
            } else {
                fight();
            }
        };

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        var damage = randomNumber(playerDamage - 3, playerDamage);
        enemyHealth = Math.max(0, enemyHealth - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

        // Check enemy's health

        if (enemyHealth <= 0) {
            window.alert(`${enemyName} has died!`);
            break;
        } else {
            window.alert(`${enemyName} still has ${enemyHealth} health remaining.`);
        };

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        var damage = randomNumber(enemyDamage - 3, enemyDamage);
        playerHealth = Math.max(0, playerHealth - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);

        // Check player health

        if (playerHealth <=0) {
            window.alert(`${playerName} has died!`);
            break;
        } else {
            window.alert(`${playerName} still has ${playerHealth} health remaining.`);
        }
    }   
};

const startGame = function() {

    playerHealth = 100;
    playerDamage = 10;
    playerMoney = 10;

    for(let i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert(`Welcome to Robot Gladiators! Round ${i + 1}`);
         
            let pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            
            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1) {
                let confirmShop = window.confirm("The fight is over, visit the store before the next round?");

                if (confirmShop) {
                    shop();
                }
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    };
    endGame();
};

const endGame = function() {
    window.alert("The game has now ended. Let's see how you did!")

    if(playerHealth > 0) {
        window.alert(`Great job, you've survived the game! You now have a score of ${playerMoney}.`);
    } else {
        window.alert("You've lost your robot in battle.")
    }

    let playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

const shop = function() {
    let shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch(shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money.")
            }
            break;

        case "UPGRADE":    
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerDamage = playerDamage + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money.")
            }
            break;
            
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store");
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }   
};

startGame();