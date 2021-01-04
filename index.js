var answers = [
'It is certain.',
'It is decidedly so.',
'Without a doubt.',
'Yes - definitely.',
'You may rely on it.',
'As I see it, yes.',
'Most likely.',
'Outlook good.',
'Yes.',
'Signs point to yes.',
'Reply hazy, try again.',
'Ask again later.',
'Better not tell you now.',
'Cannot predict now.',
'Concentrate and ask again.',
"Don't count on it.",
'My reply is no.',
'Outlook not so good.',
'Very doubtful.'
]


var eightBall = document.querySelector('.eight-ball')
var answerButton = document.querySelector('.answer-button')
var clearButton = document.querySelector('.clear')
var text = document.querySelector('h2')
var inputText = document.querySelector('input')

// var = document.querySelector()
// var = document.querySelector()

answerButton.addEventListener('click', returnAnswer)
clearButton.addEventListener('click', clearAnswer)

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function returnAnswer() {
  if (inputText.value !== "") {
    eightBall.classList.add('hidden')
    text.classList.remove('hidden')
    text.innerText = answers[getRandomIndex(answers)];
    inputText.value = ""
    clearButton.classList.add('clear-active')
  } else {
    return
  }
}

function clearAnswer() {
  eightBall.classList.remove('hidden')
  text.classList.add('hidden')
  clearButton.classList.remove('clear-active')
}
