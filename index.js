var answers = ["it is certain", "it is decidedly so", "without a doubt", "Yes-definitely", "You may rely on it", "Outlook good" , "Cannot Predict now", "My reply is no", "Reply hazy, try again", "Most Likely"]

var textQuestion = document.querySelector(".question");
var textAnswer = document.querySelector(".answer");
var inputQuestion = document.querySelector(".input-question");
var btnGetAnswer = document.querySelector(".button-get-answer");
var btnClear = document.querySelector(".button-clear");
var img8Ball = document.querySelector(".img-magic-8-ball");

btnGetAnswer.addEventListener("click", getAnswer);
// btnClear.addEventListener("click",);


function displayAnswer() {
  img8Ball.classList.add("hidden");
  textQuestion.classList.remove("hidden");
  textAnswer.classList.remove("hidden");
}

function clearDisplay() {
  img8Ball.classList.remove("hidden");
  textQuestion.classList.add("hidden");
  textAnswer.classList.add("hidden");
}

function randomAnswer() {
  var index = Math.floor(Math.random() * answers.length + 1);
  var answer = answers[index];
  return answer;
  }


function getAnswer(e) {
  e.preventDefault();
  displayAnswer();
  inputQuestion.value = ""; 
  textQuestion.innerText = `"${inputQuestion.value}?"`
  textAnswer.innerText = `${randomAnswer()}`
  btnClear.classList.remove("disabled");
}

function clearAnswer() {
  clearDisplay();

}
