const INITIAL_SCORE = 0;
const HIGH_SCORE = 1;

function Quiz(questions, name, player) {
  this.questions = questions;
  this.currentQuestionIndex = 0;
  this.name = name;
  this.player = player;
  this.score = INITIAL_SCORE;
  this.highScore = HIGH_SCORE;
}

Quiz.prototype = {
  get isFinished() {
    return this.currentQuestionIndex >= this.questions.length;
  }
};
  
Quiz.prototype.readCurrentQuestion = function readCurrentQuestion() {
  if (this.isFinished) {
    return 'Game Over';
  }
  return this.questions[this.currentQuestionIndex].challenge;
}
  
Quiz.prototype.verifyCurrentQuestion = function verifyCurrentQuestion(guess) {
  if (this.isFinished) {
    return 'Game Over';
  }
  const isCorrect = this.questions[this.currentQuestionIndex].verify(guess);
  this.moveNextQuestion();
  if (isCorrect) {
    this.score++;
  }
  return isCorrect;
}

Quiz.prototype.moveNextQuestion = function moveNextQuestion() {
  this.currentQuestionIndex ++;
}

Quiz.prototype.highScores = function highScores() {
  if (this.isFinished) {
    this.player.saveHighScore(this.name, this.score);
  }
} 

Quiz.prototype.quizHighScore = function quizHighScore() {
  if (this.isFinished) {
    if (this.score > this.highScore) {
      this.highScore = this.score;
      return (`Well done ${this.player.name}! New High Score of ${this.highScore} for ${this.name} achieved.`);
    }
  }
} 
  
module.exports = Quiz;