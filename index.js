const Question = require('./src/question');
const Quiz = require('./src/quiz');

const question = new Question("What's the capital of Belgium?", 'Brussels');
const question2 = new Question("What's the capital of Somalia?", 'Mogadishu');
const quiz = new Quiz('Geography quiz', [question, question2]);

console.log(quiz.currentQuestion); // What's the capital of Belgium?

console.log(quiz.answerCurrentQuestion('Brussels')); // 'Correct'
console.log(quiz.answerCurrentQuestion('Sheffield')); // 'Incorrect'
