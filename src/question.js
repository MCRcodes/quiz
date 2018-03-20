function Question(challenge, answer) {
    this.challenge = challenge;
    this.answer = answer;
  }
  
  Question.prototype.verify = function verify(guess) {
    return guess === this.answer;
  }
  
  module.exports = Question;