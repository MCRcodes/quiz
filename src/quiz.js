const INITIAL_SCORE = 0;
const HIGH_SCORE = 0;

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
  const player = this.player;

  if (this.isFinished) {
    return 'Game Over';
  }
  const isCorrect = this.questions[this.currentQuestionIndex].verify(guess);
  this.moveNextQuestion();
  if (isCorrect) {
    this.score++;
  }
  if (this.isFinished && this.isHighScore()) {
    this.setHighScore();
    return (`Well done ${this.player}! New High Score of ${this.highScore} for ${this.name} achieved.`);
  }
  return isCorrect;
}

Quiz.prototype.moveNextQuestion = function moveNextQuestion() {
  this.currentQuestionIndex ++;
}

Quiz.prototype.checkhighScores = function checkhighScores() {
  if (this.isFinished) {
    this.player.saveHighScore(this.name, this.score);
  }
} 

Quiz.prototype.isHighScore = function isHighScore() {
  return this.score > this.highScore
} 

Quiz.prototype.setHighScore = function setHighScore() {
  this.highScore = this.score;
}
  
module.exports = Quiz;