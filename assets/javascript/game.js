var randomLetter= generateLetter();
var wins=0;
var losses=0;
var guessLeft = 10;
var yourGuesses = [];


function generateLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}





function resetGame (){

    guessLeft = 10;
    yourGuesses = [];
    randomLetter = generateLetter();
    
}


document.onkeyup = function(input) {
    var userKey = input.key.toLowerCase();

    //check userKey matches random letter
    //if match than wins increment and generate randomLetter(New Game).

    if (userKey === randomLetter){
        wins += 1;
        //generate randomLetter
        resetGame();
    }


    /* 1. guesses > 0 than push letter in         yourGuesses.
        2.decrement guesses left.
        3. wait for user input.
        4. else guesses <= 0 than losses increment  and generate randomLetter(New Game)
     
        */
     else {
          if(guessLeft > 0 ) {
           yourGuesses.push(userKey); 
           guessLeft -= 1;
          
          }
          
        else {
            losses += 1;
            resetGame();
        } 


    }

    document.getElementById("yourGuesses").innerHTML = yourGuesses
    document.getElementById("wins").innerHTML = wins
    document.getElementById("losses").innerHTML = losses
    document.getElementById("guessesLeft").innerHTML = guessLeft

}

















