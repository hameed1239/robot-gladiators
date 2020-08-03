var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    window.alert("Welcome to Robot Gladiators!");
};
//execute function
fight();

//subtract the value of 'playerAttack from the value of enemyHealth and use the result to update the value in the 'enemyHealth' variable
enemyHealth = enemyHealth - playerAttack;

//Log the resulting message to the console
console.log (`${playerName} attacked ${enemyName}. ${enemyName}'s health is now: ${enemyHealth}`);

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

