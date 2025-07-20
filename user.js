// user input
//  const prompt = require("prompt-sync")({sigint: true})
// var a=10;
//  var b = parseInt(prompt("enter your number: "))

// guess the number
// consol.log please enter 1 to 100
// step 1 sn=50
// while in
// while (true){}
// prompt
// prompt == sn break
// prompt > msg your guess is High
// prompt > msg your guess is low

const prompt = require("prompt-sync")({ sigint: true })
console.log("please, Guess between 1 to 100");
var sn = 50
while (true) {
    var userInput = parseInt(prompt("enter the number: "))
    if (userInput == sn) {
        console.log("you win cash rs 10000");
        break;
    }
    else if (userInput > sn) {
        console.log("your guess is too high");
    }
    else if (userInput < sn) {
        console.log("your guess is too low");
    }

}