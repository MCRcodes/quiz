class Quiz {
  constructor(name, questions) {
    this.name = name;
    this.questions = questions;
  }

  get currentQuestion() {
    return this.questions[0].challenge;
  }

  answerCurrentQuestion(guess) {
    return this.questions[0].verify(guess) ? 'Correct' : 'Incorrect';
  }
}

module.exports = Quiz;
