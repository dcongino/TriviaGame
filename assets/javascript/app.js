var right = 0;
var wrong = 0;
var timeCounter;
var timeAmount = 10;
var count = 0;
var questions = [{
    "question": "What does the 'J' in David J. Matthews stand for ?",
    "option1": "Jeff",
    "option2": "John",
    "option3": "Jerry",
    "option4": "Jack",
    "answer": "option2"
},
    {
    "question": "What is the name of Dave Matthews Band's drummer ?",
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
    "answer": "option3"
}, {
    "question": "In what country was Dave Matthews born ?",
    "option1": "United States",
    "option2": "England",
    "option3": "Australia",
    "option4": "South Africa",
    "answer": "option4"
}];

$("#gameHolder").hide();
$("#endGame").hide();

$("#startButton").click(function() {startGame()});

$("#answer1").on("click", function() { buttonClick("option1") });
$("#answer2").on("click", function() { buttonClick("option2") });
$("#answer3").on("click", function() { buttonClick("option3") });
$("#answer4").on("click", function() { buttonClick("option4") });


//Timer in this function
function startGame() {
    timeCounter = setInterval(timer, 1000);
    $("#gameHolder").show();
    $("#startDiv").hide();
    nextQuestion ();
}
//Hide startDiv upon click
function nextQuestion() {
    $("#questionResponse").html(" ");
    if(count > questions.length - 1){
        clearInterval(timeCounter);
        $("#endGame").show();
        $("#gameHolder").hide();
        
        if (right >= wrong){
            document.getElementById("resultImage").src = "assets/images/Davefeet.gif";
            $("#resultText").html("Great DMB fan!");
        }
        else {
            document.getElementById("resultImage").src = "assets/images/Daveeye.gif";
            $("#resultText").html("Come on, be a better fan!");
        }
    }
    else {
        timeAmount = 10;
        timer();
        $("#question").html((questions[count])["question"]);
        $("#answer1").html((questions[count])["option1"]);
        $("#answer2").html((questions[count])["option2"]);
        $("#answer3").html((questions[count])["option3"]);
        $("#answer4").html((questions[count])["option4"]);
    }
}

function timer() {
    $("#timeRemaining").html(timeAmount);
    timeAmount--;
    if (timeAmount < -1)
    {
        count++;
        wrong++;
        setTimeout(nextQuestion, 2000);
    }
}

//When buttons are clicked run this function
function buttonClick(button) {
    if(button == (questions[count])["answer"]){
        count++;
        right++;
        $("#questionResponse").html("You are correct!")
        $("#amountCorrect").html(right);
        setTimeout(nextQuestion, 1000);
    } 
    else{
        count++;
        wrong++;
        $("#questionResponse").html("You are incorrect.")
        $("#amountIncorrect").html(wrong);
        setTimeout(nextQuestion, 1000);
    }   
}
