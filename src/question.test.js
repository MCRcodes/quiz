const Question = require('./question');

describe('Question', () => {
  describe('constructor', () => {
    it('has the given answer', () => {
      const answer = 'Brussels';

      const question = new Question(jest.fn(), answer);

      expect(question.answer).toBe(answer);
    });

    it('has the given challenge', () => {
      const challenge = 'What is the capital of Belgium?';

      const question = new Question(challenge, jest.fn());

      expect(question.challenge).toBe(challenge);
    });
  });

  describe('verify', () => {
    it('returns true if the guess is correct', () => {
      const answer = 'Brussels';
      const question = new Question("What's the capital of Belgium", answer);

      const result = question.verify(answer);

      expect(result).toBe(true);
    });

    it('returns false if the guess is incorrect', () => {
      const answer = 'Brussels';
      const question = new Question("What's the capital of Belgium", answer);

      const result = question.verify('Sheffield');

      expect(result).toBe(false);
    });
  });
});
