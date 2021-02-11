var startButton = document.querySelector('#start');
timerElement = document.querySelector('.timer-count');
var timerCount = 60;
var scoreEl = document.querySelector('#score');
var yourScore = document.querySelector('#yourScore')
var score = 0;
var increament = 5;
var currentQuestionIndex = 0;
var Message = document.querySelector('p')
var submitBtn = document.querySelector('#submitBtn')
var initials = document.querySelector('#initials')
var questions = [
    {
        question: "Which of the following countries is the largest by area?",
        answers: ['Brazil', 'Canada', 'India', 'China'],
        correctAnswer: 'Canada'
    },
    {
        question: "Which of the following countries is not in the Southern Hemisphere?",
        answers: ['Australia', 'South Africa', 'South Corea', 'Peru'],
        correctAnswer: 'South Corea'
    },
    {
        question: "Which of the following countries is not part of Africa?",
        answers: ['Yemen', 'Egypt', 'Nigeria', 'Sudan'],
        correctAnswer: 'Yemen'
    },
    {
        question: "Which of the following cities is the capital of California?",
        answers: ['Los Angeles', 'Sacramento', 'San Francisco', 'Palo Alto'],
        correctAnswer: 'Sacramento'
    },
    {
        question: "How many islands are located in the Bahamas?",
        answers: ['455', '622', '500', '700'],
        correctAnswer: '700'
    },

];










// timer for the questions
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      
    }, 1000);
}




// this function lanches the timer and the quiz
function lunchQuiz() {
    startTimer();
    lunchQuestion();
}


function lunchQuestion() {
    //stops the game when all are asked or timer is 0
    if (currentQuestionIndex >= 5 || timerCount === 0) {
        clearInterval(timer)
        gameEnds()
        return
    }
    
    //makes the questions apear
    document.querySelector('#game-area').style.display = "block";
    //grab the elments from the html and inserts the questions and responses with the questions index 
    var questionEl = document.getElementById('question')
    questionEl.textContent = questions[currentQuestionIndex].question;

    var firstAnswerEl = document.getElementById('first');
    firstAnswerEl.textContent = questions[currentQuestionIndex].answers[0];

    var secondAnswerEl = document.getElementById('second');
    secondAnswerEl.textContent = questions[currentQuestionIndex].answers[1];

    var thirdAnswerEl = document.getElementById('third');
    thirdAnswerEl.textContent = questions[currentQuestionIndex].answers[2];

    var fourthAnswerEl = document.getElementById('fourth');
    fourthAnswerEl.textContent = questions[currentQuestionIndex].answers[3];
    //puts the correct answer in a var
    var correctAnswerEl = questions[currentQuestionIndex].correctAnswer
    console.log(correctAnswerEl);
    
    //saves the cklicked answer and compare it the the correct answer and lunch  the correct or wrong function
    document.querySelector('ul').onclick = e => {
        console.log(e.target.innerText); 
        var answerEl = e.target.innerText;
        if (answerEl === correctAnswerEl){
            correctAnswer();
        }else{
            wrongAnswer();
        }
    } 
   
    // increase the score by  one, increase the question index by one to lunch the next question. shows a message 'correct answer'
    function correctAnswer() {
        score++
        currentQuestionIndex++
        Message.textContent = 'Correct answer!'
      
        lunchQuestion()
    }
    
    //decrease the time by 5. increase the question index. message 'wrong answer'.lunch next question
    function wrongAnswer() {
        timerCount -= increament
        currentQuestionIndex++
        var Message = document.querySelector('p')
        Message.textContent = 'Wrong answer!'
        lunchQuestion()
    }
}

//stops the timer.hide the last question. registers the score. display the score
function gameEnds(){
    clearInterval(timer)
    document.querySelector('#game-area').style.display = "none";
    scoreEl.textContent = score;
    yourScore.style.display = 'block'
    
    document.querySelector('#submit').style.display = 'block'
}

// store the scors in the local storage with the initials of the player. and display all previus scores.
function storeScore(){
    var userInitials = initials.value
    var records = localStorage.getItem('score') + '<br>' + (userInitials + ' ' + score)
    localStorage.setItem('score',records)
    scoreEl.innerHTML = records;
    yourScore.style.display = 'block'
}
submitBtn.addEventListener('click', storeScore)
startButton.addEventListener("click", lunchQuiz);
