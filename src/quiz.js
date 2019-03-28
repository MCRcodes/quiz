class Quiz {
  constructor(name, questions) {
    this.name = name
    this.questions = questions;
  }
  readQuestion() {
    return this.questions[0].challenge;
  }
  answerCurrentQuestion(answer) {
    return this.questions[0].verifyAnswer(answer);
  }
}

module.exports = Quiz;