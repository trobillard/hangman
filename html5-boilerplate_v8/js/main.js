// Create an array of words
var choices = ["P", "R", "Q"];
var words = ["viking", "peaky blinder", "your honor", "stranger things", "lupin"];

  // Pick a random word
  var word = words[Math.floor(Math.random() * words.length)];


function start() {
    let playerChoice = prompt ("What would you like to do ? \nSelect one of those option. \n P=Play \n R=Rules \n Q=Quit" ).toUpperCase();
    if(playerChoice === "P") {
        return (game());
    }
    else if(playerChoice === "R") {
        alert ("Rules: \n* Play individually or in groups. \n* Select a letter of the alphabet. \n* If the letter is contained in the word you don't loose any point. \n* if not you loose a point. \n* The game continues until : you have point or the word is guessed. \n* You have only 7 points. \n* So good luck");
        return (start());
    }
    else if(playerChoice === "Q") {
        window.close();
    }
    else {
        return (start());
    }
    }


  // Set up the answer array
  function game() {
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  var remainingLetters = word.length;

  // The game loop
  while (remainingLetters > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));

    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
      // Exit the game loop
      break;
    } else if (guess.length !== 1) {
      alert("Please enter a single letter.");
    } else {
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
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
  }
  
 
  // Show the answer and congratulate the player
  start();
  
  
  