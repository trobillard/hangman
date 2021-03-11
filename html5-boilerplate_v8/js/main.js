// Create the VAR
var words = ["viking", "peaky blinder", "your honor", "stranger things", "lupin", "ghotam", "ragnarok", "norsemen", "titans", "the rain", "the last kingdom", "family business", " spartacus", "sex education", "riverdale", "you", "the walking dead", "snow piercer", "outlander", "the witcher", "the sinner", "umbrella academy", "cobra kai", "lucifer", "homeland", "american horror story"];
var word = words[Math.floor(Math.random() * words.length)]; //random word
var playerscore = 7;

// Create the Function
    //Function rules
function rules() {
    alert ("Rules: \n* Play individually or in groups. \n* Select a letter of the alphabet (space too!). \n* If the letter is contained in the word you don't loose any point. \n* if not you loose a point. \n* The game continues until : you have point or the word is guessed. \n* You have only 7 points. \n* So good luck");
}
    //Function to start the game (option)
function start() {
    alert ("NETFLIX and the Hangman")
    alert ("NETFLIX SERIES  \n+---+\n  |       |\n  |      0\n  |     -+-\n  |       |\n  |      / \\  \n=========")
    let playerChoice = prompt ("What would you like to do ? \nSelect one of those option. \n P=Play \n R=Rules \n Q=Quit" ).toUpperCase(); 
    if(playerChoice === "P") {
        return (game());
    }
    else if(playerChoice === "R") {
        rules();
        return (start());
    }
    else if(playerChoice === "Q") {
        window.close();
    }
    else {
        return (start());
    }
    }
    //Function to launch the game
function game() {
    var answerArray = [];  //set up the answer array
  for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
  }
    var remainingLetters = word.length;
    //Game loop
while (remainingLetters > 0) {

    alert(answerArray.join(" "));

    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
    // Exit the game loop
      break;
    } 
    else if (guess.length !== 1) {
      alert("Please enter a single letter.");
    } 
    else {
      // Update the game state with the guess
      for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          remainingLetters--;
        }
      }
    }
  // The end of the game loop
  }
  // show the answer 
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
   }
  
 
   //Function to keep playing
function reStart(){
    let playerDecide = prompt("Do you wanna try one more time ? \n P=Play \n Q=Quit \n+---+\n  |       |\n  |      0\n  |     -+-\n  |       |\n  |      / \\  \n=========").toUpperCase();;
    if (playerDecide === "P"){
        return game();
  }
    else if (playerDecide=== "Q"){
        window.close();
    }
    else {
    return start();
    }
  }

  // Run the Gme
  start();
reStart();
  
