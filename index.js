var answers = ["it is certain", "it is decidedly so", "without a doubt", "Yes-definitely", "You may rely on it", "Outlook good" , "Cannot Predict now", "My reply is no", "Reply hazy, try again", "Most Likely"]

var textQuestion = document.querySelector(".question");
var textAnswer = document.querySelector(".answer");
var inputQuestion = document.querySelector(".input-question");
var btnGetAnswer = document.querySelector(".button-get-answer");
var img8Ball = document.querySelector(".img-magic-8-ball");


btnGetAnswer.addEventListener("click", getAnswer);

function displayAnswer() {
  img8Ball.classList.add("hidden");
  textQuestion.classList.remove("hidden");
  textAnswer.classList.remove("hidden");
}

function randomAnswer() {
  var index = Math.floor(Math.random() * answers.length + 1);
  var answer = answers[index];
  return answer;
  }


function getAnswer(e) {
  e.preventDefault();
  displayAnswer();
  textQuestion.innerText = `"${inputQuestion.value}?"`
  textAnswer.innerText = `${randomAnswer()}`
}
