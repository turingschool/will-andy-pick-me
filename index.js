var userInput = document.querySelector('#user-input')
var answerButton = document.querySelector('#select-answer');
var clearButton = document.querySelector('#clear');
var eightBall = document.querySelector('#eight-ball');
var question = document.querySelector('#question');
var answer = document.querySelector('#answer');

answerButton.addEventListener('click', askQuestion);
clearButton.addEventListener('click', clearDisplayPanel);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function hide(element) {
  element.classList.add('hidden');
}

function unhide(element) {
  element.classList.remove('hidden');
}

function randomizeAnswer(array) {
  return array[getRandomIndex(array)];
}

function askQuestion(event) {
  event.preventDefault();
  hide(eightBall);
  unhide(question);
  unhide(answer);
  clearButton.classList.add('clear-enabled')
  clearButton.classList.remove('clear-disabled');
  if (userInput.value) {
    question.innerText = `"${userInput.value}"`;
    answer.innerText = randomizeAnswer(answers);
  } else {
    answer.innerText = `Please ask the magic 8 ball a question.`
  }
  userInput.value = null;
}

function clearDisplayPanel() {
  location.reload();
  return
}
