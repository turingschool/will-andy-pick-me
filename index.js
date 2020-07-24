//~~~~~buttons
var getAnswerBtn = document.querySelector('.get-answer-button');
var clearBtn = document.querySelector('.clear-button');

//~~~~~~~input field
var askQuestion = document.querySelector('.ask-question');
//~~~~~~~Images
var ballImg = document.querySelector('.ball-img')
//~~~~~~~result page
var usersQuestion = document.querySelector('.user-question');
var ballsAnswer = document.querySelector('.answer');

// user's // QUESTION:
//data model
var questionByUser = [];

var answers = [
  ' It is certain.',
  ' It is decidedly so.',
  ' Without a doubt.',
  ' Yes - definitely.',
  ' You may rely on it.',
  ' As I see it, yes.',
  ' Most likely.',
  ' Outlook good.',
  ' Yes.',
  ' Signs point to yes.',
  ' Reply hazy, try again.',
  ' Ask again later.',
  ' Better not tell you now.',
  ' Cannot predict now.',
  ' Concentrate and ask again.',
  ' Don\'t count on it.',
  ' My reply is no.',
  ' My sources say no.',
  ' Outlook not so good.',
  ' Very doubtful.'
];
//~~~~~~~EVENT LISTENERS

askQuestion.addEventListener('keydown', enableAnswerBtn);
getAnswerBtn.addEventListener('click', getAnswer);
// getAnswerBtn.addEventListener('click', displayUsersQuestion);
// getAnswerBtn.addEventListener('click', showRandomAnswer);
clearBtn.addEventListener('click', goHome);



//~~~functions
function getAnswer() {
    answersView()
    storeUsersQuestion()
    validateAnswer()
    displayUsersQuestion()
    showRandomAnswer()
}

function goHome() {
  ballImg.classList.remove('hidden');
  usersQuestion.classList.add('hidden');
  ballsAnswer.classList.add('hidden');
  getAnswerBtn.disabled = true;
  clearBtn.classList.add('hidden');
  disableAnswerButton()
}

function showRandomAnswer() {
  ballsAnswer.innerText = '';
  ballsAnswer.innerText = answers[getRandomIndex(answers)];
}

function displayUsersQuestion() {
    usersQuestion.innerText = '';
    usersQuestion.innerText += `"${questionByUser[0]}?"`;
}

function validateAnswer() {
    askQuestion.value = '';
    getAnswerBtn.disabled = true;
    askQuestion.placeholder = 'Enjoy your answer!!'
}

function storeUsersQuestion() {
  questionByUser.unshift(askQuestion.value);
}

function answersView() {
  ballImg.classList.add('hidden');
  usersQuestion.classList.remove('hidden');
  ballsAnswer.classList.remove('hidden');
  clearBtn.classList.remove('hidden');
}

function enableAnswerBtn() {
    if (askQuestion.value !== ''){
        getAnswerBtn.style.opacity = 1;
        getAnswerBtn.disabled = false;
    }
}

function disableAnswerButton() {
    if (askQuestion.value === ''){
        getAnswerBtn.style.opacity = 0.4;
        getAnswerBtn.disabled = true;
    }
}

//get random number from the array of answers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
