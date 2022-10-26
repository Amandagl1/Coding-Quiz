// Setting counter using Time Interval
var timeEl = document.querySelector(".time");
var mainEl = document.querySelector("main");

var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "remaining";
    
        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        // Stops coding quiz and sends message.
        sendMessage();
    }

 }, 7500);
}

// Function that sends message once timer reaches 0 seconds.
function sendMessage() {
    timeEl.textContent = "Out of time! Your score is ";
}

// generateBtn.startQuiz.addEventListener("click", setTime);


var btn = document.querySelectorAll("button");

// Styling 'Start Quiz' button.
btn[0].setAttribute("style", "font-size: 18px; padding: 10px; background-color: #8906b1; color: #fff");

var styleOl = document.querySelectorAll("li");
// styleOl.style.color = "#8906b1";

for (var i = 0; i < styleOl.length; i++) {
    styleOl[i].setAttribute("style", "color: #330582");
}

var liEl = document.getElementById("ol");

// var pTag = document.querySelectorAll(".p-ol");

// Submit button after user inputs their initials.
var submitEL = document.getElementById("submit-initials");

function submitInitials(event) {
    // Prevents default action
    event.preventDefault();
    var inputedInitials = // user input
    submitEL.textContent = inputedInitials
}

// When user clicks submit, they will be taken to the page of the highscores.
submitEL.addEventListener("click", submitInitials);

