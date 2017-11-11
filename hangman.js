var inquirer = require("inquirer");

var guess = "hangman";
var missed = 0;
var word;
var letter;

function Word(guess) {
    this.guess = guess,
    this.array = [],
    this.blanks = []
}

function Letter(char) {
    this.input = char,
    this.match = false,
    this.wrong = []

}

//calling this function creates word to be guessed
function buildWord() {
    word = new Word(guess);
    console.log(word.guess);

    for (var i = 0; i < word.guess.length; i++) {
        word.array.push(word.guess[i]);
        word.blanks.push("_ ");
    }
    console.log(word.array);
    console.log(word.blanks);

    getLetter();
}

//calling this function prompts user input and checks letter against word
function getLetter() {
	inquirer.prompt([{name: "input", message: "Pick a letter..."}]).then(function(response){
		letter = new Letter(response);
		console.log(letter.input.input);
		checkLetter();
	})
}

//calling this function checks user input against word array
function checkLetter() {
	for(var i = 0; i<word.array.length; i++){
		if(letter.input.input === word.array[i]){
			letter.match = true;//stops wrong count
			word.blanks[i] = letter.input;//change display of matched letter
		}
	}

	//if letter doesn't match any letters in word, run this
	if(letter.match == false){
		letter.wrong++;//increments missed counter
		letter.wrong.push(letter.input)//push incorrect letter to array

		if(letter.wrong>4){//loss condition
			console.log("You lose, try again...");
			return;
		}
	}
	console.log("You got one!! Go again!");
	getLetter();//recursive function call to keep prompt running
}


//calling this function runs the game
function run(){
	buildWord();
}

buildWord();