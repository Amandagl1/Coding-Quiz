var array1 = [
    // Correct answer: "2. alerts"
    "1. strings",
    "2. alerts",
    "3. numbers",
    "4. boolean"
];

// Contains the first set of questions.
var p1 = document.getElementById("p1");
var firstOl = document.getElementById("first-ol");

// Variables that display content as visible or hidden.
var hidden1 = document.getElementById("hide-title");

// The variable startQuiz was created by selecting the first item in the 'button' index.
startQuiz.addEventListener("click", function() {

    var firstH2 = document.createElement("h2");
    firstH2.textContent = "Commonly used datatypes DO NOT include: "
    p1.append(firstH2);

    array1.forEach(function(event){
        var set1 = document.createElement("button");
        set1.textContent = event;
        firstOl.appendChild(set1);

   })
   p1.setAttribute("style", "display: block");
   hidden1.setAttribute("style", "display: none");

});

// var correct1 = 
// // Selecting the second ordered list in the HTML.
// var secondOl = document.getElementById("second-ol");

// correct1.addEventListener("click", function() {
//     var secondH2 = document.createElement("h2");
//     secondH2.textContent = "The condition in an if / else statement is enclosed within __________."
//     p2.append(secondH2);
    
//     array2.forEach(function(event){
//     var set2 = document.createElement("button");
//     set2.textContent = event;
//     secondOl.appendChild(set1);

//    })
//    p2.setAttribute("style", "display: block");
//    p1.setAttribute("style", "display: none");

// });