// There will be lots of repetition in students' code, because they don't yet have access to array and object data types.
// That's okay! Explain that if this code seems repetitive to them, they have great instincts! They can learn how to refactor 
// repetitive code using arrays and loops later on in the week.

//Part 2 - Step 1
var gryffindorScore = 0;
var slytherinScore = 0;
var hufflepuffScore = 0;
var ravenclawScore = 0;
var questionPosition = 0;

//Part 2 - Step 2
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

q1a1.addEventListener("click", gryffindor);
q1a2.addEventListener("click", slytherin);
q1a3.addEventListener("click", hufflepuff);
q1a4.addEventListener("click", ravenclaw);

// Part 2 - Step 3
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

q2a1.addEventListener("click", ravenclaw);
q2a2.addEventListener("click", gryffindor);
q2a3.addEventListener("click", slytherin);
q2a4.addEventListener("click", hufflepuff);

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

q3a1.addEventListener("click", gryffindor);
q3a2.addEventListener("click", ravenclaw);
q3a3.addEventListener("click", hufflepuff);
q3a4.addEventListener("click", slytherin);

// Part 2 - Step 2
function gryffindor() {
    gryffindorScore += 1;
    questionPosition += 1;
    // Part 3
    if (questionPosition >=3) {
      updateResult();
    }
}

// Part 2 - Step 2
function slytherin() {
    slytherinScore += 1;
    questionPosition += 1;
    // Part 3
    if (questionPosition >=3) {
      updateResult();
    }
} 

// Part 2 - Step 2
function hufflepuff() {
    hufflepuffScore += 1;
    questionPosition += 1;
    // Part 3
    if (questionPosition >=3) {
      updateResult();
    }
  }

// Part 2 - Step 2
function ravenclaw() {
    ravenclawScore += 1;
    questionPosition += 1;
    // Part 3
    if (questionPosition >=3) {
      updateResult();
    }
  }

// Part 3 - Displaying results
var result = document.getElementById("result");
 
function updateResult() {
  if (gryffindorScore >= 2) {
    result.innerHTML = "Gryffindor!";
  } else if(slytherinScore >= 2) {
     result.innerHTML = "Slytherin!";
  } else if(hufflepuffScore >= 2) {
    result.innerHTML = "Hufflepuff!";
  } else if(ravenclawScore >= 2) {
    result.innerHTML = "Ravenclaw!";
  } else {
   result.innerHTML = "Hmmm.. I'm not sure";
  }
}


// Extensions below

//Extension 2 - Restart the Quiz
var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);
                                  
function restartQuiz() {
  result.innerHTML = "Your result is..."; 
  questionPosition = 0; 
  gryffindorScore = 0;
  slytherinScore = 0;
  hufflepuffScore = 0;
  ravenclawScore = 0;
  enableQuestions(); //Part of Extension 5
}

// Extension 5 - Disable Buttons
function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
}