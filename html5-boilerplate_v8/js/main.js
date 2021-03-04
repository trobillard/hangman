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
var wordList = ["Viking", "Peaky Blinder", "Your Honor", "Stranger things", "Lupin"];
var targetWord = ""

//LETTERS
const letters = "abcdefghijklmnopqrstuvwxyz"

//GAME START
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
    
    start();

    function newWord () {
        targetWord = wordList[Math.random() * wordList.length];
    }

    newWord ()