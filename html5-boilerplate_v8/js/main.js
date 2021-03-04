//TODO
//-Quand l’utilisateur arrive sur la page index.html le jeu démarre
//-Par défaut l’ordinateur choisit un mot au hasard dans une liste et affiche au joueur le mot à deviner 
//sous forme de underscores.
//-Le joueur peut rentrer une lettre
//-L’ordinateur vérifie qu’une seule lettre a été rentrée et si cette lettre est présente dans le mot, 
//remplace tous les underscores correspondant par la lettre avant de d’afficher à nouveau le mot. 
//Si la lettre n’était pas présente le joueur perd un point
//-Le joueur démarre à 7 point, s’il arrive à zéro, il a perdu, s’il trouve toutes les lettres du mot avant, il a gagné

//VAR
var choices = ["P","R","Q"];
var wordList = ["viking", "peaky blinder", "your honor", "stranger things", "lupin"];
var targetWord = ""
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//LETTERS
const letters = "abcdefghijklmnopqrstuvwxyz"

//FUNCTIONS
function start() {
    let playerChoice = prompt ("What would you like to do ? \nSelect one of those option. \n P=Play \n R=Rules \n Q=Quit" ).toUpperCase();
    if(playerChoice === "P") {
        alert ("Game Start");
    }
    else if(playerChoice === "R") {
        alert ("Rules: \n* Play individually or in groups. \n* Select a letter of the alphabet. \n* If the letter is contained in the word you don't loose any point. \n* if not you loose a point. \n* The game continues until : you have point or the word is guessed. \n* You have only 7 points. \n* So good luck");
    }
    else if(playerChoice === "Q") {
        window.close();
    }
    else {
        return (start());
    }
    }
    
    function generateWord() {
        // Generate a random number bewteen 0 and 2 matching an index in the choices array
        let randomWord = Math.floor(Math.random() * (wordList.length));
        return wordList[randomWord];
      }


    //GAME
    start();
    generateWord();

    


    function playerLetter() {
        do {
          var letter = prompt("Choose a letter ".toLowerCase());
        }
        while (!lettes.includes(letter));
        return letter;
      }
      playerLetter()

    