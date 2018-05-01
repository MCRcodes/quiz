const Question = require('./src/question');
const Quiz = require('./src/quiz');
const Player = require('./src/player');

const player = new Player('Clover');

const questions = [
  new Question('What is the capital of France?', 'Paris'),
  new Question('What is the capital of Germany?', 'Berlin'),
  new Question('What is the capital of Australia?', 'Canberra'),
  new Question('What is the capital of New Zealand?', 'Wellington'),
  new Question('Which country is the second biggest in the world?', 'Canada'),

];

const quiz = new Quiz(questions, 'Geography Quiz', player);

const questions2 = [
  new Question('What is the biggest planet in our solar system?', 'Jupiter'),
  new Question('How many bones do sharks have in their bodies?', '0'),
  new Question('Pure water has a pH level of around?', '7'),
  new Question('How many arms does a squid have?', '10'),
  new Question('Who first claimed that the world was not flat but a sphere?', 'Pythagoras'),
];

const quiz2 = new Quiz(questions2, 'Science Quiz', player);

module.exports = {
  geography: quiz,
  science: quiz2,
  clover: player,
}