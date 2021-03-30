class Question {
  constructor(challenge, answer) {
    this.challenge = challenge;
    this.answer = answer;
  }

  verify(guessy) {
    return guessy === this.answer;
  }
}

module.exports = Question;
