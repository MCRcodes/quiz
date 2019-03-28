class Question {
  constructor(challenge, answer) {
    this.challenge = challenge;
    this.answer = answer;
  }

  verifyAnswer(guess) {
    return guess === this.answer;
  }
}

module.exports = Question;