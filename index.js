// ~~~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~//

var answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt.",
  "Yes - definitely",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
]

var favoriteAnswers = [];

var inputForm = document.querySelector(".input-form");
var questionInput = document.querySelector("#question-input");
var submitButton = document.querySelector(".get-answer-button");
var question = document.querySelector(".question");
var answer = document.querySelector(".answer");
var answerDisplay = document.querySelector(".answer-display");
var eightBall = document.querySelector(".eight-ball");

var clearButton = document.querySelector(".clear-button")
var favoriteButton = document.querySelector(".favorite-button");
var displayFavorites = document.querySelector(".display-favorites");

// ~~~~~~~~~~~~ Event Listener ~~~~~~~~~~~//

submitButton.addEventListener("click", returnQuestion)
clearButton.addEventListener("click", clearScreen)
favoriteButton.addEventListener("click", addFavorite)

// ~~~~~~~~~~~ Functionality ~~~~~~~~~~~~~~~//


function returnQuestion() {
  if (questionInput.value) {
    eightBall.classList.add("hidden");
    answerDisplay.classList.remove("hidden");
    question.innerText = questionInput.value;
    returnRandomAnswer();
    inputForm.reset();
    clearButton.classList.remove("red");
  }
}

function returnRandomAnswer() {
  answer.innerText = answers[getRandomIndex(answers)]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function clearScreen() {
  eightBall.classList.remove("hidden");
  answerDisplay.classList.add("hidden");
  clearButton.classList.add("red");
}

function addFavorite() {
  favoriteAnswers.push(question.innerText)
  displayFavoriteAnswers();
  console.log(favoriteAnswers)
}

function displayFavoriteAnswers() {
  console.log("test")
  displayFavorites.innerHTML = favoriteAnswers;

}

function correctDisplay() {
  // for (var i =0 )
}



// rqgvr
