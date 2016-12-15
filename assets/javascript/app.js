$(document).ready(function() {

var trivia = [
	 {
	  	question: "The average person does what 13 times a day?",
	  	answerChoice: ["Laughs", "Farts", "Sneezes", "Yawns"], //answer laughs 
	  	answer: "Laughs" 	  
	},
	{
	  	answer: "Corpse",
	  	question: "In Texas it's illegal to swear in front of a what?",
	  	answerChoice: ["Dog", "Child", "Police Officer", "Corpse"] //answer corpse
	  
	}   
	  	// console.log(option.answerChoice[0]);
] //end of all questions
// console.log(trivia[0].answerChoice[3]);
var timeAllowance = 10,
	timer,
	questionCounter = 0,
	correctGuesses = 0,
	incorrectGuesses = 0,
	unanswered = 0;



function start() {
	timer = setInterval(timesUp, 1000);
}
function timesUp() {
	timeAllowance--;
	$(".timer").html("<p>Time Left: " + timeAllowance + "</p>");
	if (timeAllowance === 0) {
		// alert("Time's Up");
		stop();
	}
}
function stop() {
	clearInterval(timer);
}

function getQuestion (){
	var currentQuestion = trivia[questionCounter];
	$(".question").html(currentQuestion.question);
	$("#buttonChoice").empty();
	for (var i = 0; i < currentQuestion.answerChoice.length; i ++){
		var currentAnswer = currentQuestion.answerChoice[i];
		console.log(currentAnswer);
		$("#buttonChoice").append("<button class='btn btn-sm clicker' value='" + currentAnswer + "'>" + currentAnswer + "</button>");
	}
	stop();
	start();

}

	$("#buttonChoice").on("click", function(){
		console.log(".clicker");
		// if (($(".clicker").val("")) === trivia[questionCounter].answer && timer > 0) {
		// 	correctGuesses ++;
		// 	nextQuestion();

		// alert("You right");
		// }
		// else if (($(".clicker").attr("value"))!= trivia[questionCounter].answer && timer > 0){
		// 	// alert("you wrong");
		// 	incorrectGuesses ++;
		// 	nextQuestion();
		// }
		// else if (timer <= 0) {
		// 	unanswered ++;
		// 	nextQuestion();
		// }
		
	});


function nextQuestion () {
	questionCounter ++;
	getQuestion();
}

		


getQuestion();


});
	// $(".question").html(trivia[0].option.question);	
	// $("#button1").html(trivia[0].option.answerChoice[0]);
	// $("#button2").html(trivia[0].option.answerChoice[1]);
	// $("#button3").html(trivia[0].option.answerChoice[2]);
	// $("#button4").html(trivia[0].option.answerChoice[3]);
	
	// $("#button1, #button2, #button3, #button4").click(function (){
	// 	if (".clicker" === trivia[0].option.answer) {
	// 		alert("you wrong");
	// 	}
	// });
	// for (var i=0; i < trivia.length; i++){
// 	var currentQuestion = trivia[i];
// 	$(".question").html(trivia[i].question);

// 	for (var j=0; j < currentQuestion.answerChoice.length; j++) {
// 		var currentAnswer = currentQuestion.answerChoice[j];
// 		$("#buttonChoice").append("<button class='btn btn-sm clicker' value='" + j + "'>" + trivia[i].answerChoice[j] + "</button>");
		

// 	}
