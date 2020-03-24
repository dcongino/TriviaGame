//Create an array of question objects that hold your trivia questions 
var questions = [{
    "question": "What does the 'J' stand for in David J. Matthews ?",
    "option1": "Jeff",
    "option2": "John",
    "option3": "Jerry",
    "option4": "Jack",
    "answer": "option2"  
}, {
    "question:": "What is the name of Dave Matthews Band's drummer ?",
    "option1": "Carter Beauford",
    "option2": "Carter Banks",
    "option3": "Banks Carter",
    "option4": "Joe Carter",
    "answer": "option1"
}, {
    "question": "What is the name of Dave Matthews Band's FIRST recorded album ?",
    "option1": "Two Step",
    "option2": "Remember Two Things",
    "option3": "Crash",
    "option4": "Away From the World",
    "answer": "option2"
}, {
    "question": "Who is the Dave Matthews Band's saxophonist who died tragically in 2008 ?",
    "option1": "Stefan Lessard",
    "option2": "Jeff Coffin",
    "option3": "Leroi Moore",
    "option4": "Boyd Tinsley",
    "answer": "option4",
}, {
    "question": "In what country was Dave Matthews born ?",
    "option1": "United States",
    "option2": "England",
    "option3": "Australia",
    "option4": "South Africa",
    "answer": "option4",
}];

$("#answer1").on("click", function(){buttonClick("option1")});
$("#answer2").on("click", function(){buttonClick("option2")});
$("#answer3").on("click", function(){buttonClick("option3")});
$("answer4").on("click", function(){buttonClick("option4")});

//Create a variable to hold the time interval once the question begins
var showQuestion;

//Count will keep track of the index of the displayed questions
var count = 0;

//Create start button to initialize trivia game
$("#startButton").click(function() {
//run the startQuestions function here
});

//Timer in this function
function startGame() {
//Show gameholder div upon click
//Hide startDiv upon click

}

$("#doneButton").click(function() {
//run the stopQuestions function here
});

//This function will replace display whatever image it's given in in the 'src' attribute of the image tag
function displayImage() {
    $("#image-holder").html("<img src=" + questions[count] + "width = '400px'>");
}

function nextQuestion() {
//Replace the question in the question-holder div with the question in the array at position count

//Replace the button text with new answers
}

function buttonClick(buttonAttribute){
//Check the element at count, compare it's attribute with buttonAttribute, if they are the same, it's correct.

//nameOfTopArray[1].element("question")

//Increment Count

//If count is the same as the length of the question array, end the game
//Else, call nextQuestion after timer
}

//Use showQuestion to hold the setInterval to run nextQuestion
function startQuestions() {


}

function stopQuestions() {


}