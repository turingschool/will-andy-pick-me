var messages = [
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
'Don\'t count on it.',
'My reply is no.',
'My sources say no.',
'Outlook not so good.',
'Very doubtful.',
];

var userQuestion = document.querySelector('#question');
console.log(userQuestion);

var answerQuestion = document.querySelector('.submit-btn');
console.log(answerQuestion);
var theMessage = document.querySelector('.message');
var repeatQuestion =document.querySelector('.repeat-ques');

// answerQuestion.addEventListener('click', randomAnswer);
//
// function randomAnswer() {
//   var randomNum = Math.floor(Math.random() * messages.length);
//   theMessage.innerText = "Yikes"
//   // repeatQuestion.innerText = userQuestion.value;
// };
