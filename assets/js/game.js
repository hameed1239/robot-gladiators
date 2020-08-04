var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;

//Fight function
var fight = function(){
    window.alert("Welcome to Robot Gladiators!");
};
//execute function
fight();

//subtract the value of 'playerAttack from the value of enemyHealth and use the result to update the value in the 'enemyHealth' variable
enemyHealth = enemyHealth - playerAttack;

//Log the resulting message to the console
console.log (`${playerName} attacked ${enemyName}. ${enemyName}'s health is now: ${enemyHealth}`);

//check if player want's to continue fight
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
console.log(`${promptFight}`);

//if player choses to fight, then fight
if(promptFight === "fight" || promptFight ==="FIGHT"){
    // check enemy's health
    if (enemyHealth <= 0){
        window.alert(`${enemyName} has died!`);
    }
    else{
        window.alert(`${enemyName} still has ${enemyHealth} health left.`);
    }

    //Subtract the value of 'enemyAttack from the value of playerHealth and use the result to update the value in the 'playerHealth' variable 
    playerHealth = playerHealth - enemyAttack;

    //Log the resulting message to the console
    console.log(`${enemyName} attacked ${playerName}. ${playerName}'s Health is now: ${playerHealth}`);

    // check player's health
    if (playerHealth <= 0){
        window.alert(`${playerName} has died!`);
    }
    else{
        window.alert(`${playerName} still has ${playerHealth} health left.`)
    }
}

// If player choses to skip
else if (promptFight === "skip" || promptFight === "SKIP"){
    var confirmSkip = window.confirm(`are you sure you'd like to quit?`);

    //if yes (true), leave fight
    if (confirmSkip){
        window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney-2;
    }
    else{
        fight();
    }
}
else{
    window.alert (`You need to pick a valid option. Try again!`);
}

