
var answers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

var questionField = document.querySelector('.question-field');
var getYourAnswer = document.querySelector('.get-answer');
var eightBall = document.querySelector('.eight-ball');
var clearButton = document.querySelector('.clear');
var reprintQuestion = document.querySelector('.reprint-question');
var response = document.querySelector('.response');

getYourAnswer.addEventListener('click', printPrediction);
clearButton.addEventListener('click', returnDefaultScreen);

function printPrediction() {
  if (questionField.value != '') {
    eightBall.classList.add('hidden');
    reprintQuestion.innerText = questionField.value;
    questionField.value = '';
    response.innerText = answers[Math.floor(Math.random() * 20)];
    clearButton.disabled = false;
    clearButton.classList.add('enabled-clear');
    clearButton.classList.remove('disabled-clear');
  }
}

function returnDefaultScreen() {
  eightBall.classList.remove('hidden');
  questionField.value = '';
  reprintQuestion.innerText = '';
  response.innerText = '';
  clearButton.disabled = true;
  clearButton.classList.add('disabled-clear');
  clearButton.classList.remove('enabled-clear');
}
