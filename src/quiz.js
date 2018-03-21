const INITIAL_SCORE = 0;

function Quiz(questions, name) {
    this.questions = questions;
    this.name = name;
    this.currentQuestionIndex = 0;
    this.score = INITIAL_SCORE;
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

  /* Quiz.prototype.highScores = function highScores() {
    quizScores.sort(function(a, b){return a.score - b.score});
  } */
  
  module.exports = Quiz;