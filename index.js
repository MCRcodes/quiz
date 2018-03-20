const Question = require('./src/question');
const Quiz = require('./src/quiz');

const questions = [
  new Question('What is the capital of France?', 'Paris'),
  new Question('What is the capital of Germany?', 'Berlin'),
];

const quiz = new Quiz(questions, 'Geography Quiz');

const questions2 = [
  new Question('What is the biggest planet in our solar system?', 'Jupiter'),
  new Question('What has the scientific formula H2O?', 'Water'),
];

const quiz2 = new Quiz(questions2, 'Science Quiz');

module.exports = {
    geography: quiz,
    science: quiz2,
}