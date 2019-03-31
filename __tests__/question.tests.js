const Question = require('../src/question');

describe('question', () => {
  const challenge = 'challenge';
  const answer = 'answer';
  const question = new Question(challenge, answer);
  it('instantiates a question', () => {
    expect(question).toBeInstanceOf(Object);
  });
  it('has a challenge property', () => {
    expect(question).toHaveProperty('challenge');
  });
  it('has a answer property', () => {
    expect(question).toHaveProperty('answer');
  });
  it('challenge contains a string', () => {
    expect(question.challenge).toBeTruthy();
  });
  it('answer contains a string', () => {
    expect(question.answer).toBeTruthy();
  });
});
describe('verifying answers', () => {
  let question;
  const challenge = 'mockChallenge';
  const answer = 'mockAnswer';
  beforeEach(() => {
    question = new Question(challenge, answer);
  });
  it('verifyAnswer returns true/false if guess is correct', () => {
    expect(typeof question.verifyAnswer()).toBe('boolean');
  });
  it('it returns true for a correct answer', () => {
    expect(question.verifyAnswer(answer)).toBe(true);
  });
  it('returns false for an incorrect answer', () => {
    expect(question.verifyAnswer('wrongAnswer')).toBe(false);
  });
});
