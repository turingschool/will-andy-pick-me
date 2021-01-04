// ⤵ variables
var answerButton = document.querySelector('.answer-button');
var clearButton = document.querySelector('.clear-button');
var eightBall = document.querySelector('.eight-ball');
var answer = document.querySelector('.the-answer');
var eightBallAnswers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];


// ⤵ event listeners
answerButton.addEventListener('click', showRandomAnswer);


// ⤵ functions
function getRandomEightBallAnswer(array) {
  var random = array[Math.floor(Math.random() * array.length)];

  console.log(random);
  return random;
};

function showRandomAnswer() {
  eightBall.classList.add('hidden');
  answer.classList.remove('hidden');
  answer.innerText = (`${getRandomEightBallAnswer(eightBallAnswers)}`)
}
