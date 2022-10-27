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
    h1El.setAttribute("style", "background-color: red; color: #fff");
    mainEl.appendChild(h1El);

}

//----------

var btn = document.querySelectorAll("button");
var startQuiz = btn[0]

// Styling 'Start Quiz' button.
startQuiz.setAttribute("style", "padding: 10px; border: none; font-size: 18px; background-color: #330582; color: #fff");

//----------

var array1 = [
    // Correct answer: alerts
    "strings",
    "boolean",
    "alerts",
    "numbers"
];

var ol = document.getElementById("first-ol");
var p1 = document.getElementById("p1");

// The variable startQuiz was created by selecting the first item in the 'button' index.
startQuiz.addEventListener("click", function() {

    
    var h2El = document.createElement("h2");
    h2El.innerText = "Commonly used date types DO NOT include:";
    p1.append(h2El);

    array1.forEach(function(event){
        var li = document.createElement("li");
        li.innerText = event;
        ol.append(li);
    })

});

// var liEl = document.querySelectorAll("li");
// for (var i = 0; i < liEl.length; i++) {
//     liEl[i].setAttribute("style", "color: #330582");
// }



//----------

function correctBtn() {
    // var right = "Correct!"
    // var wrong = "Wrong"
    var pTag = document.querySelectorAll(".p-ol");

    for (var i = 0; i < pTag.length; i++);

    if(data-choice === "Correct!") {
        addEventListener("click", pTag[i])
    }

}

// Submit button after user inputs their initials.
var submitEL = document.getElementById("submit-initials");

function submitInitials(event) {
    // Prevents default action of refreshing the page
    event.preventDefault();
    var inputedInitials = // user input
    submitEL.textContent = inputedInitials
}

// When user clicks the 'Start Quiz' button, it will call the set Time function and start a timer countdown.
startQuiz.addEventListener("click", setTime);
// When user clicks submit, they will be taken to the page of the highscores.
submitEL.addEventListener("click", submitInitials);

