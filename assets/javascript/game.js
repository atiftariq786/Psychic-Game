var randomLetter= "k";
var wins=0;
var losses=0;
var guessLeft = 10;
var yourGuesses = [];

function resetGame (){

    guessLeft = 10;
    yourGuesses = [];
    randomLetter = "M";
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
            //randomLetter generate
            resetGame();
        } 


    }



    console.log("userKey: "+userKey );
    console.log("wins:"+ wins);
    console.log("losses:" + losses);
    console.log("guessLeft: " + guessLeft);
    console.log("randomletter: " + randomLetter);
    console.log("yourguesses: " + yourGuesses);


}

















