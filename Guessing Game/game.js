//create secret number
var secretNumber = 5;
//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
//check guess
if (guess === secretNumber) {
    alert("You got it right!");
}
else if (guess < secretNumber) {
    alert("Too low, try again!");
    location.reload();
}
else{
    alert("Too high, try again!");
    location.reload();
}