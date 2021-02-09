var startButton = document.querySelector('#start')
var firstQuestion = document.getElementById('first');
var secoundQuestion = document.getElementById('secound');
var thirdQuestion = document.getElementById('third');
var falseButton = document.getElementsByClassName('false')
var trueButton = document.getElementsByClassName('true')

var question = document.querySelectorAll('.question')
var score = 0;

secoundQuestion.style.display = "block"
thirdQuestion.style.display = "block"


function lunchQuiz() {
   firstQuestion.style.display = "block";
}


trueButton.addEventListener('click', correctAnswer); 
falseButton.addEventListener('click', wrongAnswer)


function correctAnswer() {
    score++
    console.log(document.getElementById('first'))
}

function wrongAnswer() {
    
}

// lunchQuestion();

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

startButton.addEventListener("click", lunchQuiz);