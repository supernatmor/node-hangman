var inquirer = require("inquirer");
var prompt = require("prompt");

var guess = "hangman";

function Word(guess) {
	this.guess = guess,
	this.array = []
}

function Letter(char){
	this.letter = char,
	this.display = "_ ",
}

var solveMe = new Word(guess);

for(var i = 0; i < solveMe.guess.length; i++){
	solveMe.gArray.push(solveMe.guess[i]);
	var letter = new Letter(solveMe.guess[i]);
}







console.log(solveMe.gArray);

