// Setting counter using Time Interval
var timeEl = document.querySelector(".time");
var mainEl = document.querySelector("main");

var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
    
        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        // Stops coding quiz and sends message.
        sendMessage();

    }

 }, 1000);
}

// Function that sends message once timer reaches 0 seconds.
function sendMessage() {
    // Add function to concatenate score at the end of text
    timeEl.textContent = "Out of time! Your score is ";
    var h1El = document.createElement("h1");
    mainEl.appendChild(h1El);

}

//-----Start Quiz Button-----//

var btn = document.querySelectorAll("button");
var startQuiz = btn[0]

// When user clicks the 'Start Quiz' button, it will call the set Time function and start a countdown from 75 seconds.
startQuiz.addEventListener("click", setTime);
// Styling 'Start Quiz' button.
startQuiz.setAttribute("style", "padding: 10px; border: none; font-size: 18px; background-color: #330582; color: #fff");


//-----Variables for each question-----//


// var question1 = {
//   questionText: "Commonly used datatypes DO NOT include: ",
//     choices: [
//       // Correct answer is "2. alerts"
//       "1. strings",
//       "2. alerts",
//       "3. numbers",
//       "4. boolean"
//     ],
//     correctChoices: [1],
// }

// var question2 = {
//     questionText: "The condition in an if / else statement is enclosed within __________.",
//     choices: [
//       // Correct answer is "3. parentheses"
//       "1. quotes",
//       "2. curly brackets",
//       "3. parentheses",
//       "4. square brackets"
//     ],
//     correctChoices: [2],
// }

// //----------//
// questionArray = [
//     question1,
//     question2,
//     // question3,
//     // question4,
//     // question5
// ];


//-----Displaying questions content-----//

// Starts quiz when button is clicked
startQuiz.addEventListener("click", displayContent);

// Function to set display from none to visible
var sectionEl = document.querySelectorAll("section")
var titleEl = sectionEl[0]
var questionContainerEl = sectionEl[1]

// Hides the title page by adding the class "hidden"
// Removes "hidden" class from the first section
function displayContent() {
    titleEl.classList.add("hidden");
    questionContainerEl.classList.remove("hidden");
    
    var correctAnswer = document.querySelectorAll(".correct")
    var wrongAnswer = document.querySelectorAll(".wrong")
    var answerStatus = document.getElementById("answer-status")
    if(correctAnswer) {
        answerStatus.textContent = "Correct!"
    };
    if(wrongAnswer) {
        answerStatus.textContent = "Wrong"
    }
};
    
// Creating a 'p' element for one question
function displayQuestion(questionInput) {
    var questionTextEl = document.getElementById("question-text");
    questionTextEl.textContent = questionInput.questionText

};

function nextQuestion() {

}


//-----Button Styling-----//

// Styling all buttons on webpage
var btn = document.querySelectorAll("button");
for (var i = 1; i < btn.length; i++) {
    btn[i].setAttribute("style", "background-color: #330582; color: #fff; margin: 2px");
}

var styleSubmitEl = document.getElementById("submit")
styleSubmitEl.setAttribute("style", "background-color: #330582; color: #fff; margin: 2px");

//-----Submit Initials-----//
// Submit button after user inputs their initials.
var submitEL = document.getElementById("submit-initials");
var submitBtnEl = document.getElementById("submit-btn");
var inputedInitials = document.getElementById("input-data")
// Storing initials in local storage
var initials = document.getElementById("stored-data");
var displayInitials = localStorage.getItem("initials");
var highscoreSection = document.querySelector("highscore")


// Function to store
function submitInitials(e) {
    // Prevents default action of refreshing the page
    e.preventDefault();
    var inputedInitials = "".valueOf;
    submitEL.textContent = inputedInitials;
    highscoreSection.classList.remove("hidden");

    localStorage.setItem()
}
