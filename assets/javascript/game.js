$( document ).ready(function(){

var	magicNumber = Math.floor(Math.random()*(120-19)+19);
var	garnetCrystal = Math.floor(Math.random()*12)+1;
var	diamondCrystal = Math.floor(Math.random()*12)+1;
var	emeraldCrystal = Math.floor(Math.random()*12)+1;
var	tanzaniteCrystal = 	Math.floor(Math.random()*12)+1;
var userScore = 0;
var wins = 0;
var losses = 0;

startGame()

function startGame() {
	magicNumber = Math.floor(Math.random()*(120-19)+19);
	$("#magic-number").text(magicNumber);
    $("#magic-number").attr("class", "score")
    userScore = 0;
    $("#user-score").text(userScore);
    $("#user-score").attr("class", "score")
    garnetCrystal = Math.floor(Math.random()*12)+1;
	diamondCrystal = Math.floor(Math.random()*12)+1;
	emeraldCrystal = Math.floor(Math.random()*12)+1;
	tanzaniteCrystal = 	Math.floor(Math.random()*12)+1;
	$("#wins").text("WINS: " + wins);
	$("#losses").text(" | LOSSES: " + losses);

	logGame();
};

$("#garnet-crystal").on("click", function() {
	userScore = userScore + garnetCrystal;
	$("#user-score").text(userScore);

	if (userScore == magicNumber){
          youWin();

        }
        else if ( userScore > magicNumber){
          youLose();

        }
});

$("#diamond-crystal").on("click", function() {
	userScore = userScore + diamondCrystal;
	$("#user-score").text(userScore);

	if (userScore == magicNumber){
          youWin();

        }
        else if ( userScore > magicNumber){
          youLose();

        }
});

$("#emerald-crystal").on("click", function() {
	userScore = userScore + emeraldCrystal;
	$("#user-score").text(userScore);

	if (userScore == magicNumber){
          youWin();

        }
        else if ( userScore > magicNumber){
          youLose();

        }
});

$("#tanzanite-crystal").on("click", function() {
	userScore = userScore + tanzaniteCrystal;
	$("#user-score").text(userScore);

	if (userScore == magicNumber){
          youWin();
        }
        else if ( userScore > magicNumber){
          youLose();

        }
});

function youWin() {
	alert("You Won! Great Job!")
	wins++;
	$("#wins").text("WINS: " + wins);
	startGame();
}

function youLose() {
	alert("You Lost! Try Again!");
	losses++;
	$("#losses").text("LOSSES: " + losses);
	startGame();

}


function logGame() {
console.log("Game #" + (wins + losses + 1))
console.log(magicNumber);
console.log(garnetCrystal);
console.log(diamondCrystal);
console.log(emeraldCrystal);
console.log(tanzaniteCrystal);
}

});