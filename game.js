var config = {
  apiKey: "AIzaSyADXCrGrXF0amYl3HSe2OptYBWHct37vmE",
  authDomain: "rpsmultiplayer-5da06.firebaseapp.com",
  databaseURL: "https://rpsmultiplayer-5da06.firebaseio.com",
  projectId: "rpsmultiplayer-5da06",
  storageBucket: "rpsmultiplayer-5da06.appspot.com",
  messagingSenderId: "554308902839"
};
firebase.initializeApp(config);

var database = firebase.database(); 

var wins = 0;
var losses = 0;
var ties = 0;

document.onkeyup = function(event) {

  var userGuess = event.key;


  if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
    if ((userGuess === "r") && (computerGuess === "s")) {
      wins++;
    } else if ((userGuess === "r") && (computerGuess === "p")) {
      losses++;
    } else if ((userGuess === "s") && (computerGuess === "r")) {
      losses++;
    } else if ((userGuess === "s") && (computerGuess === "p")) {
      wins++;
    } else if ((userGuess === "p") && (computerGuess === "r")) {
      wins++;
    } else if ((userGuess === "p") && (computerGuess === "s")) {
      losses++;
    } else if (userGuess === computerGuess) {
      ties++;
    }

    var html =
      "<p id = 'guess' >You chose: " + userGuess + "</p>" +
      "<p id = 'compGuess' >The computer chose: " + computerGuess + "</p>" +
      "<p id = 'wins' >wins: " + wins + "</p>" +
      "<p id = 'losses' >losses: " + losses + "</p>" +
      "<p id = 'ties' >ties: " + ties + "</p>";

    $("#game").html(html);
  }


  $()

  

};